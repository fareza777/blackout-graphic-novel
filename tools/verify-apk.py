"""Verify the actual signed APK payload against the prepared offline bundle."""
import hashlib
import json
import pathlib
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
import zipfile

root = pathlib.Path(__file__).resolve().parent.parent
apk = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else root / "output/android/Blackout-Frequency-v1.1.0-test-ads.apk"
report = json.loads((root / "output/android/packaging-report.json").read_text(encoding="utf-8"))
with zipfile.ZipFile(apk) as archive:
    names = archive.namelist()
    if archive.testzip() is not None:
        raise RuntimeError("APK contains a damaged entry")
    for record in report["files"]:
        entry = "assets/www/" + record["path"]
        data = archive.read(entry)
        if len(data) != record["bytes"] or hashlib.sha256(data).hexdigest() != record["sha256"]:
            raise RuntimeError("APK asset differs from verified source: " + entry)
        if entry.endswith((".mp3", ".webp")) and archive.getinfo(entry).compress_type != zipfile.ZIP_STORED:
            raise RuntimeError("Media must be stored directly for offline seeking: " + entry)
    for name in names:
        if re.search(r"(?:\.p12|\.jks|\.keystore|signing.*\.properties|voice-cache|tools/|output/)", name):
            raise RuntimeError("Private authoring file was included: " + name)
    runtime_files = [name for name in names if name.startswith("assets/www/") and name.endswith((".js", ".html"))]
    for name in runtime_files:
        source = archive.read(name).decode("utf-8")
        if "DEEPGRAM_API_KEY" in source or "api.deepgram.com" in source:
            raise RuntimeError("Unexpected production API configuration: " + name)
    ad_ids = set()
    for name in names:
        if re.fullmatch(r"classes\d*\.dex", name):
            ad_ids.update(value.decode("ascii") for value in re.findall(rb"ca-app-pub-\d{16}[~/]\d{10}", archive.read(name)))
    expected_ad_ids = {"ca-app-pub-3940256099942544" + suffix for suffix in ("~3347511713", "/9214589741", "/1033173712", "/5224354917")}
    if not expected_ad_ids.issubset(ad_ids) or any(not value.startswith("ca-app-pub-3940256099942544") for value in ad_ids):
        raise RuntimeError("The test APK must contain all four Google demo IDs and no real publisher IDs")

sdk = pathlib.Path(__import__("os").environ.get("ANDROID_SDK_ROOT", "C:/Android/Sdk"))
badging = subprocess.check_output([str(sdk / "build-tools/36.0.0/aapt.exe"), "dump", "badging", str(apk)], text=True, encoding="utf-8")
if "name='com.blackoutfrequency.game'" not in badging or ("versionName='" + report["version"] + "'") not in badging:
    raise RuntimeError("Unexpected Android identity")
if "sdkVersion:'26'" not in badging or "targetSdkVersion:'36'" not in badging:
    raise RuntimeError("Unexpected Android compatibility")
permissions = re.findall(r"uses-permission: name='([^']+)'", badging)
internal_permission = "com.blackoutfrequency.game.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION"
normal_ad_permissions = {internal_permission, "android.permission.INTERNET", "android.permission.ACCESS_NETWORK_STATE", "android.permission.READ_BASIC_PHONE_STATE", "android.permission.WAKE_LOCK", "android.permission.FOREGROUND_SERVICE", "com.google.android.gms.permission.AD_ID"}
if "application-debuggable" in badging or any(permission not in normal_ad_permissions for permission in permissions):
    raise RuntimeError("The release must not be debuggable or request unreviewed permissions")
if "native-code:" in badging:
    raise RuntimeError("This universal build should not depend on a device ABI")

unit_tests = []
for file in (root / "android/app/build/test-results/testReleaseUnitTest").glob("TEST-*.xml"):
    suite = ET.parse(file).getroot()
    if int(suite.attrib["failures"]) or int(suite.attrib["errors"]):
        raise RuntimeError("Android unit tests failed")
    unit_tests.append({"suite": suite.attrib["name"], "tests": int(suite.attrib["tests"]), "failures": 0})
lint = ET.parse(root / "android/app/build/reports/lint-results-release.xml").getroot()
errors = [issue.attrib["id"] for issue in lint.findall("issue") if issue.attrib["severity"] in ("Error", "Fatal")]
if errors:
    raise RuntimeError("Android lint errors: " + str(errors))

result = {"apk": apk.name, "applicationId": report["applicationId"], "version": report["version"], "minAndroid": "8.0", "minSdk": 26, "targetSdk": 36, "universal": True, "release": True, "permissions": permissions, "runtimePermissions": [], "bytes": apk.stat().st_size, "sizeMB": round(apk.stat().st_size / 1000000, 2), "sizeMiB": round(apk.stat().st_size / 1048576, 2), "sha256": hashlib.sha256(apk.read_bytes()).hexdigest(), "verifiedRuntimeFiles": len(report["files"]), "illustrations": report["illustrations"], "voiceClips": report["voiceClips"], "voiceMinutes": report["voiceMinutes"], "allMediaStoredForDirectAccess": True, "noApiCredential": True, "unitTests": unit_tests, "lintErrors": 0}
result["admob"] = {"testMode": True, "sdk": "GMA Next-Gen 1.5.0", "ump": "4.0.0", "verifiedDemoIds": sorted(expected_ad_ids), "onlyGoogleDemoPublisher": True}
device_record = root / "output/android/device-verification.json"
if device_record.is_file():
    device = json.loads(device_record.read_text(encoding="utf-8-sig"))
    if device.get("installedApkSha256") == result["sha256"] and device.get("status") == "passed":
        result["deviceVerification"] = device
(root / "output/android/apk-verification.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
(root / "output/android/aapt-badging.txt").write_text(badging, encoding="utf-8")
print(json.dumps({key: value for key, value in result.items() if key not in ("unitTests",)}))

param([switch]$SkipTests)
$ErrorActionPreference = 'Stop'
$apkProject = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$apkAndroid = Join-Path $apkProject 'android'
$apkPreviousSigning = $env:BLACKOUT_SIGNING_PROPERTIES
Push-Location -LiteralPath $apkProject
try {
    & node (Join-Path $PSScriptRoot 'prepare-android.mjs')
    if ($LASTEXITCODE -ne 0) { throw 'Android content preparation failed.' }
    $apkSigning = & node (Join-Path $PSScriptRoot 'android-signing.mjs') | ConvertFrom-Json
    if ($LASTEXITCODE -ne 0) { throw 'Android release signing setup failed.' }
    $env:BLACKOUT_SIGNING_PROPERTIES = $apkSigning.properties
    $apkSdk = if ($env:ANDROID_SDK_ROOT) { $env:ANDROID_SDK_ROOT } elseif ($env:ANDROID_HOME) { $env:ANDROID_HOME } else { Join-Path $env:LOCALAPPDATA 'Android\Sdk' }
    if (!(Test-Path -LiteralPath $apkSdk)) { throw 'Install the Android SDK or set ANDROID_SDK_ROOT before building.' }
    [IO.File]::WriteAllText((Join-Path $apkAndroid 'local.properties'), ('sdk.dir=' + $apkSdk.Replace('\','/').Replace(':','\:') + "`n"))
    Push-Location -LiteralPath $apkAndroid
    try {
        $apkTasks = if ($SkipTests) { @(':app:assembleRelease') } else { @(':app:testReleaseUnitTest', ':app:lintRelease', ':app:assembleRelease') }
        & (Join-Path $apkAndroid 'gradlew.bat') --no-daemon --console=plain @apkTasks
        if ($LASTEXITCODE -ne 0) { throw 'Android build or verification failed.' }
    } finally { Pop-Location }
    $apkMetadata = Get-Content -LiteralPath (Join-Path $apkAndroid 'app\build\outputs\apk\release\output-metadata.json') -Raw | ConvertFrom-Json
    $apkOutput = Join-Path $apkProject ('output\android\Blackout-Frequency-v' + $apkMetadata.elements[0].versionName + '-test-ads.apk')
    Copy-Item -LiteralPath (Join-Path $apkAndroid 'app\build\outputs\apk\release\app-release.apk') -Destination $apkOutput -Force
    $apkSigner = Join-Path $apkSdk 'build-tools\36.0.0\apksigner.bat'
    & $apkSigner verify --verbose --print-certs $apkOutput
    if ($LASTEXITCODE -ne 0) { throw 'APK signature verification failed.' }
    $apkHash = (Get-FileHash -LiteralPath $apkOutput -Algorithm SHA256).Hash.ToLowerInvariant()
    [IO.File]::WriteAllText(($apkOutput + '.sha256'), ($apkHash + '  ' + [IO.Path]::GetFileName($apkOutput) + "`n"))
    [PSCustomObject]@{Apk=$apkOutput;MiB=[Math]::Round((Get-Item -LiteralPath $apkOutput).Length / 1MB,2);Sha256=$apkHash} | ConvertTo-Json
} finally {
    if ($null -eq $apkPreviousSigning) { Remove-Item Env:BLACKOUT_SIGNING_PROPERTIES -ErrorAction SilentlyContinue } else { $env:BLACKOUT_SIGNING_PROPERTIES=$apkPreviousSigning }
    Pop-Location
}

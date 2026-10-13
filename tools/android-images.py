"""Prepare Android-only WebP copies and launcher icons; original art is untouched."""
import concurrent.futures
import hashlib
import json
import math
import pathlib
import sys
from PIL import Image, ImageChops, ImageStat

plan = json.loads(pathlib.Path(sys.argv[1]).read_text(encoding="utf-8"))
cache = pathlib.Path(plan["cache"])
cache.mkdir(parents=True, exist_ok=True)

def convert(item):
    source, target = pathlib.Path(item["source"]), pathlib.Path(item["target"])
    digest = hashlib.sha256(source.read_bytes()).hexdigest()
    cached = cache / (digest + "-q92.webp")
    stats_file = cached.with_suffix(".json")
    with Image.open(source) as image:
        image = image.convert("RGB")
        if not cached.exists():
            image.save(cached, "WEBP", quality=92, method=6)
        with Image.open(cached) as encoded:
            if encoded.size != image.size:
                raise RuntimeError("An Android illustration changed dimensions: " + str(source))
            rms = ImageStat.Stat(ImageChops.difference(image, encoded.convert("RGB"))).rms
            mse = sum(value * value for value in rms) / 3
            psnr = 99.0 if mse == 0 else 10 * math.log10(255 * 255 / mse)
            if psnr < 34:
                cached = cache / (digest + "-lossless.webp")
                if not cached.exists():
                    image.save(cached, "WEBP", lossless=True, method=6)
                psnr = 99.0
            result = {"path": item["path"], "width": image.width, "height": image.height, "sourceBytes": source.stat().st_size, "bytes": cached.stat().st_size, "psnrDb": round(psnr, 2)}
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(cached.read_bytes())
    stats_file.write_text(json.dumps(result), encoding="utf-8")
    return result

with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(convert, plan["images"]))

with Image.open(plan["icon"]) as icon:
    icon = icon.convert("RGBA")
    for density, scale in [("mdpi", 1), ("hdpi", 1.5), ("xhdpi", 2), ("xxhdpi", 3), ("xxxhdpi", 4)]:
        directory = pathlib.Path(plan["resources"]) / ("mipmap-" + density)
        directory.mkdir(parents=True, exist_ok=True)
        size = round(48 * scale)
        icon.resize((size, size), Image.Resampling.LANCZOS).save(directory / "ic_launcher.png")
        foreground_size = round(108 * scale)
        foreground = Image.new("RGBA", (foreground_size, foreground_size), (0, 0, 0, 0))
        inset_size = round(foreground_size * 0.90)
        foreground.alpha_composite(icon.resize((inset_size, inset_size), Image.Resampling.LANCZOS), ((foreground_size - inset_size) // 2, (foreground_size - inset_size) // 2))
        foreground.save(directory / "ic_launcher_foreground.png")

pathlib.Path(plan["report"]).write_text(json.dumps(results, indent=2), encoding="utf-8")
print(json.dumps({"images": len(results), "sourceMiB": round(sum(i["sourceBytes"] for i in results) / 1048576, 2), "androidMiB": round(sum(i["bytes"] for i in results) / 1048576, 2), "minimumPsnrDb": min(i["psnrDb"] for i in results)}))

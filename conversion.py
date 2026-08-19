# this is a utility tool for converting gifs to mp4 files, h264 visually-lossless?
# to use:
#   python conversion.py file1.gif file2.gif ...

import argparse
import subprocess
import shutil
from pathlib import Path

RESOURCES = Path(__file__).parent / "resources"


def human(n):
    for unit in ("B", "KB", "MB", "GB"):
        if n < 1024:
            return f"{n:.1f}{unit}"
        n /= 1024
    return f"{n:.1f}TB"


def resolve(name: str) -> Path:
    p = Path(name)
    if p.is_absolute() or p.exists():
        return p
    return RESOURCES / p


def convert(src: Path):
    if not src.exists():
        print(f"skip (not found): {src}")
        return

    dst = src.with_suffix(".mp4")
    cmd = [
        "ffmpeg", "-y",
        "-i", str(src),
        "-movflags", "+faststart",
        "-pix_fmt", "yuv420p",
        "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2",
        "-c:v", "libx264",
        "-crf", "18",
        "-preset", "slow",
        "-an",
        str(dst),
    ]
    print(f"converting {src.name} ...")
    subprocess.run(cmd, check=True, capture_output=True)

    before = src.stat().st_size
    after = dst.stat().st_size
    print(f"  {human(before)} -> {human(after)} ({dst.name})")


def main():
    parser = argparse.ArgumentParser(description="convert gifs to mp4 files")
    parser.add_argument("files", nargs="+", help="gif filenames to convert (use paths relative to resources/ or absolute)")
    args = parser.parse_args()

    if not shutil.which("ffmpeg"):
        raise SystemExit("ffmpeg not found on PATH")

    targets = [resolve(f) for f in args.files]

    for src in targets:
        convert(src)


if __name__ == "__main__":
    main()

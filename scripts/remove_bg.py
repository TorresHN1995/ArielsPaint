"""Build two transparent variants of the Ariel's logo from FONDOS JPG3.png:

  * logo.png        - original colours (black text + orange) on transparent
  * logo-light.png  - black recoloured to white, orange preserved
                      (for use over dark backgrounds)

Background detection: the source has a radial grey gradient (RGB ~166-213).
Pixels are kept if they are dark (text) or saturated (orange); otherwise
they become transparent, with soft ramps for clean anti-aliased edges.
"""
from PIL import Image
from pathlib import Path

SRC = Path(__file__).resolve().parents[2] / "FONDOS JPG3.png"
ASSETS = Path(__file__).resolve().parents[1] / "src" / "assets"
DST_DARK = ASSETS / "logo.png"
DST_LIGHT = ASSETS / "logo-light.png"

DARK_FULL, DARK_FADE = 80, 130
SAT_FULL, SAT_FADE = 50, 15

src = Image.open(SRC).convert("RGBA")
w, h = src.size

dark_img = Image.new("RGBA", (w, h))
light_img = Image.new("RGBA", (w, h))
dark_px = dark_img.load()
light_px = light_img.load()
src_px = src.load()

for y in range(h):
    for x in range(w):
        r, g, b, _ = src_px[x, y]
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        chroma = max(r, g, b) - min(r, g, b)

        if lum <= DARK_FULL:
            a_dark = 255
        elif lum >= DARK_FADE:
            a_dark = 0
        else:
            a_dark = int(255 * (DARK_FADE - lum) / (DARK_FADE - DARK_FULL))

        if chroma >= SAT_FULL:
            a_sat = 255
        elif chroma <= SAT_FADE:
            a_sat = 0
        else:
            a_sat = int(255 * (chroma - SAT_FADE) / (SAT_FULL - SAT_FADE))

        alpha = max(a_dark, a_sat)
        dark_px[x, y] = (r, g, b, alpha)

        # Light variant: invert grayscale pixels to white, keep saturated colour
        if chroma <= SAT_FADE:
            light_px[x, y] = (255, 255, 255, alpha)
        elif chroma >= SAT_FULL:
            light_px[x, y] = (r, g, b, alpha)
        else:
            # blend toward white based on how grey the pixel is
            t = (chroma - SAT_FADE) / (SAT_FULL - SAT_FADE)
            nr = int(255 * (1 - t) + r * t)
            ng = int(255 * (1 - t) + g * t)
            nb = int(255 * (1 - t) + b * t)
            light_px[x, y] = (nr, ng, nb, alpha)


def trim_and_save(img: Image.Image, dst: Path) -> None:
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        pad = max(8, img.width // 60)
        padded = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
        padded.paste(img, (pad, pad))
        img = padded
    img.save(dst, "PNG", optimize=True)
    print(f"  -> {dst.name}  {img.size}")


print("Saving:")
trim_and_save(dark_img, DST_DARK)
trim_and_save(light_img, DST_LIGHT)

from PIL import Image, ImageDraw, ImageFont
import math

W, H = 1200, 630

# Brand colors
BG        = (10, 22, 40)          # #0A1628
TEAL      = (0, 180, 166)         # #00B4A6
TEAL_DIM  = (0, 130, 120)
WHITE     = (255, 255, 255)
WHITE60   = (255, 255, 255, 153)
WHITE40   = (255, 255, 255, 100)
SLATE     = (148, 163, 184)       # slate-400

img  = Image.new('RGB', (W, H), BG)
draw = ImageDraw.Draw(img, 'RGBA')

# ── Helpers ──────────────────────────────────────────────────────────────────

def load(path, size, index=0):
    try:
        return ImageFont.truetype(path, size, index=index)
    except Exception:
        return ImageFont.load_default()

def rounded_rect(d, xy, radius, fill):
    x0, y0, x1, y1 = xy
    d.rounded_rectangle([x0, y0, x1, y1], radius=radius, fill=fill)

# ── Fonts ─────────────────────────────────────────────────────────────────────
SYS = '/System/Library/Fonts/'

font_title    = load(SYS + 'Palatino.ttc',     74, index=1)   # Bold
font_title_sm = load(SYS + 'Palatino.ttc',     74, index=1)
font_serif    = load(SYS + 'Palatino.ttc',     30, index=0)   # Regular (italic)
font_sans_lg  = load(SYS + 'HelveticaNeue.ttc',22, index=0)
font_sans_md  = load(SYS + 'HelveticaNeue.ttc',18, index=0)
font_sans_sm  = load(SYS + 'HelveticaNeue.ttc',15, index=0)
font_cta      = load(SYS + 'HelveticaNeue.ttc',21, index=3)   # Bold

# ── Right-side decorative circles ─────────────────────────────────────────────
# Large teal circle (partially off-screen on the right)
cx, cy = 980, 315
r = 290
draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=(*TEAL, 28), width=1)

r2 = 220
draw.ellipse([cx-r2, cy-r2, cx+r2, cy+r2], outline=(*TEAL, 40), width=1)

r3 = 140
draw.ellipse([cx-r3, cy-r3, cx+r3, cy+r3], outline=(*TEAL, 55), width=1)

# Inner filled circle (soft glow)
r_glow = 90
glow_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow_img)
gd.ellipse([cx-r_glow, cy-r_glow, cx+r_glow, cy+r_glow], fill=(*TEAL, 22))
img.paste(Image.alpha_composite(Image.new('RGBA', (W, H), (0,0,0,0)), glow_img).convert('RGB'), mask=glow_img.split()[3])

# Small accent dot top-right
draw.ellipse([1120, 60, 1160, 100], fill=(*TEAL, 80))
draw.ellipse([1060, 30, 1090, 60],  fill=(*TEAL, 45))

# ── Dot grid pattern (subtle, right side) ─────────────────────────────────────
dot_layer = Image.new('RGBA', (W, H), (0, 0, 0, 0))
dd = ImageDraw.Draw(dot_layer)
for gx in range(700, W, 28):
    for gy in range(0, H, 28):
        dd.ellipse([gx-1, gy-1, gx+1, gy+1], fill=(*TEAL, 30))
img.paste(Image.alpha_composite(Image.new('RGBA', (W, H), (0,0,0,0)), dot_layer).convert('RGB'), mask=dot_layer.split()[3])

# ── Teal left accent bar ───────────────────────────────────────────────────────
draw.rectangle([60, 100, 66, 380], fill=TEAL)

# ── Rating badge (top-left pill) ──────────────────────────────────────────────
badge_x, badge_y = 88, 88
badge_w, badge_h = 290, 40
rounded_rect(draw, [badge_x, badge_y, badge_x+badge_w, badge_y+badge_h], 20, (*TEAL, 28))
draw.rounded_rectangle([badge_x, badge_y, badge_x+badge_w, badge_y+badge_h], radius=20, outline=(*TEAL, 80), width=1)

# Star dot
draw.ellipse([badge_x+14, badge_y+13, badge_x+20, badge_y+19], fill=TEAL)

badge_font = load(SYS + 'HelveticaNeue.ttc', 15, index=3)
draw.text((badge_x+30, badge_y+11), "4.9★  ·  107+ Patient Reviews", font=badge_font, fill=TEAL)

# ── Main headline ─────────────────────────────────────────────────────────────
LINE1 = "Dr Subhrajyoti"
LINE2 = "Biswas"

draw.text((88, 148), LINE1, font=font_title, fill=WHITE)
draw.text((88, 230), LINE2, font=font_title, fill=WHITE)

# ── Teal subtitle ─────────────────────────────────────────────────────────────
draw.text((92, 318), "Ayurvedacharya  ·  Pan Bazaar, Guwahati", font=font_serif, fill=TEAL)

# ── Divider line ──────────────────────────────────────────────────────────────
draw.rectangle([88, 362, 560, 363], fill=(*WHITE, 25))

# ── Tagline ───────────────────────────────────────────────────────────────────
draw.text((88, 380), "Nadi Pariksha  ·  Panchakarma Detox  ·  Herbal Healing", font=font_sans_lg, fill=SLATE)

# ── CTA button ────────────────────────────────────────────────────────────────
btn_x, btn_y = 88, 438
btn_w, btn_h = 316, 56
rounded_rect(draw, [btn_x, btn_y, btn_x+btn_w, btn_y+btn_h], 28, TEAL)
draw.text((btn_x + 36, btn_y + 15), "Book on WhatsApp  >>", font=font_cta, fill=WHITE)

# ── Secondary CTA (outline) ───────────────────────────────────────────────────
btn2_x = btn_x + btn_w + 18
btn2_w = 200
draw.rounded_rectangle([btn2_x, btn_y, btn2_x+btn2_w, btn_y+btn_h], radius=28, outline=(*WHITE, 60), width=1)
draw.text((btn2_x + 30, btn_y + 15), "View Packages", font=font_cta, fill=(*WHITE, 180))

# ── Bottom URL strip ──────────────────────────────────────────────────────────
draw.rectangle([0, H-48, W, H], fill=(6, 14, 26))
draw.text((88, H-33), "dr-biswas-ayurveda.vercel.app", font=font_sans_sm, fill=(*WHITE, 80))
draw.text((W-260, H-33), "Guwahati, Assam 781001", font=font_sans_sm, fill=(*WHITE, 50))

# ── Save ──────────────────────────────────────────────────────────────────────
out = '/Users/pritam/Desktop/Client/public/og-image.jpg'
img.save(out, 'JPEG', quality=88, optimize=True)

from pathlib import Path
size_kb = Path(out).stat().st_size / 1024
print(f"Saved {W}x{H} → {out}")
print(f"File size: {size_kb:.1f} KB")

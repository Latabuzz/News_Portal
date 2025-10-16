from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

# Create directory if not exists
output_dir = "asset/image"
os.makedirs(output_dir, exist_ok=True)

def create_placeholder_image(filename, category, color_start, color_end):
    """Create a professional placeholder image"""
    width, height = 1200, 800
    img = Image.new('RGB', (width, height), color=color_start)
    
    # Create gradient background
    pixels = img.load()
    for y in range(height):
        # Interpolate between start and end color
        ratio = y / height
        r = int(color_start[0] * (1 - ratio) + color_end[0] * ratio)
        g = int(color_start[1] * (1 - ratio) + color_end[1] * ratio)
        b = int(color_start[2] * (1 - ratio) + color_end[2] * ratio)
        for x in range(width):
            pixels[x, y] = (r, g, b)
    
    draw = ImageDraw.Draw(img)
    
    # Add text with shadow effect
    try:
        font_size = 80
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Text position
    text_bbox = draw.textbbox((0, 0), category, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Shadow
    draw.text((x+3, y+3), category, font=font, fill=(0, 0, 0, 100))
    # Main text
    draw.text((x, y), category, font=font, fill=(255, 255, 255))
    
    # Save image
    img.save(os.path.join(output_dir, filename))
    print(f"✓ Created {filename}")

# Generate images for categories
categories = [
    ("travel2.jpeg", "Travel & Adventure", (0, 133, 229), (0, 212, 212)),
]

for filename, category, color1, color2 in categories:
    create_placeholder_image(filename, category, color1, color2)

print("\n✓ Semua gambar berhasil dibuat!")

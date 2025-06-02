from ascii_magic import AsciiArt

my_art = AsciiArt.from_image("cat.webp")
html_full = my_art.to_html(columns=150)

ascii_only = html_full.split("<body>")[-1].split("</body>")[0].strip()

with open("public/ascii/ascii.html", "w") as f:
    f.write(ascii_only)

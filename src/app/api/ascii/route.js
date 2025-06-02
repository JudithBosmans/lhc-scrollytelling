import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "ascii", "ascii.html");

  try {
    const html = fs.readFileSync(filePath, "utf8");
    return new Response(html, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (e) {
    return new Response("Error reading file", { status: 500 });
  }
}

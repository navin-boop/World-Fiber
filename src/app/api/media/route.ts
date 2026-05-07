import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const media = await prisma.media.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ success: true, data: media });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch media" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const altText = (formData.get("altText") as string) || "";

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml", "application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ success: false, message: "File type not allowed" }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ success: false, message: "File size exceeds 5MB limit" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    const ext = file.name.split(".").pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    const url = `/uploads/${filename}`;
    const media = await prisma.media.create({
      data: {
        filename: file.name,
        url,
        altText,
        size: file.size,
        mimeType: file.type,
      },
    });

    return NextResponse.json({ success: true, data: media, url });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to upload file" }, { status: 500 });
  }
}

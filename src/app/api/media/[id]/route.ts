import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { unlink } from "fs/promises";
import path from "path";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const media = await prisma.media.update({ where: { id }, data: { altText: body.altText } });
    return NextResponse.json({ success: true, data: media });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to update media" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const media = await prisma.media.findUnique({ where: { id } });
    if (media) {
      const filepath = path.join(process.cwd(), "public", media.url);
      await unlink(filepath).catch(() => {});
      await prisma.media.delete({ where: { id } });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to delete media" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const faq = await prisma.fAQ.update({ where: { id }, data: body });
    return NextResponse.json({ success: true, data: faq });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to update FAQ" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.fAQ.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to delete FAQ" }, { status: 500 });
  }
}

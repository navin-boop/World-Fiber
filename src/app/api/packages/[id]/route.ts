import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const pkg = await prisma.package.findUnique({ where: { id } });
    if (!pkg) return NextResponse.json({ success: false, message: "Package not found" }, { status: 404 });
    return NextResponse.json({ success: true, data: pkg });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch package" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const pkg = await prisma.package.update({ where: { id }, data: body });
    return NextResponse.json({ success: true, data: pkg });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to update package" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.package.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to delete package" }, { status: 500 });
  }
}

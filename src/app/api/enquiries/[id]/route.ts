import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const enquiry = await prisma.enquiry.update({
      where: { id },
      data: { status: body.status },
    });
    return NextResponse.json({ success: true, data: enquiry });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to update enquiry" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    await prisma.enquiry.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to delete enquiry" }, { status: 500 });
  }
}

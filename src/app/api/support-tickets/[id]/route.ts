import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const ticket = await prisma.supportTicket.findUnique({
      where: { id },
      include: { notes: { include: { user: { select: { name: true, email: true } } }, orderBy: { createdAt: "asc" } } },
    });
    if (!ticket) return NextResponse.json({ success: false, message: "Ticket not found" }, { status: 404 });
    return NextResponse.json({ success: true, data: ticket });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch ticket" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const body = await req.json();
    const ticket = await prisma.supportTicket.update({
      where: { id },
      data: {
        ...(body.status && { status: body.status }),
        ...(body.priority && { priority: body.priority }),
        ...(body.assignedToId !== undefined && { assignedToId: body.assignedToId }),
      },
    });
    return NextResponse.json({ success: true, data: ticket });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to update ticket" }, { status: 500 });
  }
}

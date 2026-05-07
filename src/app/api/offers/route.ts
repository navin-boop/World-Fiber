import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const offers = await prisma.offer.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ success: true, data: offers });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch offers" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const offer = await prisma.offer.create({ data: body });
    return NextResponse.json({ success: true, data: offer });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to create offer" }, { status: 500 });
  }
}

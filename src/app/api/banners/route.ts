import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const placement = searchParams.get("placement");

  try {
    const where: Record<string, unknown> = { isActive: true };
    if (placement) where.placement = placement;

    const banners = await prisma.banner.findMany({
      where,
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ success: true, data: banners });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch banners" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const banner = await prisma.banner.create({ data: body });
    return NextResponse.json({ success: true, data: banner });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to create banner" }, { status: 500 });
  }
}

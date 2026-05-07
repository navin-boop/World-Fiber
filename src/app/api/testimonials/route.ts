import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ success: true, data: testimonials });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const testimonial = await prisma.testimonial.create({ data: body });
    return NextResponse.json({ success: true, data: testimonial });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to create testimonial" }, { status: 500 });
  }
}

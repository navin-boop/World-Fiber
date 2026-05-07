import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const faqs = await prisma.fAQ.findMany({
      where: { isActive: true },
      orderBy: [{ category: "asc" }, { sortOrder: "asc" }],
    });
    return NextResponse.json({ success: true, data: faqs });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch FAQs" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const faq = await prisma.fAQ.create({ data: body });
    return NextResponse.json({ success: true, data: faq });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to create FAQ" }, { status: 500 });
  }
}

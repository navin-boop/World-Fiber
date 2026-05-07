import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  type: z.string().default("GENERAL"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Phone number is required"),
  email: z.string().email().optional().or(z.literal("")),
  location: z.string().optional().default(""),
  interestedService: z.string().optional().default(""),
  interestedPackage: z.string().optional().default(""),
  message: z.string().optional().default(""),
  sourcePage: z.string().optional().default(""),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const enquiry = await prisma.enquiry.create({ data });
    return NextResponse.json({ success: true, data: enquiry });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: error.issues?.[0]?.message ?? "Validation error" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Failed to submit enquiry" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const status = searchParams.get("status");

  try {
    const where = status ? { status } : {};
    const [enquiries, total] = await Promise.all([
      prisma.enquiry.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.enquiry.count({ where }),
    ]);

    return NextResponse.json({ success: true, data: enquiries, total, page, limit });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch enquiries" }, { status: 500 });
  }
}

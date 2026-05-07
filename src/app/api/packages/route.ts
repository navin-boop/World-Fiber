import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  category: z.string().min(1),
  speed: z.string().min(1),
  price: z.number().positive(),
  billingCycle: z.string().default("monthly"),
  description: z.string().default(""),
  features: z.string().default("[]"),
  imageUrl: z.string().default(""),
  isPopular: z.boolean().default(false),
  isActive: z.boolean().default(true),
  sortOrder: z.number().default(0),
  termsTitle: z.string().default("Terms & Conditions"),
  termsContent: z.string().default(""),
});

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const active = searchParams.get("active");

  try {
    const where: Record<string, unknown> = {};
    if (category) where.category = category;
    if (active === "true") where.isActive = true;

    const packages = await prisma.package.findMany({
      where,
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    });
    return NextResponse.json({ success: true, data: packages });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    const pkg = await prisma.package.create({ data });
    return NextResponse.json({ success: true, data: pkg });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: error.issues?.[0]?.message ?? "Validation error" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Failed to create package" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = schema.parse(body);

    const existing = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json({ success: true, message: "Already subscribed!" });
    }

    await prisma.newsletterSubscriber.create({ data: { email } });
    return NextResponse.json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: error.issues?.[0]?.message ?? "Validation error" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Failed to subscribe" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: subscribers });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch subscribers" }, { status: 500 });
  }
}

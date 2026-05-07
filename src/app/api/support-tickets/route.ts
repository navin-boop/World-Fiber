import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateTicketNumber } from "@/lib/utils";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(7, "Phone is required"),
  email: z.string().email().optional().or(z.literal("")),
  customerId: z.string().optional().default(""),
  issueType: z.string().min(1, "Issue type is required"),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
  message: z.string().min(10, "Please describe your issue"),
  attachmentUrl: z.string().optional().default(""),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const ticketNumber = generateTicketNumber();
    const ticket = await prisma.supportTicket.create({
      data: { ...data, ticketNumber },
    });

    return NextResponse.json({ success: true, data: ticket, ticketNumber });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, message: error.issues?.[0]?.message ?? "Validation error" }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Failed to submit ticket" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  const status = searchParams.get("status");
  const priority = searchParams.get("priority");

  try {
    const where: Record<string, string> = {};
    if (status) where.status = status;
    if (priority) where.priority = priority;

    const [tickets, total] = await Promise.all([
      prisma.supportTicket.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.supportTicket.count({ where }),
    ]);

    return NextResponse.json({ success: true, data: tickets, total, page, limit });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch tickets" }, { status: 500 });
  }
}

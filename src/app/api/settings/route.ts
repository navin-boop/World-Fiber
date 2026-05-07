import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const settings = await prisma.siteSettings.findMany();
    const map: Record<string, string> = {};
    settings.forEach((s) => { map[s.key] = s.value; });
    return NextResponse.json({ success: true, data: map });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, string>;
    const updates = Object.entries(body).map(([key, value]) =>
      prisma.siteSettings.upsert({
        where: { key },
        update: { value },
        create: { key, value },
      })
    );
    await Promise.all(updates);
    return NextResponse.json({ success: true, message: "Settings saved successfully" });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to save settings" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { resolveDatabaseUrl } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function GET() {
  const info: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    node_env: process.env.NODE_ENV,
  };

  // Show which env var resolved (mask credentials)
  try {
    const url = resolveDatabaseUrl();
    const masked = url.replace(/:\/\/[^@]+@/, "://***@");
    info.db_url_source = masked;
  } catch (e) {
    info.db_url_error = String(e);
    return NextResponse.json({ ok: false, ...info }, { status: 500 });
  }

  // Test actual DB connectivity
  try {
    const userCount = await prisma.user.count();
    const adminExists = await prisma.user.findFirst({
      where: { role: "SUPER_ADMIN" },
      select: { email: true },
    });
    info.connected = true;
    info.user_count = userCount;
    info.admin_email = adminExists?.email ?? null;
    return NextResponse.json({ ok: true, ...info });
  } catch (e) {
    info.connected = false;
    info.db_error = String(e);
    return NextResponse.json({ ok: false, ...info }, { status: 500 });
  }
}

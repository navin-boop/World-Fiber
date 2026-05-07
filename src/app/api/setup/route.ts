import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// One-time setup endpoint to create the initial admin user.
// - If no SUPER_ADMIN exists: creates one with no secret required (first-run mode).
// - If SUPER_ADMIN already exists: requires SETUP_SECRET to replace.
// - Returns 409 if admin exists and no secret provided.
// Call once after first deployment, then this becomes a no-op.

export async function GET() {
  const existing = await prisma.user.findFirst({
    where: { role: "SUPER_ADMIN" },
    select: { email: true },
  }).catch(() => null);

  return NextResponse.json({
    adminExists: !!existing,
    adminEmail: existing?.email ?? null,
    message: existing
      ? "Admin user exists. POST /api/setup with {secret} to reset."
      : "No admin user. POST /api/setup with {} to create.",
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    const existing = await prisma.user.findFirst({
      where: { role: "SUPER_ADMIN" },
    });

    // If admin already exists, require SETUP_SECRET to prevent takeover.
    if (existing) {
      const setupSecret = process.env.SETUP_SECRET;
      if (!setupSecret || body.secret !== setupSecret) {
        return NextResponse.json(
          { success: false, message: "Admin already exists. Provide correct SETUP_SECRET to reset." },
          { status: 409 }
        );
      }
      // Reset existing admin password.
      const hash = await bcrypt.hash(body.password || "ChangeMe123!", 12);
      await prisma.user.update({
        where: { id: existing.id },
        data: { password: hash, isActive: true },
      });
      return NextResponse.json({ success: true, message: "Admin password reset.", email: existing.email });
    }

    // No admin exists — first-run mode, no secret required.
    const email = body.email || "admin@worldfibernet.net.np";
    const password = body.password || "ChangeMe123!";
    const hash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hash,
        name: "Super Admin",
        role: "SUPER_ADMIN",
        isActive: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin user created.",
      email: user.email,
    });
  } catch (error) {
    console.error("[setup] error:", error);
    return NextResponse.json(
      { success: false, message: "Setup failed. Check server logs." },
      { status: 500 }
    );
  }
}

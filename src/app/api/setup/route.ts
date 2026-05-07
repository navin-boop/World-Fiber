import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// One-time endpoint to create the initial admin user.
// Protected by SETUP_SECRET env var — set it in Vercel, call the
// endpoint once, then remove it to disable the route permanently.
//
// Usage:
//   POST /api/setup
//   Body: { "secret": "<value of SETUP_SECRET env var>" }
//
// Returns the created admin credentials on first call.
// Returns 409 if an admin user already exists.
// Returns 401 if the secret is wrong or not set.
// Returns 503 if SETUP_SECRET is not configured (disabled).

export async function POST(req: NextRequest) {
  const setupSecret = process.env.SETUP_SECRET;

  if (!setupSecret) {
    return NextResponse.json(
      { success: false, message: "Setup endpoint is disabled (SETUP_SECRET not configured)." },
      { status: 503 }
    );
  }

  try {
    const body = await req.json();

    if (body.secret !== setupSecret) {
      return NextResponse.json(
        { success: false, message: "Invalid setup secret." },
        { status: 401 }
      );
    }

    const existing = await prisma.user.findFirst({
      where: { role: "SUPER_ADMIN" },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: "Admin user already exists. Setup is complete." },
        { status: 409 }
      );
    }

    const password = body.password || "ChangeMe123!";
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email: body.email || "admin@worldfibernet.net.np",
        password: hashedPassword,
        name: "Super Admin",
        role: "SUPER_ADMIN",
        isActive: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin user created successfully. Remove SETUP_SECRET from Vercel env vars to disable this endpoint.",
      user: {
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { success: false, message: "Setup failed. Check server logs." },
      { status: 500 }
    );
  }
}

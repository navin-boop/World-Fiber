export async function register() {
  // Runs once per Node.js worker on startup — safe to do a quick DB check here.
  // On Vercel serverless this fires on each cold start; the findFirst guard
  // makes the admin creation idempotent.
  if (process.env.NEXT_RUNTIME === "nodejs") {
    try {
      const { prisma } = await import("@/lib/prisma");
      const { default: bcrypt } = await import("bcryptjs");

      const adminExists = await prisma.user.findFirst({
        where: { role: "SUPER_ADMIN" },
        select: { id: true },
      });

      if (!adminExists) {
        const hashedPassword = await bcrypt.hash("ChangeMe123!", 12);
        await prisma.user.create({
          data: {
            email: "admin@worldfibernet.net.np",
            password: hashedPassword,
            name: "Super Admin",
            role: "SUPER_ADMIN",
            isActive: true,
          },
        });
        console.log("[wfn] Admin user created on first startup.");
      }
    } catch (err) {
      // Log but never crash the app — seeding failure should not block requests.
      console.error("[wfn] Auto-seed failed:", err);
    }
  }
}

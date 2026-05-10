export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    try {
      // Use relative path — @/ alias may not resolve in all instrumentation contexts.
      const { prisma } = await import("../src/lib/prisma");
      const bcrypt = await import("bcryptjs");

      const existing = await prisma.user.findFirst({
        where: { role: "SUPER_ADMIN" },
        select: { id: true },
      });

      if (!existing) {
        const hash = await bcrypt.hash("ChangeMe123!", 12);
        await prisma.user.create({
          data: {
            email: "admin@worldfibernet.net.np",
            password: hash,
            name: "Super Admin",
            role: "SUPER_ADMIN",
            isActive: true,
          },
        });
        console.log("[wfn] Admin user created on startup.");
      }
    } catch {
      // Never crash the app over a seeding failure.
    }
  }
}

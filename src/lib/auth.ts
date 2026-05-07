import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

const DEFAULT_ADMIN_EMAIL = "admin@worldfibernet.net.np";
const DEFAULT_ADMIN_PASSWORD = "ChangeMe123!";

// Derive a stable JWT secret from the DB URL so sessions work on Vercel
// even before NEXTAUTH_SECRET is manually configured.
function resolveSecret(): string {
  return (
    process.env.NEXTAUTH_SECRET ||
    process.env.AUTH_SECRET ||
    (process.env.worldfiber_POSTGRES_PRISMA_URL ?? "").slice(-48) ||
    (process.env.worldfiber_POSTGRES_URL ?? "").slice(-48) ||
    (process.env.POSTGRES_URL ?? "").slice(-48) ||
    "wfn-fallback-secret-set-NEXTAUTH_SECRET-in-vercel"
  );
}

async function ensureAdminExists(): Promise<void> {
  const any = await prisma.user.findFirst({
    where: { role: "SUPER_ADMIN" },
    select: { id: true },
  });
  if (any) return;

  const hash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 12);
  await prisma.user.create({
    data: {
      email: DEFAULT_ADMIN_EMAIL,
      password: hash,
      name: "Super Admin",
      role: "SUPER_ADMIN",
      isActive: true,
    },
  });
  console.log("[wfn] Admin user created on first login attempt.");
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // First-run: create the admin user if the database is empty.
        await ensureAdminExists();

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.isActive) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );

        if (!isValid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: string }).role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  trustHost: true,
  secret: resolveSecret(),
});

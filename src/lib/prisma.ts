import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { resolveDatabaseUrl } from "./env";

function createPrismaClient() {
  const connectionString = resolveDatabaseUrl();
  const isProduction = process.env.NODE_ENV === "production";

  // Pass explicit SSL config in production.
  // Supabase and Vercel Postgres require SSL; pg v8 defaults vary by
  // platform so we set rejectUnauthorized:false to avoid cert-chain
  // rejections while still encrypting the connection.
  const adapter = new PrismaPg(
    isProduction
      ? { connectionString, ssl: { rejectUnauthorized: false } }
      : connectionString
  );

  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

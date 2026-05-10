import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { resolveDatabaseUrl } from "./env";

// Supabase's connection pooler serves a certificate chain that pg v8 rejects
// when rejectUnauthorized defaults to true, even if ssl:{rejectUnauthorized:false}
// is passed in PoolConfig — because pg re-applies sslmode=require from the URL
// and overwrites that setting. Setting NODE_TLS_REJECT_UNAUTHORIZED=0 at the
// process level is the standard fix for Supabase + pg in serverless environments.
if (process.env.NODE_ENV === "production") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

function createPrismaClient() {
  const connectionString = resolveDatabaseUrl();

  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { resolveDatabaseUrl } from "./env";

function createPrismaClient() {
  const connectionString = resolveDatabaseUrl();

  // Create the pg.Pool ourselves so we can override SSL settings explicitly.
  // Passing { connectionString, ssl } as PoolConfig lets the URL parser
  // re-apply sslmode=require which then overrides our rejectUnauthorized:false.
  // Passing a pre-built Pool instance bypasses that re-parsing entirely.
  const pool = new pg.Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });

  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

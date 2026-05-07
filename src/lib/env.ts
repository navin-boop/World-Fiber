/**
 * Resolves the PostgreSQL connection URL.
 *
 * For @prisma/adapter-pg (which owns its own pg.Pool), prefer the
 * NON-POOLING / direct URL.  Using the PgBouncer/Supavisor URL with
 * an additional client-side pool causes double-pooling and connection
 * failures on Supabase and Vercel Postgres.
 *
 * Priority for runtime adapter (direct connections):
 *   DATABASE_URL
 *   worldfiber_POSTGRES_URL_NON_POOLING   ← Supabase / Vercel direct
 *   worldfiber_POSTGRES_URL               ← Vercel pooled (fallback)
 *   worldfiber_POSTGRES_PRISMA_URL        ← PgBouncer (last resort)
 *   POSTGRES_URL_NON_POOLING
 *   POSTGRES_URL
 *   POSTGRES_PRISMA_URL
 */
export function resolveDatabaseUrl(): string {
  const url =
    process.env.DATABASE_URL ||
    process.env.worldfiber_POSTGRES_URL_NON_POOLING ||
    process.env.worldfiber_POSTGRES_URL ||
    process.env.worldfiber_POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL;

  if (!url) {
    throw new Error(
      "No database URL found. Set DATABASE_URL or worldfiber_POSTGRES_URL_NON_POOLING in your environment."
    );
  }

  return url;
}

/**
 * Returns the URL used for Prisma migrations (prisma.config.ts).
 * Prefers the pooled/prisma-safe URL for migrate commands.
 */
export function resolveMigrationUrl(): string {
  return (
    process.env.DATABASE_URL ||
    process.env.worldfiber_POSTGRES_PRISMA_URL ||
    process.env.worldfiber_POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL ||
    ""
  );
}

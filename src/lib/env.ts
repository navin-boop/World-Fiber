/**
 * Resolves the PostgreSQL connection URL from whichever environment variable
 * is present. Vercel auto-generates prefixed variables when a Postgres
 * integration is linked to a project; this function checks all known
 * candidates so a manual DATABASE_URL is not required.
 *
 * Priority order:
 *   DATABASE_URL                       (manual / generic)
 *   worldfiber_POSTGRES_PRISMA_URL     (Vercel Postgres – pooled, Prisma-safe)
 *   worldfiber_POSTGRES_URL            (Vercel Postgres – pooled)
 *   POSTGRES_PRISMA_URL                (Vercel Postgres – unprefixed fallback)
 *   POSTGRES_URL                       (Vercel Postgres – unprefixed fallback)
 */
export function resolveDatabaseUrl(): string {
  const url =
    process.env.DATABASE_URL ||
    process.env.worldfiber_POSTGRES_PRISMA_URL ||
    process.env.worldfiber_POSTGRES_URL ||
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL;

  if (!url) {
    throw new Error(
      "No database URL found. Set DATABASE_URL or worldfiber_POSTGRES_PRISMA_URL in your environment."
    );
  }

  return url;
}

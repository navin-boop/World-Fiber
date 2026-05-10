import { cache } from "react";
import { prisma } from "./prisma";

export const getSettings = cache(async (): Promise<Record<string, string>> => {
  try {
    const rows = await prisma.siteSettings.findMany();
    return Object.fromEntries(rows.map((r) => [r.key, r.value]));
  } catch {
    return {};
  }
});

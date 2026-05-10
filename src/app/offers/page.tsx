import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Tag, Clock, Zap, Star } from "lucide-react";

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_offers_title || "Offers & Promotions | World Fiber Net Pvt. Ltd.",
    description: s.seo_offers_desc || "Discover the latest offers, deals, and promotions from World Fiber Net. Save on fiber internet and IPTV packages across Nepal.",
  };
}

export const revalidate = 300;

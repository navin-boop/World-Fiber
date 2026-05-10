import Link from "next/link";
import {
  ArrowRight,
  Tv,
  Wifi,
  CheckCircle2,
  Play,
  Globe,
  Music,
  Newspaper,
  Trophy,
  Film,
  Baby,
  Heart,
  BookOpen,
  Zap,
  Package,
  Star,
} from "lucide-react";

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_iptv_title || "IPTV — Net TV & Sky TV | World Fiber Net Pvt. Ltd.",
    description: s.seo_iptv_desc || "Enjoy premium IPTV with Net TV and Sky TV. Hundreds of live channels, sports, movies, on-demand content, and more — powered by World Fiber Net's fiber network.",
  };
}

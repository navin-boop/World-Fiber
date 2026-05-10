import Link from "next/link";
import {
  ArrowRight,
  Wifi,
  Tv,
  Shield,
  Headphones,
  Zap,
  Users,
  MapPin,
  TrendingUp,
  Award,
  Heart,
  Globe,
  CheckCircle2,
  Star,
  Building2,
  Home,
} from "lucide-react";

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_about_title || "About Us | World Fiber Net Pvt. Ltd.",
    description: s.seo_about_desc || "Learn about World Fiber Net Pvt. Ltd. — Nepal's trusted FTTH fiber internet and IPTV provider. Our mission, vision, team, and coverage across Nepal.",
  };
}

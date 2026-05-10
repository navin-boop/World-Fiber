import Link from "next/link";
import {
  ArrowRight,
  Wifi,
  Tv,
  Building2,
  Home,
  Wrench,
  CheckCircle2,
  Phone,
  Zap,
  Star,
  Package,
} from "lucide-react";

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_services_title || "Our Services | World Fiber Net Pvt. Ltd.",
    description: s.seo_services_desc || "Explore World Fiber Net's full range of services: FTTH Home Fiber, Corporate Fiber, IPTV (Net TV & Sky TV), Internet+IPTV Combo, and Local Installation & Support.",
  };
}

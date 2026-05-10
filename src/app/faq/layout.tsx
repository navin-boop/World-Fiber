import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_faq_title || "FAQ | World Fiber Net Pvt. Ltd.",
    description: s.seo_faq_desc || "Find answers to frequently asked questions about World Fiber Net's fiber internet, IPTV, billing, installation, and technical support.",
  };
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

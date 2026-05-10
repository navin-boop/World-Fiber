import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_packages_title || "Internet Packages | World Fiber Net Pvt. Ltd.",
    description: s.seo_packages_desc || "Browse World Fiber Net's fiber internet and IPTV packages. Affordable plans for home, office, and corporate use across Nepal.",
  };
}

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

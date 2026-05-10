import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_contact_title || "Contact Us | World Fiber Net Pvt. Ltd.",
    description: s.seo_contact_desc || "Get in touch with World Fiber Net. Request a new fiber internet connection, reach our support team, or visit our office in Kathmandu, Nepal.",
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveChatWidget from "@/components/layout/LiveChatWidget";
import { Toaster } from "react-hot-toast";
import { getSettings } from "@/lib/settings";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSettings();
  const title = s.meta_title || "World Fiber Net - Fiber Internet & IPTV in Nepal";
  const description =
    s.meta_description ||
    "Experience ultra-fast FTTH fiber internet and IPTV services in Nepal. Get connected with World Fiber Net Pvt. Ltd. today.";
  return {
    title,
    description,
    keywords: "fiber internet nepal, FTTH, IPTV, Net TV, Sky TV, Kathmandu internet",
    icons: s.site_favicon_url
      ? { icon: s.site_favicon_url, shortcut: s.site_favicon_url }
      : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_NP",
      siteName: s.company_name || "World Fiber Net",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Header logoUrl={settings.site_logo_url} />
        <main className="flex-1">{children}</main>
        <Footer />
        <LiveChatWidget />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}

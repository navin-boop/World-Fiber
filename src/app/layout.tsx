import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LiveChatWidget from "@/components/layout/LiveChatWidget";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Fiber Net - Fiber Internet & IPTV in Nepal",
  description:
    "Experience ultra-fast FTTH fiber internet and IPTV services in Nepal. Get connected with World Fiber Net Pvt. Ltd. today.",
  keywords: "fiber internet nepal, FTTH, IPTV, Net TV, Sky TV, Kathmandu internet",
  openGraph: {
    title: "World Fiber Net - Fiber Internet & IPTV in Nepal",
    description:
      "Experience ultra-fast FTTH fiber internet and IPTV services in Nepal.",
    type: "website",
    locale: "en_NP",
    siteName: "World Fiber Net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Header />
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

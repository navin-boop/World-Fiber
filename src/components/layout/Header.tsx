"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import LangToggle from "@/components/LangToggle";

const navLinks = [
  { href: "/",         en: "Home",     ne: "गृहपृष्ठ" },
  { href: "/packages", en: "Packages", ne: "प्याकेजहरू" },
  { href: "/iptv",     en: "IPTV",     ne: "आईपीटीभी" },
  { href: "/recharge", en: "Recharge", ne: "रिचार्ज" },
  { href: "/offers",   en: "Offers",   ne: "अफरहरू" },
  { href: "/support",  en: "Support",  ne: "सहायता" },
  { href: "/contact",  en: "Contact",  ne: "सम्पर्क" },
];

interface HeaderProps {
  logoUrl?: string;
}

function Logo({ logoUrl }: { logoUrl?: string }) {
  if (logoUrl) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img src={logoUrl} alt="World Fiber Net" className="h-10 w-auto max-w-[160px] object-contain" />
    );
  }
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25468F] to-[#2298D4] flex items-center justify-center shadow-md shadow-blue-200">
          <span className="text-white font-bold text-sm tracking-tight">W</span>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#0B7F3A] border-2 border-white"></div>
      </div>
      <div className="leading-tight">
        <div className="font-extrabold text-[#25468F] text-[15px] leading-none tracking-tight">
          W<span className="text-[#0B7F3A]">○</span>RLD
        </div>
        <div className="text-[#25468F] text-[9px] font-bold tracking-[0.15em] uppercase leading-none mt-0.5">
          Fiber Net
        </div>
      </div>
    </div>
  );
}

export default function Header({ logoUrl }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <Logo logoUrl={logoUrl} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-[13px] font-semibold text-gray-600 hover:text-[#25468F] rounded-lg transition-all duration-200 hover:bg-blue-50/60 group whitespace-nowrap"
              >
                <span className="lang-en">{link.en}</span>
                <span className="lang-ne">{link.ne}</span>
                <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#25468F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <LangToggle />
            <a
              href="https://support.worldfibernet.net.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-[13px] font-semibold text-[#25468F] border-2 border-[#25468F] rounded-lg hover:bg-[#25468F] hover:text-white transition-all duration-200"
            >
              <span className="lang-en">Customer Login</span>
              <span className="lang-ne">ग्राहक लगइन</span>
            </a>
            <Link
              href="/contact#new-connection"
              className="px-4 py-2 text-[13px] font-semibold text-white bg-[#0B7F3A] rounded-lg hover:bg-[#065a28] transition-all duration-200 shadow-sm shadow-green-200 shine-hover"
            >
              <span className="lang-en">New Connection</span>
              <span className="lang-ne">नयाँ जडान</span>
            </Link>
          </div>

          {/* Mobile: LangToggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <LangToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-xl shadow-black/10 animate-fade-in">
          <div className="container-custom py-4">
            <nav className="flex flex-col gap-0.5 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#25468F] hover:bg-blue-50 rounded-xl transition-all"
                >
                  <span className="lang-en">{link.en}</span>
                  <span className="lang-ne">{link.ne}</span>
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2.5 pt-3 border-t border-gray-100">
              <a
                href="https://support.worldfibernet.net.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-semibold text-[#25468F] border-2 border-[#25468F] rounded-xl hover:bg-[#25468F] hover:text-white transition-all text-center"
              >
                <span className="lang-en">Customer Login</span>
                <span className="lang-ne">ग्राहक लगइन</span>
              </a>
              <Link
                href="/contact#new-connection"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-[#0B7F3A] rounded-xl hover:bg-[#065a28] transition-all text-center"
              >
                <span className="lang-en">New Connection</span>
                <span className="lang-ne">नयाँ जडान</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/iptv", label: "IPTV" },
  { href: "/recharge", label: "Recharge" },
  { href: "/offers", label: "Offers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
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
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25468F] to-[#2298D4] flex items-center justify-center">
          <span className="text-white font-bold text-sm">W</span>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#0B7F3A]"></div>
      </div>
      <div className="leading-tight">
        <div className="font-bold text-[#25468F] text-base leading-none">
          W<span className="text-[#0B7F3A]">○</span>RLD
        </div>
        <div className="text-[#25468F] text-[10px] font-semibold tracking-wider leading-none">
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-white border-b border-gray-100"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Logo logoUrl={logoUrl} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#25468F] rounded-md transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://support.worldfibernet.net.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-[#25468F] border-2 border-[#25468F] rounded-lg hover:bg-[#25468F] hover:text-white transition-all duration-200"
            >
              Customer Login
            </a>
            <Link
              href="/contact#new-connection"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#0B7F3A] rounded-lg hover:bg-[#065a28] transition-all duration-200 shadow-sm"
            >
              New Connection
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="container-custom py-4">
            <nav className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#25468F] hover:bg-blue-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
              <a
                href="https://support.worldfibernet.net.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-sm font-semibold text-[#25468F] border-2 border-[#25468F] rounded-lg hover:bg-[#25468F] hover:text-white transition-all text-center"
              >
                Customer Login
              </a>
              <Link
                href="/contact#new-connection"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-[#0B7F3A] rounded-lg hover:bg-[#065a28] transition-all text-center"
              >
                New Connection
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Share2, Globe } from "lucide-react";

const services = [
  { label: "FTTH Home Fiber", href: "/services#ftth-home-fiber" },
  { label: "Corporate Fiber", href: "/services#corporate-fiber" },
  { label: "IPTV", href: "/iptv" },
  { label: "↳ Net TV", href: "/iptv#net-tv" },
  { label: "↳ Sky TV", href: "/iptv#sky-tv" },
  { label: "Internet + IPTV Combo", href: "/packages#iptv-combo" },
  { label: "Local Installation & Support", href: "/services#installation-support" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Recharge", href: "/recharge" },
  { label: "Offers", href: "/offers" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071A3D] text-white">
      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25468F] to-[#2298D4] flex items-center justify-center">
                  <span className="text-white font-bold">W</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#0B7F3A]"></div>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-white text-lg leading-none">
                  W<span className="text-[#0B7F3A]">○</span>RLD
                </div>
                <div className="text-blue-300 text-xs font-semibold tracking-wider leading-none">
                  Fiber Net
                </div>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Connecting Nepal with Fiber-Fast Internet & IPTV. Built for today, ready for tomorrow.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com/worldfibernet" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0B7F3A] flex items-center justify-center transition-colors" aria-label="Facebook">
                <Globe size={16} />
              </a>
              <a href="https://instagram.com/worldfibernet" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0B7F3A] flex items-center justify-center transition-colors" aria-label="Instagram">
                <Share2 size={16} />
              </a>
              <a href="https://youtube.com/@worldfibernet" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0B7F3A] flex items-center justify-center transition-colors" aria-label="YouTube">
                <Globe size={16} />
              </a>
              <a href="https://linkedin.com/company/worldfibernet" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0B7F3A] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/10">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors ${item.label.startsWith("↳")
                      ? "text-blue-300 hover:text-[#2298D4] pl-2"
                      : "text-blue-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/10">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="font-bold text-white text-base mb-5 pb-2 border-b border-white/10">Support</h3>
            <div className="space-y-3 mb-5">
              <a href="tel:015970200" className="flex items-center gap-2.5 text-blue-200 hover:text-white text-sm transition-colors">
                <Phone size={15} className="text-[#2298D4] flex-shrink-0" />
                01-5970200
              </a>
              <a href="tel:9801234567" className="flex items-center gap-2.5 text-blue-200 hover:text-white text-sm transition-colors">
                <Phone size={15} className="text-[#2298D4] flex-shrink-0" />
                9801234567
              </a>
              <a href="mailto:support@worldfibernet.net.np" className="flex items-center gap-2.5 text-blue-200 hover:text-white text-sm transition-colors">
                <Mail size={15} className="text-[#2298D4] flex-shrink-0" />
                support@worldfibernet.net.np
              </a>
              <div className="flex items-start gap-2.5 text-blue-200 text-sm">
                <Clock size={15} className="text-[#2298D4] flex-shrink-0 mt-0.5" />
                Sun - Fri: 6:00 AM - 10:00 PM
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs font-semibold text-blue-300 mb-2">Coverage</p>
              <p className="text-blue-200 text-xs leading-relaxed flex items-start gap-2">
                <MapPin size={13} className="text-[#2298D4] flex-shrink-0 mt-0.5" />
                Serving 5+ Districts: Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan & More
              </p>
              <Link href="/contact" className="mt-3 inline-block text-xs font-semibold text-[#2298D4] hover:text-white transition-colors">
                Check Coverage →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs text-center sm:text-left">
            © 2025 World Fiber Net Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-blue-300 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-and-conditions" className="text-blue-300 hover:text-white text-xs transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

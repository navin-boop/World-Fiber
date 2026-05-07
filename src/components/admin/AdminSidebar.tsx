"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard, Package, Image, Tag, MessageSquare, Ticket,
  HelpCircle, Star, Megaphone, Settings, Users, LogOut, Wifi,
  FileText, ImageIcon, Wrench, Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/packages", icon: Package, label: "Packages" },
  { href: "/admin/banners", icon: Image, label: "Banners" },
  { href: "/admin/services", icon: Globe, label: "Services" },
  { href: "/admin/offers", icon: Tag, label: "Offers" },
  { href: "/admin/faq", icon: HelpCircle, label: "FAQs" },
  { href: "/admin/testimonials", icon: Star, label: "Testimonials" },
  { href: "/admin/enquiries", icon: MessageSquare, label: "Enquiries" },
  { href: "/admin/tickets", icon: Ticket, label: "Support Tickets" },
  { href: "/admin/media", icon: ImageIcon, label: "Media Library" },
  { href: "/admin/pages", icon: FileText, label: "Pages" },
  { href: "/admin/newsletter", icon: Megaphone, label: "Newsletter" },
  { href: "/admin/users", icon: Users, label: "Users" },
  { href: "/admin/settings", icon: Settings, label: "Site Settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#071A3D] min-h-screen flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="p-5 border-b border-white/10">
        <Link href="/admin/dashboard" className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Wifi size={18} className="text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#0B7F3A]"></div>
          </div>
          <div>
            <div className="font-extrabold text-white text-sm leading-none">WORLD FIBER NET</div>
            <div className="text-blue-300 text-xs">Admin Panel</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                isActive
                  ? "bg-white/15 text-white"
                  : "text-blue-200 hover:bg-white/8 hover:text-white"
              )}
            >
              <Icon size={17} className={isActive ? "text-[#2298D4]" : ""} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="p-3 border-t border-white/10 space-y-1">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-blue-200 hover:text-white hover:bg-white/8 transition-all"
        >
          <Wrench size={17} />
          View Website
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-300 hover:text-red-200 hover:bg-red-500/10 transition-all"
        >
          <LogOut size={17} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

import { prisma } from "@/lib/prisma";
import AdminHeader from "@/components/admin/AdminHeader";
import {
  MessageSquare, Ticket, Package, Tag, AlertTriangle, Megaphone,
  Bell, Image, Globe, HelpCircle, Star, Settings, ImageIcon,
  ArrowRight, CheckCircle2, Palette,
} from "lucide-react";
import Link from "next/link";

async function getDashboardStats() {
  try {
    const [
      totalEnquiries, newEnquiries, totalTickets, openTickets, urgentTickets,
      activePackages, activeOffers, subscribers,
    ] = await Promise.all([
      prisma.enquiry.count(),
      prisma.enquiry.count({ where: { status: "NEW" } }),
      prisma.supportTicket.count(),
      prisma.supportTicket.count({ where: { status: "OPEN" } }),
      prisma.supportTicket.count({ where: { priority: "URGENT", status: { not: "CLOSED" } } }),
      prisma.package.count({ where: { isActive: true } }),
      prisma.offer.count({ where: { isActive: true } }),
      prisma.newsletterSubscriber.count({ where: { isActive: true } }),
    ]);
    return { totalEnquiries, newEnquiries, totalTickets, openTickets, urgentTickets, activePackages, activeOffers, subscribers };
  } catch {
    return { totalEnquiries: 0, newEnquiries: 0, totalTickets: 0, openTickets: 0, urgentTickets: 0, activePackages: 0, activeOffers: 0, subscribers: 0 };
  }
}

async function getRecentEnquiries() {
  try { return await prisma.enquiry.findMany({ orderBy: { createdAt: "desc" }, take: 5 }); }
  catch { return []; }
}

async function getRecentTickets() {
  try { return await prisma.supportTicket.findMany({ orderBy: { createdAt: "desc" }, take: 5 }); }
  catch { return []; }
}

const statCards = [
  { key: "newEnquiries",   label: "New Enquiries",   icon: MessageSquare, color: "#25468F", bg: "#EFF6FF", href: "/admin/enquiries" },
  { key: "openTickets",    label: "Open Tickets",    icon: Ticket,        color: "#0B7F3A", bg: "#F0FDF4", href: "/admin/tickets" },
  { key: "urgentTickets",  label: "Urgent Tickets",  icon: AlertTriangle, color: "#DC2626", bg: "#FEF2F2", href: "/admin/tickets?priority=URGENT" },
  { key: "activePackages", label: "Active Packages", icon: Package,       color: "#2298D4", bg: "#F0F9FF", href: "/admin/packages" },
  { key: "activeOffers",   label: "Active Offers",   icon: Tag,           color: "#7C3AED", bg: "#F5F3FF", href: "/admin/offers" },
  { key: "subscribers",   label: "Subscribers",     icon: Megaphone,     color: "#D97706", bg: "#FFFBEB", href: "/admin/newsletter" },
];

const priorityBadge: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-600",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  URGENT: "bg-red-100 text-red-700",
};

const statusBadge: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-yellow-100 text-yellow-700",
  OPEN: "bg-blue-100 text-blue-700",
  RESOLVED: "bg-green-100 text-green-700",
  CLOSED: "bg-gray-100 text-gray-600",
};

const cmsGuide = [
  {
    icon: Palette,
    label: "Logo & Favicon",
    desc: "Upload your brand logo and browser tab icon",
    href: "/admin/settings#branding",
    linkLabel: "Go to Branding",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: Image,
    label: "Homepage Banner",
    desc: "Add a hero image that shows on the homepage",
    href: "/admin/banners",
    linkLabel: "Manage Banners",
    color: "#0B7F3A",
    bg: "#F0FDF4",
  },
  {
    icon: Package,
    label: "Internet Packages",
    desc: "Add or update internet plan pricing and features",
    href: "/admin/packages",
    linkLabel: "Manage Packages",
    color: "#2298D4",
    bg: "#F0F9FF",
  },
  {
    icon: Globe,
    label: "Services",
    desc: "Edit your offered services (Fiber, IPTV, etc.)",
    href: "/admin/services",
    linkLabel: "Manage Services",
    color: "#25468F",
    bg: "#EFF6FF",
  },
  {
    icon: Tag,
    label: "Offers & Promotions",
    desc: "Create limited-time offers for customers",
    href: "/admin/offers",
    linkLabel: "Manage Offers",
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: HelpCircle,
    label: "FAQs",
    desc: "Add frequently asked questions and answers",
    href: "/admin/faq",
    linkLabel: "Manage FAQs",
    color: "#0891B2",
    bg: "#F0F9FF",
  },
  {
    icon: Star,
    label: "Testimonials",
    desc: "Add customer reviews shown on the homepage",
    href: "/admin/testimonials",
    linkLabel: "Manage Testimonials",
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: ImageIcon,
    label: "Media Library",
    desc: "Upload images to use in banners, packages, etc.",
    href: "/admin/media",
    linkLabel: "Open Media Library",
    color: "#DC2626",
    bg: "#FEF2F2",
  },
  {
    icon: Settings,
    label: "Site Settings & SEO",
    desc: "Company info, contact details, page SEO titles",
    href: "/admin/settings",
    linkLabel: "Open Settings",
    color: "#6B7280",
    bg: "#F9FAFB",
  },
];

export default async function AdminDashboardPage() {
  const [stats, enquiries, tickets] = await Promise.all([
    getDashboardStats(),
    getRecentEnquiries(),
    getRecentTickets(),
  ]);

  const statsWithValues = statCards.map(card => ({
    ...card,
    value: stats[card.key as keyof typeof stats] as number,
  }));

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Dashboard" />

      <main className="flex-1 p-6 overflow-auto space-y-6">

        {/* Security reminder */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
          <Bell size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800">Security Reminder</p>
            <p className="text-xs text-amber-700 mt-0.5">
              Change the default admin password before going live.{" "}
              <Link href="/admin/users" className="underline font-semibold">Manage Users →</Link>
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div>
          <h2 className="font-bold text-gray-700 text-sm mb-3 uppercase tracking-wider">Live Overview</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {statsWithValues.map((stat) => {
              const Icon = stat.icon;
              return (
                <Link key={stat.key} href={stat.href}
                  className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: stat.bg }}>
                    <Icon size={18} style={{ color: stat.color }} />
                  </div>
                  <div className="text-2xl font-extrabold text-gray-800 mb-0.5">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CMS Guide */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={16} className="text-[#0B7F3A]" />
            <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wider">Content Manager — What Can You Do?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cmsGuide.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.bg }}>
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                  <Link href={item.href}
                    className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-[#25468F] hover:text-[#071A3D] transition-colors"
                  >
                    {item.linkLabel} <ArrowRight size={12} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Enquiries */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-800">Recent Enquiries</h2>
              <Link href="/admin/enquiries" className="text-xs text-[#25468F] font-semibold hover:underline flex items-center gap-1">
                View All <ArrowRight size={11} />
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {enquiries.length === 0 ? (
                <div className="p-8 text-center text-gray-400 text-sm">No enquiries yet</div>
              ) : enquiries.map((e) => (
                <div key={e.id} className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-[#25468F] font-bold text-xs">
                    {e.fullName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-sm text-gray-800 truncate">{e.fullName}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${statusBadge[e.status] || "bg-gray-100 text-gray-600"}`}>
                        {e.status}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{e.phone} • {e.interestedService || "General"}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Tickets */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-800">Recent Support Tickets</h2>
              <Link href="/admin/tickets" className="text-xs text-[#25468F] font-semibold hover:underline flex items-center gap-1">
                View All <ArrowRight size={11} />
              </Link>
            </div>
            <div className="divide-y divide-gray-50">
              {tickets.length === 0 ? (
                <div className="p-8 text-center text-gray-400 text-sm">No tickets yet</div>
              ) : tickets.map((t) => (
                <div key={t.id} className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-[#0B7F3A] font-bold text-xs">
                    {t.fullName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-sm text-gray-800 truncate">{t.fullName}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${priorityBadge[t.priority]}`}>
                        {t.priority}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 truncate">{t.issueType}</div>
                    <div className="text-xs text-gray-400 mt-0.5 font-mono">{t.ticketNumber}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

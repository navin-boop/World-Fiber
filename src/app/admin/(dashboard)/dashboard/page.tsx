import { prisma } from "@/lib/prisma";
import AdminHeader from "@/components/admin/AdminHeader";
import {
  MessageSquare, Ticket, Package, Tag, AlertTriangle, Users, Bell, Megaphone
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
  try {
    return await prisma.enquiry.findMany({ orderBy: { createdAt: "desc" }, take: 5 });
  } catch { return []; }
}

async function getRecentTickets() {
  try {
    return await prisma.supportTicket.findMany({ orderBy: { createdAt: "desc" }, take: 5 });
  } catch { return []; }
}

const statCards = [
  { key: "newEnquiries", label: "New Enquiries", icon: MessageSquare, color: "#25468F", bg: "#EFF6FF", href: "/admin/enquiries" },
  { key: "openTickets", label: "Open Tickets", icon: Ticket, color: "#0B7F3A", bg: "#F0FDF4", href: "/admin/tickets" },
  { key: "urgentTickets", label: "Urgent Tickets", icon: AlertTriangle, color: "#DC2626", bg: "#FEF2F2", href: "/admin/tickets?priority=URGENT" },
  { key: "activePackages", label: "Active Packages", icon: Package, color: "#2298D4", bg: "#F0F9FF", href: "/admin/packages" },
  { key: "activeOffers", label: "Active Offers", icon: Tag, color: "#7C3AED", bg: "#F5F3FF", href: "/admin/offers" },
  { key: "subscribers", label: "Subscribers", icon: Megaphone, color: "#D97706", bg: "#FFFBEB", href: "/admin/newsletter" },
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

      <main className="flex-1 p-6 overflow-auto">
        {/* Password Warning */}
        <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
          <Bell size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800">Security Reminder</p>
            <p className="text-xs text-amber-700 mt-0.5">Please change the default admin password before launch.</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {statsWithValues.map((stat) => {
            const Icon = stat.icon;
            return (
              <Link key={stat.key} href={stat.href}
                className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: stat.bg }}>
                    <Icon size={18} style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-gray-800 mb-0.5">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </Link>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Enquiries */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-gray-800">Recent Enquiries</h2>
              <Link href="/admin/enquiries" className="text-xs text-[#25468F] font-semibold hover:underline">View All</Link>
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
              <Link href="/admin/tickets" className="text-xs text-[#25468F] font-semibold hover:underline">View All</Link>
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

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-5">
          <h2 className="font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Add Package", href: "/admin/packages", color: "#25468F" },
              { label: "Add Banner", href: "/admin/banners", color: "#0B7F3A" },
              { label: "Add Offer", href: "/admin/offers", color: "#7C3AED" },
              { label: "Add FAQ", href: "/admin/faq", color: "#2298D4" },
              { label: "Site Settings", href: "/admin/settings", color: "#D97706" },
              { label: "Media Library", href: "/admin/media", color: "#DC2626" },
            ].map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ backgroundColor: action.color }}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

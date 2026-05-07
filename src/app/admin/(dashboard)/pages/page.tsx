import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";

const pages = [
  { title: "Home", slug: "/", description: "Main landing page" },
  { title: "About", slug: "/about", description: "Company about page" },
  { title: "Services", slug: "/services", description: "Services overview" },
  { title: "Packages", slug: "/packages", description: "Pricing packages" },
  { title: "IPTV", slug: "/iptv", description: "IPTV services page" },
  { title: "Recharge", slug: "/recharge", description: "Payment guide page" },
  { title: "Offers", slug: "/offers", description: "Current offers" },
  { title: "FAQ", slug: "/faq", description: "Frequently asked questions" },
  { title: "Contact", slug: "/contact", description: "Contact form" },
  { title: "Support Ticket", slug: "/support-ticket", description: "Submit support ticket" },
  { title: "Terms & Conditions", slug: "/terms-and-conditions", description: "Legal terms" },
  { title: "Privacy Policy", slug: "/privacy-policy", description: "Privacy policy" },
];

export default function PagesAdminPage() {
  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Pages" />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Website Pages</h2>
          <p className="text-sm text-gray-500">All public pages. Edit page content via the respective admin modules.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map(page => (
            <div key={page.slug} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <FileText size={18} className="text-[#25468F]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-800">{page.title}</h3>
                    <p className="text-xs text-gray-400">{page.description}</p>
                  </div>
                </div>
                <Link href={page.slug} target="_blank" className="p-1.5 rounded hover:bg-gray-100 transition-colors flex-shrink-0">
                  <ExternalLink size={14} className="text-gray-400" />
                </Link>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <code className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{page.slug}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5">
          <h3 className="font-bold text-[#25468F] mb-2">Editing Content</h3>
          <p className="text-sm text-gray-600">
            Content for each page can be managed through the dedicated modules:
            <strong> Packages</strong> for pricing,
            <strong> Banners</strong> for images & CTAs,
            <strong> FAQ</strong> for FAQ page,
            <strong> Offers</strong> for promotions,
            <strong> Settings</strong> for contact info & site-wide content.
          </p>
        </div>
      </main>
    </div>
  );
}

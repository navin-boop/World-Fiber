import AdminHeader from "@/components/admin/AdminHeader";
import { prisma } from "@/lib/prisma";
import { Mail } from "lucide-react";
import { formatDate } from "@/lib/utils";

async function getSubscribers() {
  try {
    return await prisma.newsletterSubscriber.findMany({ orderBy: { createdAt: "desc" } });
  } catch { return []; }
}

export default async function NewsletterAdminPage() {
  const subscribers = await getSubscribers();

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Newsletter Subscribers" />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Newsletter Subscribers</h2>
          <p className="text-sm text-gray-500 mt-0.5">{subscribers.length} total subscribers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center"><Mail size={20} className="text-[#25468F]" /></div>
            </div>
            <div className="text-3xl font-extrabold text-gray-800">{subscribers.length}</div>
            <div className="text-sm text-gray-500">Total Subscribers</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="text-3xl font-extrabold text-gray-800">{subscribers.filter(s => s.isActive).length}</div>
            <div className="text-sm text-gray-500">Active Subscribers</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="text-3xl font-extrabold text-gray-800">
              {subscribers.filter(s => {
                const d = new Date(s.createdAt);
                const now = new Date();
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
              }).length}
            </div>
            <div className="text-sm text-gray-500">This Month</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3">Email</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3 hidden sm:table-cell">Status</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3 hidden md:table-cell">Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {subscribers.map(s => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3 text-sm text-gray-800">{s.email}</td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {s.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell text-xs text-gray-400">{formatDate(s.createdAt)}</td>
                </tr>
              ))}
              {subscribers.length === 0 && (
                <tr><td colSpan={3} className="px-5 py-12 text-center text-gray-400 text-sm">No subscribers yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

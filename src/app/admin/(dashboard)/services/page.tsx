import AdminHeader from "@/components/admin/AdminHeader";
import { prisma } from "@/lib/prisma";
import { Globe } from "lucide-react";

async function getServices() {
  try { return await prisma.service.findMany({ orderBy: { sortOrder: "asc" } }); }
  catch { return []; }
}

export default async function ServicesAdminPage() {
  const services = await getServices();

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Services" />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Services</h2>
          <p className="text-sm text-gray-500">{services.length} services configured</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3">Service</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3 hidden md:table-cell">Slug</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3">Status</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3 hidden sm:table-cell">Order</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {services.map(s => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center"><Globe size={16} className="text-[#25468F]" /></div>
                      <div>
                        <div className="font-semibold text-sm text-gray-800">{s.name}</div>
                        <div className="text-xs text-gray-400 line-clamp-1">{s.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell text-xs text-gray-500 font-mono">{s.slug}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {s.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell text-sm text-gray-600">{s.sortOrder}</td>
                </tr>
              ))}
              {services.length === 0 && <tr><td colSpan={4} className="px-5 py-12 text-center text-gray-400 text-sm">No services found. Run the seed script to add defaults.</td></tr>}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

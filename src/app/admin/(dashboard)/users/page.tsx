import AdminHeader from "@/components/admin/AdminHeader";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { Shield, User } from "lucide-react";

async function getUsers() {
  try { return await prisma.user.findMany({ orderBy: { createdAt: "asc" }, select: { id: true, name: true, email: true, role: true, isActive: true, createdAt: true } }); }
  catch { return []; }
}

const roleColors: Record<string, string> = {
  SUPER_ADMIN: "bg-red-100 text-red-700",
  EDITOR: "bg-blue-100 text-blue-700",
  SUPPORT_STAFF: "bg-green-100 text-green-700",
};

export default async function UsersAdminPage() {
  const users = await getUsers();

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Users" />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Admin Users</h2>
          <p className="text-sm text-gray-500">{users.length} users</p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <Shield size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Security Notice</p>
              <p className="text-xs text-amber-700 mt-0.5">To add or manage users, use the database directly or the CLI seed script. Change the default admin password before deploying to production.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3">User</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3">Role</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3 hidden sm:table-cell">Status</th>
                <th className="text-left text-xs font-bold text-gray-500 uppercase px-5 py-3 hidden md:table-cell">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users.map(u => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#25468F] flex items-center justify-center text-white text-xs font-bold">{u.name.charAt(0)}</div>
                      <div>
                        <div className="font-semibold text-sm text-gray-800">{u.name}</div>
                        <div className="text-xs text-gray-400">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${roleColors[u.role] || "bg-gray-100 text-gray-600"}`}>{u.role.replace("_", " ")}</span>
                  </td>
                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <div className="flex items-center gap-1.5">
                      <User size={13} className={u.isActive ? "text-green-500" : "text-gray-400"} />
                      <span className={`text-xs font-medium ${u.isActive ? "text-green-600" : "text-gray-400"}`}>{u.isActive ? "Active" : "Inactive"}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden md:table-cell text-xs text-gray-400">{formatDate(u.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

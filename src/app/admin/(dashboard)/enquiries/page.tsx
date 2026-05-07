"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Loader2, Eye, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { formatDate } from "@/lib/utils";

interface Enquiry {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  location: string;
  interestedService: string;
  message: string;
  status: string;
  createdAt: string;
  type: string;
}

const statusColors: Record<string, string> = {
  NEW: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-yellow-100 text-yellow-700",
  RESOLVED: "bg-green-100 text-green-700",
  CLOSED: "bg-gray-100 text-gray-600",
};

export default function EnquiriesAdminPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Enquiry | null>(null);

  const load = async () => {
    try {
      const res = await fetch("/api/enquiries");
      const data = await res.json();
      if (data.success) setEnquiries(data.data);
    } catch { toast.error("Failed to load enquiries"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      toast.success("Status updated");
      load();
      if (selected?.id === id) setSelected({ ...selected, status });
    } catch { toast.error("Failed to update"); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this enquiry?")) return;
    try {
      await fetch(`/api/enquiries/${id}`, { method: "DELETE" });
      toast.success("Deleted");
      setSelected(null);
      load();
    } catch { toast.error("Failed to delete"); }
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Enquiries" />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Customer Enquiries</h2>
          <p className="text-sm text-gray-500 mt-0.5">{enquiries.filter(e => e.status === "NEW").length} new enquiries</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-6 h-full">
            {/* List */}
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Customer</th>
                    <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3 hidden md:table-cell">Service</th>
                    <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Status</th>
                    <th className="text-right text-xs font-bold text-gray-500 uppercase px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {enquiries.map((e) => (
                    <tr key={e.id} className={`hover:bg-gray-50 cursor-pointer transition-colors ${selected?.id === e.id ? "bg-blue-50" : ""}`} onClick={() => setSelected(e)}>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-sm text-gray-800">{e.fullName}</div>
                        <div className="text-xs text-gray-400">{e.phone}</div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell text-xs text-gray-600">{e.interestedService || "General"}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[e.status] || "bg-gray-100 text-gray-600"}`}>
                          {e.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1.5">
                          <button onClick={(ev) => { ev.stopPropagation(); setSelected(e); }} className="p-1.5 rounded hover:bg-blue-50 text-[#25468F]"><Eye size={14} /></button>
                          <button onClick={(ev) => { ev.stopPropagation(); handleDelete(e.id); }} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {enquiries.length === 0 && (
                    <tr><td colSpan={4} className="px-4 py-12 text-center text-gray-400 text-sm">No enquiries yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{selected.fullName}</h3>
                      <p className="text-xs text-gray-400">{formatDate(selected.createdAt)}</p>
                    </div>
                    <button onClick={() => handleDelete(selected.id)} className="p-2 rounded-lg hover:bg-red-50 text-red-500"><Trash2 size={16} /></button>
                  </div>
                  <div className="space-y-3 mb-5">
                    <div><span className="text-xs font-semibold text-gray-500">Phone:</span><span className="text-sm text-gray-800 ml-2">{selected.phone}</span></div>
                    <div><span className="text-xs font-semibold text-gray-500">Email:</span><span className="text-sm text-gray-800 ml-2">{selected.email || "—"}</span></div>
                    <div><span className="text-xs font-semibold text-gray-500">Location:</span><span className="text-sm text-gray-800 ml-2">{selected.location || "—"}</span></div>
                    <div><span className="text-xs font-semibold text-gray-500">Service:</span><span className="text-sm text-gray-800 ml-2">{selected.interestedService || "—"}</span></div>
                  </div>
                  {selected.message && (
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Message:</p>
                      <p className="text-sm text-gray-700 bg-gray-50 rounded-xl p-3">{selected.message}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">Update Status:</p>
                    <div className="flex flex-wrap gap-2">
                      {["NEW", "IN_PROGRESS", "RESOLVED", "CLOSED"].map((s) => (
                        <button
                          key={s}
                          onClick={() => handleStatusChange(selected.id, s)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${selected.status === s ? statusColors[s] + " ring-2 ring-offset-1" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400 text-sm">
                  Select an enquiry to view details
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

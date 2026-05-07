"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Loader2, Eye } from "lucide-react";
import toast from "react-hot-toast";
import { formatDate } from "@/lib/utils";

interface Ticket {
  id: string;
  ticketNumber: string;
  fullName: string;
  phone: string;
  email: string;
  issueType: string;
  priority: string;
  message: string;
  status: string;
  createdAt: string;
}

const priorityColors: Record<string, string> = {
  LOW: "bg-gray-100 text-gray-600",
  MEDIUM: "bg-blue-100 text-blue-700",
  HIGH: "bg-orange-100 text-orange-700",
  URGENT: "bg-red-100 text-red-700",
};

const statusColors: Record<string, string> = {
  OPEN: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-yellow-100 text-yellow-700",
  RESOLVED: "bg-green-100 text-green-700",
  CLOSED: "bg-gray-100 text-gray-600",
};

export default function TicketsAdminPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Ticket | null>(null);

  const load = async () => {
    try {
      const res = await fetch("/api/support-tickets");
      const data = await res.json();
      if (data.success) setTickets(data.data);
    } catch { toast.error("Failed to load tickets"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await fetch(`/api/support-tickets/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      toast.success("Status updated");
      load();
    } catch { toast.error("Failed to update"); }
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Support Tickets" />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">Support Tickets</h2>
          <p className="text-sm text-gray-500 mt-0.5">{tickets.filter(t => t.status === "OPEN").length} open tickets</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Ticket</th>
                    <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3 hidden md:table-cell">Issue</th>
                    <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Priority</th>
                    <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Status</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {tickets.map((t) => (
                    <tr key={t.id} className={`hover:bg-gray-50 cursor-pointer ${selected?.id === t.id ? "bg-blue-50" : ""}`} onClick={() => setSelected(t)}>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-sm text-gray-800">{t.fullName}</div>
                        <div className="text-xs text-gray-400 font-mono">{t.ticketNumber}</div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell text-xs text-gray-600">{t.issueType}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[t.priority]}`}>{t.priority}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[t.status]}`}>{t.status}</span>
                      </td>
                      <td className="px-4 py-3">
                        <button onClick={(e) => { e.stopPropagation(); setSelected(t); }} className="p-1.5 rounded hover:bg-blue-50 text-[#25468F]"><Eye size={14} /></button>
                      </td>
                    </tr>
                  ))}
                  {tickets.length === 0 && (
                    <tr><td colSpan={5} className="px-4 py-12 text-center text-gray-400 text-sm">No tickets yet</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="lg:col-span-2">
              {selected ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg text-gray-800">{selected.fullName}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[selected.priority]}`}>{selected.priority}</span>
                    </div>
                    <p className="text-xs text-gray-400 font-mono">{selected.ticketNumber} • {formatDate(selected.createdAt)}</p>
                  </div>
                  <div className="space-y-2.5 mb-4 text-sm">
                    <div><span className="text-xs font-semibold text-gray-500">Phone: </span>{selected.phone}</div>
                    <div><span className="text-xs font-semibold text-gray-500">Email: </span>{selected.email || "—"}</div>
                    <div><span className="text-xs font-semibold text-gray-500">Issue: </span>{selected.issueType}</div>
                  </div>
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-gray-500 mb-1">Message:</p>
                    <p className="text-sm text-gray-700 bg-gray-50 rounded-xl p-3">{selected.message}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-2">Update Status:</p>
                    <div className="flex flex-wrap gap-2">
                      {["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"].map((s) => (
                        <button
                          key={s}
                          onClick={() => { handleStatusChange(selected.id, s); setSelected({ ...selected, status: s }); }}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${selected.status === s ? statusColors[s] + " ring-2 ring-offset-1" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                        >
                          {s.replace("_", " ")}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400 text-sm">
                  Select a ticket to view details
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

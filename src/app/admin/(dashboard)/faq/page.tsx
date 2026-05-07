"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Plus, Edit, Trash2, ChevronDown, ChevronRight, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  sortOrder: number;
}

const categories = ["General", "Getting Started", "IPTV", "Billing", "Technical", "Plans", "Coverage"];
const ic = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F]";

export default function FAQAdminPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<FAQ | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [form, setForm] = useState({ question: "", answer: "", category: "General", isActive: true, sortOrder: 0 });
  const [saving, setSaving] = useState(false);

  const load = async () => {
    try {
      const res = await fetch("/api/faq");
      const data = await res.json();
      if (data.success) setFaqs(data.data);
    } catch { toast.error("Failed to load FAQs"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm({ question: "", answer: "", category: "General", isActive: true, sortOrder: 0 }); setShowModal(true); };
  const openEdit = (f: FAQ) => { setEditing(f); setForm({ question: f.question, answer: f.answer, category: f.category, isActive: f.isActive, sortOrder: f.sortOrder }); setShowModal(true); };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    try {
      const url = editing ? `/api/faq/${editing.id}` : "/api/faq";
      const method = editing ? "PATCH" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { toast.success(editing ? "FAQ updated!" : "FAQ created!"); setShowModal(false); load(); }
      else toast.error(data.message);
    } catch { toast.error("Failed to save"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this FAQ?")) return;
    await fetch(`/api/faq/${id}`, { method: "DELETE" });
    toast.success("Deleted"); load();
  };

  const grouped = categories.reduce((acc, cat) => {
    acc[cat] = faqs.filter(f => f.category === cat);
    return acc;
  }, {} as Record<string, FAQ[]>);

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="FAQs" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-xl font-bold text-gray-800">Manage FAQs</h2><p className="text-sm text-gray-500">{faqs.length} questions</p></div>
          <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-[#25468F] text-white rounded-xl text-sm font-bold hover:bg-[#071A3D]">
            <Plus size={16} /> Add FAQ
          </button>
        </div>

        {loading ? <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div> : (
          <div className="space-y-4">
            {categories.map(cat => grouped[cat]?.length > 0 && (
              <div key={cat} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                  <h3 className="font-bold text-sm text-gray-700">{cat} ({grouped[cat].length})</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {grouped[cat].map(faq => (
                    <div key={faq.id}>
                      <div className="px-5 py-3.5 flex items-start gap-3">
                        <button onClick={() => setExpanded(expanded === faq.id ? null : faq.id)} className="mt-0.5 text-gray-400 hover:text-gray-600">
                          {expanded === faq.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-gray-800">{faq.question}</div>
                          {expanded === faq.id && <div className="text-sm text-gray-500 mt-2 leading-relaxed">{faq.answer}</div>}
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <button onClick={() => openEdit(faq)} className="p-1.5 rounded hover:bg-blue-50 text-[#25468F]"><Edit size={14} /></button>
                          <button onClick={() => handleDelete(faq.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 size={14} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {faqs.length === 0 && <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 text-sm">No FAQs yet</div>}
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col z-10">
            <div className="p-5 border-b border-gray-100"><h2 className="font-bold text-lg">{editing ? "Edit FAQ" : "Add FAQ"}</h2></div>
            <form onSubmit={handleSave} className="p-5 space-y-4">
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Question *</label><input className={ic} value={form.question} onChange={e => setForm({...form, question: e.target.value})} required /></div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Answer *</label><textarea className={`${ic} h-28 resize-none`} value={form.answer} onChange={e => setForm({...form, answer: e.target.value})} required /></div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Category</label>
                <select className={ic} value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} className="w-4 h-4" /><span className="text-sm font-medium">Active</span></label>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#25468F] text-white text-sm font-bold rounded-xl flex items-center gap-2 disabled:opacity-70">
                  {saving && <Loader2 size={14} className="animate-spin" />} {editing ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

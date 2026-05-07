"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Plus, Edit, Trash2, CheckCircle, XCircle, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  desktopImageUrl: string;
  mobileImageUrl: string;
  ctaText: string;
  ctaLink: string;
  placement: string;
  isActive: boolean;
  sortOrder: number;
  altText: string;
}

const placements = [
  "HOMEPAGE_HERO", "HOMEPAGE_PROMO", "HOMEPAGE_FULLWIDTH", "PACKAGES_HERO",
  "IPTV_HERO", "RECHARGE_HERO", "OFFERS_PAGE", "FOOTER_PROMO",
];

const emptyForm = {
  title: "", subtitle: "", desktopImageUrl: "", mobileImageUrl: "",
  ctaText: "", ctaLink: "", placement: "HOMEPAGE_HERO", isActive: true, sortOrder: 0, altText: "",
};

const ic = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F]";

export default function BannersAdminPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Banner | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    try {
      const res = await fetch("/api/banners?active=false&all=true");
      const data = await res.json();
      if (data.success) setBanners(data.data);
      else {
        // Fallback: fetch all banners without filter
        const r2 = await fetch("/api/banners");
        const d2 = await r2.json();
        if (d2.success) setBanners(d2.data);
      }
    } catch { toast.error("Failed to load banners"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm(emptyForm); setShowModal(true); };
  const openEdit = (b: Banner) => {
    setEditing(b);
    setForm({ title: b.title, subtitle: b.subtitle, desktopImageUrl: b.desktopImageUrl, mobileImageUrl: b.mobileImageUrl, ctaText: b.ctaText, ctaLink: b.ctaLink, placement: b.placement, isActive: b.isActive, sortOrder: b.sortOrder, altText: b.altText });
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const url = editing ? `/api/banners/${editing.id}` : "/api/banners";
      const method = editing ? "PATCH" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, sortOrder: Number(form.sortOrder) }) });
      const data = await res.json();
      if (data.success) { toast.success(editing ? "Banner updated!" : "Banner created!"); setShowModal(false); load(); }
      else toast.error(data.message);
    } catch { toast.error("Failed to save"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this banner?")) return;
    await fetch(`/api/banners/${id}`, { method: "DELETE" });
    toast.success("Deleted"); load();
  };

  const handleToggle = async (b: Banner) => {
    await fetch(`/api/banners/${b.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isActive: !b.isActive }) });
    load();
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Banners" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-xl font-bold text-gray-800">Banner Manager</h2><p className="text-sm text-gray-500">{banners.length} banners</p></div>
          <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-[#25468F] text-white rounded-xl text-sm font-bold hover:bg-[#071A3D] transition-all">
            <Plus size={16} /> Add Banner
          </button>
        </div>

        {loading ? <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div> : (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Title</th>
                  <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3 hidden md:table-cell">Placement</th>
                  <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3 hidden sm:table-cell">CTA</th>
                  <th className="text-left text-xs font-bold text-gray-500 uppercase px-4 py-3">Status</th>
                  <th className="text-right text-xs font-bold text-gray-500 uppercase px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {banners.map(b => (
                  <tr key={b.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3"><div className="font-semibold text-sm text-gray-800">{b.title}</div><div className="text-xs text-gray-400 truncate max-w-xs">{b.subtitle}</div></td>
                    <td className="px-4 py-3 hidden md:table-cell"><span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">{b.placement}</span></td>
                    <td className="px-4 py-3 hidden sm:table-cell text-xs text-gray-600">{b.ctaText}</td>
                    <td className="px-4 py-3">
                      <button onClick={() => handleToggle(b)} className="flex items-center gap-1">
                        {b.isActive ? <><CheckCircle size={14} className="text-green-500" /><span className="text-xs text-green-600">Active</span></> : <><XCircle size={14} className="text-gray-400" /><span className="text-xs text-gray-400">Inactive</span></>}
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1.5">
                        <button onClick={() => openEdit(b)} className="p-1.5 rounded hover:bg-blue-50 text-[#25468F]"><Edit size={14} /></button>
                        <button onClick={() => handleDelete(b.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {banners.length === 0 && <tr><td colSpan={5} className="px-4 py-12 text-center text-gray-400 text-sm">No banners yet</td></tr>}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col z-10">
            <div className="p-5 border-b border-gray-100"><h2 className="font-bold text-lg">{editing ? "Edit Banner" : "Add Banner"}</h2></div>
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 space-y-4">
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Title *</label><input className={ic} value={form.title} onChange={e => setForm({...form, title: e.target.value})} required /></div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Subtitle</label><input className={ic} value={form.subtitle} onChange={e => setForm({...form, subtitle: e.target.value})} /></div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Placement</label>
                <select className={ic} value={form.placement} onChange={e => setForm({...form, placement: e.target.value})}>
                  {placements.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Desktop Image URL</label><input className={ic} value={form.desktopImageUrl} onChange={e => setForm({...form, desktopImageUrl: e.target.value})} placeholder="/uploads/image.jpg" /></div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Mobile Image URL</label><input className={ic} value={form.mobileImageUrl} onChange={e => setForm({...form, mobileImageUrl: e.target.value})} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">CTA Text</label><input className={ic} value={form.ctaText} onChange={e => setForm({...form, ctaText: e.target.value})} /></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">CTA Link</label><input className={ic} value={form.ctaLink} onChange={e => setForm({...form, ctaLink: e.target.value})} /></div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Alt Text</label><input className={ic} value={form.altText} onChange={e => setForm({...form, altText: e.target.value})} /></div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} className="w-4 h-4" /><span className="text-sm font-medium">Active</span></label>
                <div><label className="block text-xs font-semibold text-gray-600 mb-0.5">Sort Order</label><input type="number" className={ic} style={{width: 80}} value={form.sortOrder} onChange={e => setForm({...form, sortOrder: Number(e.target.value)})} /></div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#25468F] text-white text-sm font-bold rounded-xl hover:bg-[#071A3D] flex items-center gap-2 disabled:opacity-70">
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

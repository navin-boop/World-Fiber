"use client";

import { useState, useEffect, useRef } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Plus, Edit, Trash2, CheckCircle, XCircle, Loader2, Upload, X, Image as ImageIcon } from "lucide-react";
import toast from "react-hot-toast";

interface Offer {
  id: string;
  title: string;
  description: string;
  bannerUrl: string;
  ctaText: string;
  ctaLink: string;
  isActive: boolean;
  sortOrder: number;
}

const ic = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F]";

export default function OffersAdminPage() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Offer | null>(null);
  const [form, setForm] = useState({ title: "", description: "", bannerUrl: "", ctaText: "Learn More", ctaLink: "", isActive: true, sortOrder: 0 });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => {
    try {
      const res = await fetch("/api/offers");
      const data = await res.json();
      if (data.success) setOffers(data.data);
    } catch { toast.error("Failed to load"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ title: "", description: "", bannerUrl: "", ctaText: "Learn More", ctaLink: "", isActive: true, sortOrder: 0 });
    setShowModal(true);
  };
  const openEdit = (o: Offer) => {
    setEditing(o);
    setForm({ title: o.title, description: o.description, bannerUrl: o.bannerUrl, ctaText: o.ctaText, ctaLink: o.ctaLink, isActive: o.isActive, sortOrder: o.sortOrder });
    setShowModal(true);
  };

  const uploadBanner = async (file: File) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("altText", form.title || "Offer banner");
      const res = await fetch("/api/media", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setForm(f => ({ ...f, bannerUrl: data.url }));
        toast.success("Banner uploaded!");
      } else toast.error(data.message || "Upload failed");
    } catch { toast.error("Upload failed"); }
    finally { setUploading(false); }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    try {
      const url = editing ? `/api/offers/${editing.id}` : "/api/offers";
      const method = editing ? "PATCH" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { toast.success(editing ? "Offer updated!" : "Offer created!"); setShowModal(false); load(); }
      else toast.error(data.message);
    } catch { toast.error("Failed to save"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this offer?")) return;
    await fetch(`/api/offers/${id}`, { method: "DELETE" });
    toast.success("Deleted"); load();
  };

  const handleToggle = async (o: Offer) => {
    await fetch(`/api/offers/${o.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isActive: !o.isActive }) });
    load();
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Offers" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Manage Offers</h2>
            <p className="text-sm text-gray-500">{offers.length} offers</p>
          </div>
          <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-[#25468F] text-white rounded-xl text-sm font-bold hover:bg-[#071A3D]">
            <Plus size={16} /> Add Offer
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offers.map(o => (
              <div key={o.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {o.bannerUrl && (
                  <div className="relative" style={{ height: 120 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.bannerUrl} alt={o.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800">{o.title}</h3>
                      <button onClick={() => handleToggle(o)} className="flex items-center gap-1 mt-1">
                        {o.isActive
                          ? <><CheckCircle size={13} className="text-green-500" /><span className="text-xs text-green-600">Active</span></>
                          : <><XCircle size={13} className="text-gray-400" /><span className="text-xs text-gray-400">Inactive</span></>}
                      </button>
                    </div>
                    <div className="flex gap-1.5">
                      <button onClick={() => openEdit(o)} className="p-1.5 rounded hover:bg-blue-50 text-[#25468F]"><Edit size={14} /></button>
                      <button onClick={() => handleDelete(o.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 size={14} /></button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">{o.description}</p>
                </div>
              </div>
            ))}
            {offers.length === 0 && (
              <div className="col-span-3 bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 text-sm">No offers yet</div>
            )}
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col z-10 max-h-[90vh] overflow-y-auto">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-bold text-lg">{editing ? "Edit Offer" : "Add Offer"}</h2>
              <button onClick={() => setShowModal(false)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"><X size={18} /></button>
            </div>
            <form onSubmit={handleSave} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Title *</label>
                <input className={ic} value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Description *</label>
                <textarea className={`${ic} h-24 resize-none`} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
              </div>

              {/* Banner Image Upload */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Banner Image</label>
                <p className="text-xs text-gray-400 mb-2">This image appears at the top of the offer card on the website.</p>
                <div className="flex gap-2">
                  <input className={ic} value={form.bannerUrl} onChange={e => setForm({ ...form, bannerUrl: e.target.value })} placeholder="Paste image URL or upload →" />
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    disabled={uploading}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200 disabled:opacity-60"
                  >
                    {uploading ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />} Upload
                  </button>
                  {form.bannerUrl && (
                    <button type="button" onClick={() => setForm({ ...form, bannerUrl: "" })} className="flex-shrink-0 p-2 text-red-400 hover:text-red-600">
                      <X size={14} />
                    </button>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => { const f = e.target.files?.[0]; if (f) uploadBanner(f); e.target.value = ""; }}
                />
                {form.bannerUrl && (
                  <div className="mt-2 rounded-xl overflow-hidden border border-gray-200 bg-gray-50" style={{ height: 120 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={form.bannerUrl} alt="Banner preview" className="w-full h-full object-cover" />
                  </div>
                )}
                {!form.bannerUrl && (
                  <div className="mt-2 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-1 text-gray-400" style={{ height: 80 }}>
                    <ImageIcon size={20} />
                    <span className="text-xs">No banner uploaded</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">CTA Text</label>
                  <input className={ic} value={form.ctaText} onChange={e => setForm({ ...form, ctaText: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">CTA Link</label>
                  <input className={ic} value={form.ctaLink} onChange={e => setForm({ ...form, ctaLink: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Sort Order</label>
                <input type="number" className={ic} value={form.sortOrder} onChange={e => setForm({ ...form, sortOrder: Number(e.target.value) })} />
              </div>
              <label className="flex items-center gap-2 cursor-pointer p-3 bg-gray-50 rounded-lg">
                <input type="checkbox" checked={form.isActive} onChange={e => setForm({ ...form, isActive: e.target.checked })} className="w-4 h-4 rounded" />
                <span className="text-sm font-medium">Active (visible on website)</span>
              </label>
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

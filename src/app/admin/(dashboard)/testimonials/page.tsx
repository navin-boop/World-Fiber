"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Plus, Edit, Trash2, Star, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  photo: string;
  rating: number;
  text: string;
  isActive: boolean;
  sortOrder: number;
}

const ic = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F]";

export default function TestimonialsAdminPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState({ name: "", location: "", photo: "", rating: 5, text: "", isActive: true, sortOrder: 0 });
  const [saving, setSaving] = useState(false);

  const load = async () => {
    try {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      if (data.success) setItems(data.data);
    } catch { toast.error("Failed to load"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => { setEditing(null); setForm({ name: "", location: "", photo: "", rating: 5, text: "", isActive: true, sortOrder: 0 }); setShowModal(true); };
  const openEdit = (t: Testimonial) => { setEditing(t); setForm({ name: t.name, location: t.location, photo: t.photo, rating: t.rating, text: t.text, isActive: t.isActive, sortOrder: t.sortOrder }); setShowModal(true); };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); setSaving(true);
    try {
      const url = editing ? `/api/testimonials/${editing.id}` : "/api/testimonials";
      const method = editing ? "PATCH" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (data.success) { toast.success(editing ? "Updated!" : "Created!"); setShowModal(false); load(); }
      else toast.error(data.message);
    } catch { toast.error("Failed"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete?")) return;
    await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
    toast.success("Deleted"); load();
  };

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Testimonials" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div><h2 className="text-xl font-bold text-gray-800">Testimonials</h2><p className="text-sm text-gray-500">{items.length} reviews</p></div>
          <button onClick={openCreate} className="flex items-center gap-2 px-4 py-2 bg-[#25468F] text-white rounded-xl text-sm font-bold hover:bg-[#071A3D]">
            <Plus size={16} /> Add Testimonial
          </button>
        </div>

        {loading ? <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div> : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(t => (
              <div key={t.id} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
                  </div>
                  <div className="flex gap-1.5">
                    <button onClick={() => openEdit(t)} className="p-1.5 rounded hover:bg-blue-50 text-[#25468F]"><Edit size={14} /></button>
                    <button onClick={() => handleDelete(t.id)} className="p-1.5 rounded hover:bg-red-50 text-red-500"><Trash2 size={14} /></button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic mb-3 line-clamp-3">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm text-gray-800">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
            ))}
            {items.length === 0 && <div className="col-span-3 bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 text-sm">No testimonials yet</div>}
          </div>
        )}
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col z-10">
            <div className="p-5 border-b border-gray-100"><h2 className="font-bold text-lg">{editing ? "Edit Testimonial" : "Add Testimonial"}</h2></div>
            <form onSubmit={handleSave} className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Name *</label><input className={ic} value={form.name} onChange={e => setForm({...form, name: e.target.value})} required /></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Location</label><input className={ic} value={form.location} onChange={e => setForm({...form, location: e.target.value})} /></div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Rating (1-5)</label><input type="number" min={1} max={5} className={ic} value={form.rating} onChange={e => setForm({...form, rating: Number(e.target.value)})} /></div>
                <div><label className="block text-xs font-semibold text-gray-600 mb-1">Photo URL</label><input className={ic} value={form.photo} onChange={e => setForm({...form, photo: e.target.value})} placeholder="/uploads/photo.jpg" /></div>
              </div>
              <div><label className="block text-xs font-semibold text-gray-600 mb-1">Testimonial *</label><textarea className={`${ic} h-24 resize-none`} value={form.text} onChange={e => setForm({...form, text: e.target.value})} required /></div>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} className="w-4 h-4" /><span className="text-sm font-medium">Active</span></label>
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

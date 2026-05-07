"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Plus, Edit, Trash2, CheckCircle, XCircle, Star, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { formatPrice } from "@/lib/utils";

interface Package {
  id: string;
  name: string;
  category: string;
  speed: string;
  price: number;
  billingCycle: string;
  description: string;
  features: string;
  isPopular: boolean;
  isActive: boolean;
  sortOrder: number;
  termsTitle: string;
  termsContent: string;
  slug: string;
}

const categories = [
  { value: "HOME_FIBER", label: "Home Fiber" },
  { value: "CORPORATE_FIBER", label: "Corporate Fiber" },
  { value: "IPTV_COMBO", label: "Internet + IPTV Combo" },
  { value: "IPTV_ADDON", label: "IPTV Add-on" },
];

const categoryLabel: Record<string, string> = {
  HOME_FIBER: "Home Fiber",
  CORPORATE_FIBER: "Corporate Fiber",
  IPTV_COMBO: "IPTV Combo",
  IPTV_ADDON: "IPTV Add-on",
};

const emptyForm = {
  name: "", slug: "", category: "HOME_FIBER", speed: "", price: 0, billingCycle: "monthly",
  description: "", features: '["Unlimited Data","High Speed Internet","24/7 Support"]',
  isPopular: false, isActive: true, sortOrder: 0, termsTitle: "Terms & Conditions",
  termsContent: "• Plans are subject to Fair Usage Policy (FUP).\n• Monthly billing cycle starts from connection date.\n• Installation charges may apply.\n• Price is inclusive of applicable taxes.",
};

export default function PackagesAdminPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Package | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    try {
      const res = await fetch("/api/packages");
      const data = await res.json();
      if (data.success) setPackages(data.data);
    } catch { toast.error("Failed to load packages"); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setShowModal(true);
  };

  const openEdit = (pkg: Package) => {
    setEditing(pkg);
    setForm({
      name: pkg.name, slug: pkg.slug, category: pkg.category, speed: pkg.speed,
      price: pkg.price, billingCycle: pkg.billingCycle, description: pkg.description,
      features: pkg.features, isPopular: pkg.isPopular, isActive: pkg.isActive,
      sortOrder: pkg.sortOrder, termsTitle: pkg.termsTitle, termsContent: pkg.termsContent,
    });
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, price: Number(form.price), sortOrder: Number(form.sortOrder) };
      const url = editing ? `/api/packages/${editing.id}` : "/api/packages";
      const method = editing ? "PATCH" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (data.success) {
        toast.success(editing ? "Package updated!" : "Package created!");
        setShowModal(false);
        load();
      } else {
        toast.error(data.message);
      }
    } catch { toast.error("Failed to save package"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this package?")) return;
    try {
      await fetch(`/api/packages/${id}`, { method: "DELETE" });
      toast.success("Package deleted");
      load();
    } catch { toast.error("Failed to delete"); }
  };

  const handleToggle = async (pkg: Package) => {
    try {
      await fetch(`/api/packages/${pkg.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !pkg.isActive }),
      });
      load();
    } catch { toast.error("Failed to update"); }
  };

  const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F]";

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Packages" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Manage Packages</h2>
            <p className="text-sm text-gray-500 mt-0.5">{packages.length} packages total</p>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 px-4 py-2 bg-[#25468F] text-white rounded-xl text-sm font-bold hover:bg-[#071A3D] transition-all"
          >
            <Plus size={16} />
            Add Package
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-40"><Loader2 size={32} className="animate-spin text-[#25468F]" /></div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-5 py-3">Package</th>
                  <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">Category</th>
                  <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Speed</th>
                  <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-5 py-3">Price</th>
                  <th className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">Status</th>
                  <th className="text-right text-xs font-bold text-gray-500 uppercase tracking-wider px-5 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-gray-800">{pkg.name}</span>
                        {pkg.isPopular && <Star size={13} className="text-amber-500 fill-amber-500" />}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <span className="text-xs bg-blue-50 text-[#25468F] px-2 py-1 rounded-full font-medium">
                        {categoryLabel[pkg.category] || pkg.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 hidden sm:table-cell text-sm text-gray-600">{pkg.speed}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-gray-800">{formatPrice(pkg.price)}<span className="text-gray-400 font-normal text-xs">/{pkg.billingCycle}</span></td>
                    <td className="px-5 py-3.5 hidden sm:table-cell">
                      <button onClick={() => handleToggle(pkg)} className="flex items-center gap-1.5">
                        {pkg.isActive
                          ? <><CheckCircle size={15} className="text-green-500" /><span className="text-xs text-green-600 font-medium">Active</span></>
                          : <><XCircle size={15} className="text-gray-400" /><span className="text-xs text-gray-400 font-medium">Inactive</span></>
                        }
                      </button>
                    </td>
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => openEdit(pkg)} className="p-1.5 rounded-lg hover:bg-blue-50 text-[#25468F] transition-colors"><Edit size={15} /></button>
                        <button onClick={() => handleDelete(pkg.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Trash2 size={15} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {packages.length === 0 && (
                  <tr><td colSpan={6} className="px-5 py-12 text-center text-gray-400 text-sm">No packages found. Add your first package.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col z-10">
            <div className="p-5 border-b border-gray-100">
              <h2 className="font-bold text-lg text-gray-800">{editing ? "Edit Package" : "Add Package"}</h2>
            </div>
            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Package Name *</label>
                  <input className={inputClass} value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Slug *</label>
                  <input className={inputClass} value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} required placeholder="home-fiber-100" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Category *</label>
                  <select className={inputClass} value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                    {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Speed *</label>
                  <input className={inputClass} value={form.speed} onChange={e => setForm({...form, speed: e.target.value})} placeholder="100 Mbps" required />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Price (Rs.) *</label>
                  <input type="number" className={inputClass} value={form.price} onChange={e => setForm({...form, price: Number(e.target.value)})} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Billing Cycle</label>
                  <select className={inputClass} value={form.billingCycle} onChange={e => setForm({...form, billingCycle: e.target.value})}>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Sort Order</label>
                  <input type="number" className={inputClass} value={form.sortOrder} onChange={e => setForm({...form, sortOrder: Number(e.target.value)})} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Description</label>
                <input className={inputClass} value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Features (JSON array)</label>
                <textarea className={`${inputClass} h-20 resize-none`} value={form.features} onChange={e => setForm({...form, features: e.target.value})} />
                <p className="text-xs text-gray-400 mt-1">Format: [&quot;Feature 1&quot;,&quot;Feature 2&quot;]</p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Terms & Conditions</label>
                <textarea className={`${inputClass} h-28 resize-none`} value={form.termsContent} onChange={e => setForm({...form, termsContent: e.target.value})} />
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.isPopular} onChange={e => setForm({...form, isPopular: e.target.checked})} className="w-4 h-4 rounded" />
                  <span className="text-sm font-medium text-gray-700">Mark as Popular</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} className="w-4 h-4 rounded" />
                  <span className="text-sm font-medium text-gray-700">Active</span>
                </label>
              </div>
              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100 rounded-xl transition-all">Cancel</button>
                <button type="submit" disabled={saving} className="px-5 py-2 bg-[#25468F] text-white text-sm font-bold rounded-xl hover:bg-[#071A3D] transition-all flex items-center gap-2 disabled:opacity-70">
                  {saving && <Loader2 size={14} className="animate-spin" />}
                  {editing ? "Update Package" : "Create Package"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

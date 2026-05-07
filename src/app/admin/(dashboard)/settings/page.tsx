"use client";

import { useState, useEffect } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Loader2, Save } from "lucide-react";
import toast from "react-hot-toast";

interface Settings {
  company_name: string;
  phone: string;
  phone2: string;
  email: string;
  billing_email: string;
  address: string;
  office_hours: string;
  whatsapp_number: string;
  viber_number: string;
  messenger_link: string;
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  linkedin_url: string;
  support_portal_url: string;
  coverage_areas: string;
  footer_text: string;
  chat_active: string;
  hero_title: string;
  hero_subtitle: string;
  meta_title: string;
  meta_description: string;
}

const defaultSettings: Settings = {
  company_name: "World Fiber Net Pvt. Ltd.",
  phone: "01-5970200",
  phone2: "9801234567",
  email: "support@worldfibernet.net.np",
  billing_email: "billing@worldfibernet.net.np",
  address: "Kathmandu, Nepal",
  office_hours: "Sun - Fri: 6:00 AM - 10:00 PM",
  whatsapp_number: "9801234567",
  viber_number: "9801234567",
  messenger_link: "https://m.me/worldfibernet",
  facebook_url: "https://facebook.com/worldfibernet",
  instagram_url: "https://instagram.com/worldfibernet",
  youtube_url: "https://youtube.com/@worldfibernet",
  linkedin_url: "https://linkedin.com/company/worldfibernet",
  support_portal_url: "https://support.worldfibernet.net.np/",
  coverage_areas: "Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan & More",
  footer_text: "Connecting Nepal with Fiber-Fast Internet & IPTV.",
  chat_active: "true",
  hero_title: "Connect Nepal with Fiber-Fast Internet & IPTV",
  hero_subtitle: "Experience ultra-fast and reliable connectivity with FTTH Home Fiber, Corporate Fiber, and IPTV.",
  meta_title: "World Fiber Net - Fiber Internet & IPTV in Nepal",
  meta_description: "Experience ultra-fast FTTH fiber internet and IPTV services in Nepal.",
};

const inputClass = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F]";

export default function SettingsAdminPage() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  useEffect(() => {
    fetch("/api/settings")
      .then(r => r.json())
      .then(d => { if (d.success) setSettings({ ...defaultSettings, ...d.data }); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.success) toast.success("Settings saved!");
      else toast.error(data.message);
    } catch { toast.error("Failed to save"); }
    finally { setSaving(false); }
  };

  const set = (key: keyof Settings, value: string) => setSettings(s => ({ ...s, [key]: value }));

  const tabs = [
    { id: "general", label: "General" },
    { id: "contact", label: "Contact & Social" },
    { id: "chat", label: "Live Chat" },
    { id: "homepage", label: "Homepage" },
    { id: "seo", label: "SEO" },
  ];

  if (loading) return (
    <div className="flex-1 flex items-center justify-center">
      <Loader2 size={32} className="animate-spin text-[#25468F]" />
    </div>
  );

  return (
    <div className="flex flex-col flex-1">
      <AdminHeader title="Site Settings" />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Site Settings</h2>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 bg-[#25468F] text-white rounded-xl text-sm font-bold hover:bg-[#071A3D] transition-all disabled:opacity-70"
          >
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            Save Settings
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-100 flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-all ${activeTab === tab.id ? "border-b-2 border-[#25468F] text-[#25468F] bg-blue-50/50" : "text-gray-500 hover:text-gray-700"}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6 space-y-5 max-w-2xl">
            {activeTab === "general" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name</label>
                  <input className={inputClass} value={settings.company_name} onChange={e => set("company_name", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                  <input className={inputClass} value={settings.address} onChange={e => set("address", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Office Hours</label>
                  <input className={inputClass} value={settings.office_hours} onChange={e => set("office_hours", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Coverage Areas</label>
                  <input className={inputClass} value={settings.coverage_areas} onChange={e => set("coverage_areas", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Footer Text</label>
                  <textarea className={`${inputClass} h-20 resize-none`} value={settings.footer_text} onChange={e => set("footer_text", e.target.value)} />
                </div>
              </>
            )}
            {activeTab === "contact" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone 1</label>
                    <input className={inputClass} value={settings.phone} onChange={e => set("phone", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone 2</label>
                    <input className={inputClass} value={settings.phone2} onChange={e => set("phone2", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Support Email</label>
                  <input type="email" className={inputClass} value={settings.email} onChange={e => set("email", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Billing Email</label>
                  <input type="email" className={inputClass} value={settings.billing_email} onChange={e => set("billing_email", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Support Portal URL</label>
                  <input className={inputClass} value={settings.support_portal_url} onChange={e => set("support_portal_url", e.target.value)} />
                </div>
                <hr className="border-gray-100" />
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Facebook URL</label>
                  <input className={inputClass} value={settings.facebook_url} onChange={e => set("facebook_url", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Instagram URL</label>
                  <input className={inputClass} value={settings.instagram_url} onChange={e => set("instagram_url", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">YouTube URL</label>
                  <input className={inputClass} value={settings.youtube_url} onChange={e => set("youtube_url", e.target.value)} />
                </div>
              </>
            )}
            {activeTab === "chat" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">WhatsApp Number (without +977)</label>
                  <input className={inputClass} value={settings.whatsapp_number} onChange={e => set("whatsapp_number", e.target.value)} placeholder="9801234567" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Viber Number (without +977)</label>
                  <input className={inputClass} value={settings.viber_number} onChange={e => set("viber_number", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Messenger Link</label>
                  <input className={inputClass} value={settings.messenger_link} onChange={e => set("messenger_link", e.target.value)} />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="chat_active" checked={settings.chat_active === "true"} onChange={e => set("chat_active", e.target.checked ? "true" : "false")} className="w-4 h-4 rounded" />
                  <label htmlFor="chat_active" className="text-sm font-medium text-gray-700 cursor-pointer">Live Chat Widget Active</label>
                </div>
              </>
            )}
            {activeTab === "homepage" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Hero Title</label>
                  <input className={inputClass} value={settings.hero_title} onChange={e => set("hero_title", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Hero Subtitle</label>
                  <textarea className={`${inputClass} h-24 resize-none`} value={settings.hero_subtitle} onChange={e => set("hero_subtitle", e.target.value)} />
                </div>
              </>
            )}
            {activeTab === "seo" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Meta Title</label>
                  <input className={inputClass} value={settings.meta_title} onChange={e => set("meta_title", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Meta Description</label>
                  <textarea className={`${inputClass} h-24 resize-none`} value={settings.meta_description} onChange={e => set("meta_description", e.target.value)} />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

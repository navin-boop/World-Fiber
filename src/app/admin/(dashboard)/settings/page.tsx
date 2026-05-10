"use client";

import { useState, useEffect, useRef } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import { Loader2, Save, Upload, X, Info } from "lucide-react";
import toast from "react-hot-toast";

interface Settings {
  // General
  company_name: string;
  address: string;
  office_hours: string;
  coverage_areas: string;
  footer_text: string;
  // Contact & Social
  phone: string;
  phone2: string;
  email: string;
  billing_email: string;
  support_portal_url: string;
  facebook_url: string;
  instagram_url: string;
  youtube_url: string;
  linkedin_url: string;
  // Live Chat
  whatsapp_number: string;
  viber_number: string;
  messenger_link: string;
  chat_active: string;
  // Branding
  site_logo_url: string;
  site_favicon_url: string;
  // Homepage hero
  hero_title: string;
  hero_subtitle: string;
  // Recharge images
  recharge_esewa_image: string;
  recharge_khalti_image: string;
  recharge_mobile_image: string;
  // Notifications
  notification_email: string;
  // Maps
  google_maps_embed_url: string;
  // Global SEO
  meta_title: string;
  meta_description: string;
  // Per-page SEO
  seo_home_title: string;
  seo_home_desc: string;
  seo_about_title: string;
  seo_about_desc: string;
  seo_services_title: string;
  seo_services_desc: string;
  seo_packages_title: string;
  seo_packages_desc: string;
  seo_iptv_title: string;
  seo_iptv_desc: string;
  seo_recharge_title: string;
  seo_recharge_desc: string;
  seo_offers_title: string;
  seo_offers_desc: string;
  seo_faq_title: string;
  seo_faq_desc: string;
  seo_contact_title: string;
  seo_contact_desc: string;
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
  site_logo_url: "",
  site_favicon_url: "",
  hero_title: "Connect Nepal with Fiber-Fast Internet & IPTV",
  hero_subtitle: "Experience ultra-fast and reliable connectivity with FTTH Home Fiber, Corporate Fiber, and IPTV.",
  recharge_esewa_image: "",
  recharge_khalti_image: "",
  recharge_mobile_image: "",
  notification_email: "",
  google_maps_embed_url: "",
  meta_title: "World Fiber Net - Fiber Internet & IPTV in Nepal",
  meta_description: "Experience ultra-fast FTTH fiber internet and IPTV services in Nepal.",
  seo_home_title: "",
  seo_home_desc: "",
  seo_about_title: "",
  seo_about_desc: "",
  seo_services_title: "",
  seo_services_desc: "",
  seo_packages_title: "",
  seo_packages_desc: "",
  seo_iptv_title: "",
  seo_iptv_desc: "",
  seo_recharge_title: "",
  seo_recharge_desc: "",
  seo_offers_title: "",
  seo_offers_desc: "",
  seo_faq_title: "",
  seo_faq_desc: "",
  seo_contact_title: "",
  seo_contact_desc: "",
};

const ic = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F]";

const tabs = [
  { id: "general",       label: "⚙️ General",        desc: "Company info, address, office hours" },
  { id: "branding",      label: "🎨 Branding",        desc: "Logo, favicon, site identity" },
  { id: "contact",       label: "📞 Contact & Social", desc: "Phone, email, social media links" },
  { id: "chat",          label: "💬 Live Chat",        desc: "WhatsApp, Viber, Messenger widget" },
  { id: "notifications", label: "📧 Notifications",   desc: "Email forwarding for inquiries, tickets, and alerts" },
  { id: "homepage",      label: "🏠 Homepage",         desc: "Hero section text" },
  { id: "recharge",      label: "💳 Recharge Images",  desc: "How-to images for each payment method" },
  { id: "seo",           label: "🔍 SEO",              desc: "Page titles and descriptions for search engines" },
];

const seoPages = [
  { key: "home",     label: "Home Page",         placeholder_title: "World Fiber Net - Fiber Internet & IPTV in Nepal" },
  { key: "about",    label: "About Page",         placeholder_title: "About Us | World Fiber Net" },
  { key: "services", label: "Services Page",      placeholder_title: "Our Services | World Fiber Net" },
  { key: "packages", label: "Packages Page",      placeholder_title: "Internet Packages | World Fiber Net" },
  { key: "iptv",     label: "IPTV Page",          placeholder_title: "IPTV Services | World Fiber Net" },
  { key: "recharge", label: "Recharge Page",      placeholder_title: "Recharge & Bill Payment | World Fiber Net" },
  { key: "offers",   label: "Offers Page",        placeholder_title: "Current Offers | World Fiber Net" },
  { key: "faq",      label: "FAQ Page",           placeholder_title: "FAQ | World Fiber Net" },
  { key: "contact",  label: "Contact Page",       placeholder_title: "Contact Us | World Fiber Net" },
];

function ImageUploadField({
  label, hint, value, onChange,
}: { label: string; hint?: string; value: string; onChange: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("altText", label);
      const res = await fetch("/api/media", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) { onChange(data.url); toast.success("Uploaded!"); }
      else toast.error(data.message || "Upload failed");
    } catch { toast.error("Upload failed"); }
    finally { setUploading(false); }
  };

  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1">{label}</label>
      {hint && <p className="text-xs text-gray-400 mb-2">{hint}</p>}
      <div className="flex gap-2">
        <input className={ic} value={value} onChange={e => onChange(e.target.value)} placeholder="Paste image URL or upload →" />
        <button type="button" onClick={() => fileRef.current?.click()} disabled={uploading}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200 disabled:opacity-60">
          {uploading ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />} Upload
        </button>
        {value && (
          <button type="button" onClick={() => onChange("")} className="flex-shrink-0 p-2 text-red-400 hover:text-red-600">
            <X size={14} />
          </button>
        )}
      </div>
      <input ref={fileRef} type="file" accept="image/*" className="hidden"
        onChange={e => { const f = e.target.files?.[0]; if (f) upload(f); e.target.value = ""; }} />
      {value && (
        <div className="mt-2 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center" style={{ height: 80 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt={label} className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </div>
  );
}

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
          <div>
            <h2 className="text-xl font-bold text-gray-800">Site Settings</h2>
            <p className="text-sm text-gray-500 mt-0.5">Manage all website settings from one place</p>
          </div>
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

          {/* Tab description */}
          <div className="px-6 pt-4 pb-0">
            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <Info size={12} />
              {tabs.find(t => t.id === activeTab)?.desc}
            </p>
          </div>

          <div className="p-6 space-y-5 max-w-2xl">

            {/* ── GENERAL ── */}
            {activeTab === "general" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name</label>
                  <input className={ic} value={settings.company_name} onChange={e => set("company_name", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                  <input className={ic} value={settings.address} onChange={e => set("address", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Office Hours</label>
                  <input className={ic} value={settings.office_hours} onChange={e => set("office_hours", e.target.value)} placeholder="e.g. Sun - Fri: 9AM - 6PM" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Coverage Areas</label>
                  <input className={ic} value={settings.coverage_areas} onChange={e => set("coverage_areas", e.target.value)} placeholder="Kathmandu, Lalitpur, ..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Footer Tagline</label>
                  <textarea className={`${ic} h-20 resize-none`} value={settings.footer_text} onChange={e => set("footer_text", e.target.value)} />
                </div>
              </>
            )}

            {/* ── BRANDING ── */}
            {activeTab === "branding" && (
              <>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-800 leading-relaxed">
                  <strong>How it works:</strong> Upload your logo and favicon here. They will instantly appear on the live website.
                  The logo shows in the top navigation bar. The favicon is the small icon that appears in the browser tab.
                </div>
                <ImageUploadField
                  label="Site Logo"
                  hint="Recommended: PNG with transparent background, max height 60px. Displayed in the top navigation bar."
                  value={settings.site_logo_url}
                  onChange={v => set("site_logo_url", v)}
                />
                <hr className="border-gray-100" />
                <ImageUploadField
                  label="Favicon (Browser Tab Icon)"
                  hint="Recommended: Square PNG or ICO file, 32×32px or 64×64px. Shown in browser tabs and bookmarks."
                  value={settings.site_favicon_url}
                  onChange={v => set("site_favicon_url", v)}
                />
              </>
            )}

            {/* ── CONTACT & SOCIAL ── */}
            {activeTab === "contact" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Primary Phone</label>
                    <input className={ic} value={settings.phone} onChange={e => set("phone", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Secondary Phone</label>
                    <input className={ic} value={settings.phone2} onChange={e => set("phone2", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Support Email</label>
                  <input type="email" className={ic} value={settings.email} onChange={e => set("email", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Billing Email</label>
                  <input type="email" className={ic} value={settings.billing_email} onChange={e => set("billing_email", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Customer Portal URL</label>
                  <input className={ic} value={settings.support_portal_url} onChange={e => set("support_portal_url", e.target.value)} />
                </div>
                <hr className="border-gray-100" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Social Media Links</p>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Facebook URL</label>
                  <input className={ic} value={settings.facebook_url} onChange={e => set("facebook_url", e.target.value)} placeholder="https://facebook.com/yourpage" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Instagram URL</label>
                  <input className={ic} value={settings.instagram_url} onChange={e => set("instagram_url", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">YouTube URL</label>
                  <input className={ic} value={settings.youtube_url} onChange={e => set("youtube_url", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">LinkedIn URL</label>
                  <input className={ic} value={settings.linkedin_url} onChange={e => set("linkedin_url", e.target.value)} />
                </div>
                <hr className="border-gray-100" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Maps</p>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Google Maps Embed URL</label>
                  <p className="text-xs text-gray-400 mb-2">Paste the iframe <code className="bg-gray-100 px-1 rounded">src</code> URL from Google Maps → Share → Embed a map. This appears on the Contact page.</p>
                  <input className={ic} value={settings.google_maps_embed_url} onChange={e => set("google_maps_embed_url", e.target.value)} placeholder="https://www.google.com/maps/embed?pb=..." />
                </div>
              </>
            )}

            {/* ── LIVE CHAT ── */}
            {activeTab === "chat" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">WhatsApp Number <span className="text-gray-400 font-normal">(without +977)</span></label>
                  <input className={ic} value={settings.whatsapp_number} onChange={e => set("whatsapp_number", e.target.value)} placeholder="9801234567" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Viber Number <span className="text-gray-400 font-normal">(without +977)</span></label>
                  <input className={ic} value={settings.viber_number} onChange={e => set("viber_number", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Facebook Messenger Link</label>
                  <input className={ic} value={settings.messenger_link} onChange={e => set("messenger_link", e.target.value)} placeholder="https://m.me/yourpage" />
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <input type="checkbox" id="chat_active" checked={settings.chat_active === "true"} onChange={e => set("chat_active", e.target.checked ? "true" : "false")} className="w-4 h-4 rounded" />
                  <div>
                    <label htmlFor="chat_active" className="text-sm font-semibold text-gray-700 cursor-pointer">Live Chat Widget Active</label>
                    <p className="text-xs text-gray-400">Show the floating chat buttons on all pages</p>
                  </div>
                </div>
              </>
            )}

            {/* ── NOTIFICATIONS ── */}
            {activeTab === "notifications" && (
              <>
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-xs text-amber-800 leading-relaxed">
                  <strong>How it works:</strong> All support ticket emails, contact form inquiries, and website notification alerts will be forwarded to this email address. Leave blank to disable email forwarding.
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Notification & Forwarding Email</label>
                  <p className="text-xs text-gray-400 mb-2">Support tickets, inquiry form submissions, and system alerts will be sent to this address.</p>
                  <input
                    type="email"
                    className={ic}
                    value={settings.notification_email}
                    onChange={e => set("notification_email", e.target.value)}
                    placeholder="admin@worldfibernet.net.np"
                  />
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-800 space-y-1.5">
                  <p className="font-bold">What gets forwarded to this email:</p>
                  <ul className="list-disc list-inside space-y-1 text-blue-700">
                    <li>New contact form inquiries from the website</li>
                    <li>New connection requests submitted online</li>
                    <li>Support ticket notifications</li>
                    <li>System alerts and error notifications</li>
                  </ul>
                </div>
              </>
            )}

            {/* ── HOMEPAGE ── */}
            {activeTab === "homepage" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Hero Title</label>
                  <p className="text-xs text-gray-400 mb-1.5">The large heading on the homepage banner (overridden by Banner Manager if a banner image is set)</p>
                  <input className={ic} value={settings.hero_title} onChange={e => set("hero_title", e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Hero Subtitle</label>
                  <textarea className={`${ic} h-24 resize-none`} value={settings.hero_subtitle} onChange={e => set("hero_subtitle", e.target.value)} />
                </div>
              </>
            )}

            {/* ── RECHARGE IMAGES ── */}
            {activeTab === "recharge" && (
              <>
                <div className="p-4 bg-green-50 rounded-xl border border-green-100 text-xs text-green-800 leading-relaxed">
                  <strong>How it works:</strong> Upload step-by-step guide images for each payment method.
                  These images appear on the Recharge page under each payment method section to help customers visually understand how to pay.
                </div>
                <ImageUploadField
                  label="eSewa — How to Recharge Image"
                  hint="Upload a screenshot or infographic showing the eSewa payment steps."
                  value={settings.recharge_esewa_image}
                  onChange={v => set("recharge_esewa_image", v)}
                />
                <hr className="border-gray-100" />
                <ImageUploadField
                  label="Khalti — How to Recharge Image"
                  hint="Upload a screenshot or infographic showing the Khalti payment steps."
                  value={settings.recharge_khalti_image}
                  onChange={v => set("recharge_khalti_image", v)}
                />
                <hr className="border-gray-100" />
                <ImageUploadField
                  label="Mobile Banking — How to Recharge Image"
                  hint="Upload a screenshot or infographic showing the mobile banking payment steps."
                  value={settings.recharge_mobile_image}
                  onChange={v => set("recharge_mobile_image", v)}
                />
              </>
            )}

            {/* ── SEO ── */}
            {activeTab === "seo" && (
              <>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 text-xs text-purple-800 leading-relaxed">
                  <strong>How SEO works:</strong> Each page can have its own title and description that appears in Google search results.
                  If you leave a page blank, the global defaults below are used. Keep titles under 60 characters and descriptions under 160 characters for best results.
                </div>

                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider pt-2">Global Defaults (used when page-specific fields are empty)</p>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Default Site Title</label>
                  <input className={ic} value={settings.meta_title} onChange={e => set("meta_title", e.target.value)} />
                  <p className="text-xs text-gray-400 mt-1">{settings.meta_title.length}/60 characters</p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Default Meta Description</label>
                  <textarea className={`${ic} h-20 resize-none`} value={settings.meta_description} onChange={e => set("meta_description", e.target.value)} />
                  <p className="text-xs text-gray-400 mt-1">{settings.meta_description.length}/160 characters</p>
                </div>

                <hr className="border-gray-100" />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Per-Page SEO</p>

                {seoPages.map(page => (
                  <div key={page.key} className="border border-gray-100 rounded-xl p-4 space-y-3">
                    <p className="text-sm font-bold text-gray-700">{page.label}</p>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Page Title</label>
                      <input
                        className={ic}
                        value={settings[`seo_${page.key}_title` as keyof Settings]}
                        onChange={e => set(`seo_${page.key}_title` as keyof Settings, e.target.value)}
                        placeholder={page.placeholder_title}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Meta Description</label>
                      <textarea
                        className={`${ic} h-16 resize-none`}
                        value={settings[`seo_${page.key}_desc` as keyof Settings]}
                        onChange={e => set(`seo_${page.key}_desc` as keyof Settings, e.target.value)}
                        placeholder="Describe this page in 1–2 sentences for search engines..."
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Sticky save button at bottom for long forms */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-[#25468F] text-white rounded-xl text-sm font-bold hover:bg-[#071A3D] transition-all disabled:opacity-70 shadow-lg"
          >
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            Save All Settings
          </button>
        </div>
      </main>
    </div>
  );
}

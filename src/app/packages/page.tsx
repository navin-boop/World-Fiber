"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import PackageTermsModal from "@/components/ui/PackageTermsModal";
import { formatPrice } from "@/lib/utils";

interface Package {
  id: string;
  name: string;
  slug: string;
  category: string;
  speed: string;
  price: number;
  billingCycle: string;
  description: string;
  features: string;
  isPopular: boolean;
  termsTitle: string;
  termsContent: string;
}

const tabs = [
  { id: "HOME_FIBER", label: "Home Fiber Plans" },
  { id: "CORPORATE_FIBER", label: "Corporate Fiber" },
  { id: "IPTV_COMBO", label: "Internet + IPTV Combo" },
  { id: "IPTV_ADDON", label: "IPTV Add-ons" },
];

const TERMS = `• Installation charge: Rs 2,500 (one-time)\n• All prices are VAT inclusive\n• Plans auto-renew monthly unless cancelled\n• Fair Usage Policy (FUP) applies beyond specified data limits\n• World Fiber Net reserves the right to modify plans with 7-day notice\n• Speed may vary based on network load and distance from node\n• For full terms visit: worldfibernet.net.np/support`;

const fallbackPackages: Package[] = [
  { id: "hf1", name: "Home Basic 40", slug: "home-basic-40", category: "HOME_FIBER", speed: "40", price: 900, billingCycle: "month", description: "Ideal for streaming, browsing, and everyday home use.", features: JSON.stringify(["40 Mbps Symmetric Speed", "Unlimited Data", "Free Installation (Rs 2,500 value)", "24/7 Customer Support", "VAT Inclusive"]), isPopular: false, termsTitle: "Home Basic 40 – Terms & Conditions", termsContent: TERMS },
  { id: "hf2", name: "Home Plus 100", slug: "home-plus-100", category: "HOME_FIBER", speed: "100 IPTV", price: 1050, billingCycle: "month", description: "Fast fiber with IPTV included — great for families.", features: JSON.stringify(["100 Mbps Symmetric Speed", "IPTV Included", "Unlimited Data", "Free Installation (Rs 2,500 value)", "24/7 Customer Support", "VAT Inclusive"]), isPopular: true, termsTitle: "Home Plus 100 – Terms & Conditions", termsContent: TERMS },
  { id: "hf3", name: "Home Premium 150", slug: "home-premium-150", category: "HOME_FIBER", speed: "150 IPTV", price: 1243, billingCycle: "month", description: "High-speed fiber + IPTV for power users and large households.", features: JSON.stringify(["150 Mbps Symmetric Speed", "IPTV Included", "Unlimited Data", "Priority Support", "Free Installation (Rs 2,500 value)", "VAT Inclusive"]), isPopular: false, termsTitle: "Home Premium 150 – Terms & Conditions", termsContent: TERMS },
  { id: "cf1", name: "Hotel 200", slug: "hotel-200", category: "CORPORATE_FIBER", speed: "200 IPTV", price: 1650, billingCycle: "month", description: "Designed for hotels and hospitality businesses with IPTV.", features: JSON.stringify(["200 Mbps Symmetric Speed", "IPTV Included", "Dedicated Business Support", "Static IP Available", "SLA Guarantee", "Free Installation (Rs 2,500 value)", "VAT Inclusive"]), isPopular: false, termsTitle: "Hotel 200 – Terms & Conditions", termsContent: TERMS },
  { id: "cf2", name: "Office 250", slug: "office-250", category: "CORPORATE_FIBER", speed: "250", price: 1950, billingCycle: "month", description: "High-performance fiber for offices and commercial spaces.", features: JSON.stringify(["250 Mbps Symmetric Speed", "Dedicated Business Support", "Static IP Available", "SLA Guarantee", "Free Installation (Rs 2,500 value)", "VAT Inclusive"]), isPopular: true, termsTitle: "Office 250 – Terms & Conditions", termsContent: TERMS },
  { id: "cf3", name: "Office Gold 400", slug: "office-gold-400", category: "CORPORATE_FIBER", speed: "400", price: 3500, billingCycle: "month", description: "Enterprise-grade fiber for large offices and data-intensive businesses.", features: JSON.stringify(["400 Mbps Symmetric Speed", "Priority Business Support", "Static IP Included", "Premium SLA Guarantee", "Network Monitoring", "Free Installation (Rs 2,500 value)", "VAT Inclusive"]), isPopular: false, termsTitle: "Office Gold 400 – Terms & Conditions", termsContent: TERMS },
];

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState("HOME_FIBER");
  const [packages, setPackages] = useState<Package[]>(fallbackPackages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/packages?active=true")
      .then(r => r.json())
      .then(d => { if (d.success && d.data?.length > 0) setPackages(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = packages.filter(p => p.category === activeTab);

  return (
    <>
      <section className="bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] py-20">
        <div className="container-custom text-center text-white">
          <p className="text-[#2298D4] font-bold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">Choose the perfect plan for your home or business. No hidden fees, no surprises.</p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="container-custom">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${activeTab === tab.id ? "border-[#25468F] text-[#25468F]" : "border-transparent text-gray-500 hover:text-gray-700"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA]">
        <div className="container-custom">
          {loading ? (
            <div className="flex items-center justify-center h-40"><div className="w-8 h-8 border-4 border-[#25468F] border-t-transparent rounded-full animate-spin"></div></div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No packages available in this category yet.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-[#25468F] font-semibold hover:underline">Contact us for custom plans <ArrowRight size={16} /></Link>
            </div>
          ) : (
            <div className={`grid gap-6 lg:gap-8 max-w-5xl mx-auto ${filtered.length === 1 ? "grid-cols-1 max-w-sm" : filtered.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-2xl" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}>
              {filtered.map(pkg => {
                const features = JSON.parse(pkg.features || "[]") as string[];
                return (
                  <div key={pkg.id} id={pkg.slug}
                    className={`relative rounded-2xl flex flex-col overflow-hidden transition-all ${pkg.isPopular ? "border-2 border-[#25468F] shadow-2xl scale-105 bg-white" : "border border-gray-200 shadow-sm bg-white hover:shadow-md"}`}>
                    {pkg.isPopular && (
                      <div className="bg-[#25468F] text-white text-xs font-bold text-center py-2 tracking-widest uppercase flex items-center justify-center gap-1.5">
                        <Star size={12} className="fill-white" /> Most Popular
                      </div>
                    )}
                    <div className="p-7 flex-1 flex flex-col">
                      <p className="text-xs font-bold text-[#0B7F3A] uppercase tracking-widest mb-1">{tabs.find(t => t.id === pkg.category)?.label}</p>
                      <h3 className="font-extrabold text-xl text-gray-800 mb-1">{pkg.name}</h3>
                      <p className="text-gray-400 text-sm mb-5">{pkg.description}</p>
                      <div className="mb-2">
                        <span className="text-4xl font-extrabold text-[#25468F]">{pkg.speed.split(" ")[0]}</span>
                        <span className="text-gray-400 font-semibold ml-1 text-base">{pkg.speed.includes("IPTV") ? " Mbps + IPTV" : " Mbps"}</span>
                      </div>
                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-extrabold text-gray-800">{formatPrice(pkg.price)}</span>
                        <span className="text-gray-400 text-sm">/{pkg.billingCycle}</span>
                      </div>
                      <ul className="space-y-2.5 mb-6 flex-1">
                        {features.map(f => (
                          <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                            <CheckCircle2 size={16} className="text-[#0B7F3A] flex-shrink-0" />{f}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact#new-connection"
                        className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all flex items-center justify-center gap-2 ${pkg.isPopular ? "bg-[#25468F] hover:bg-[#071A3D] text-white shadow-lg" : "border-2 border-[#25468F] text-[#25468F] hover:bg-[#25468F] hover:text-white"}`}>
                        Choose Plan <ArrowRight size={16} />
                      </Link>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-xs text-gray-400">Terms & Conditions apply</p>
                        <PackageTermsModal title={pkg.termsTitle} content={pkg.termsContent} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-custom max-w-3xl">
          <div className="bg-gradient-to-r from-[#25468F] to-[#071A3D] rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-3">Not sure which plan is right for you?</h2>
            <p className="text-blue-200 mb-6">Our team is happy to help you choose the perfect plan for your needs.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2">Talk to Us <ArrowRight size={16} /></Link>
              <Link href="/support" className="px-6 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all">Get Support</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

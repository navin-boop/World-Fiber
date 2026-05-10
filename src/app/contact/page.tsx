"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import {
  ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle,
  Send, User, Smartphone, Building2, Loader2, Ticket, CheckCircle2, Map,
} from "lucide-react";

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  interestedService: string;
  message: string;
};

const services = [
  "FTTH Home Fiber", "Corporate Fiber", "IPTV – Net TV", "IPTV – Sky TV",
  "Internet + IPTV Combo", "Installation & Support", "Billing / Payment", "Technical Support", "Other",
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mapUrl, setMapUrl] = useState("");
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [officeBanner, setOfficeBanner] = useState<{ desktopImageUrl: string; title?: string; subtitle?: string } | null>(null);

  useEffect(() => {
    fetch("/api/settings")
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          setMapUrl(d.data.google_maps_embed_url || "");
          setSettings(d.data);
        }
      })
      .catch(() => {});
    fetch("/api/banners?placement=CONTACT_OFFICE_BANNER")
      .then(r => r.json())
      .then(d => {
        if (d.success && d.data?.length) setOfficeBanner(d.data[0]);
      })
      .catch(() => {});
  }, []);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "CONTACT", sourcePage: "/contact" }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        toast.success("Your enquiry has been submitted! We'll get back to you shortly.");
      } else throw new Error();
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: Phone, title: "Phone",
      titleNe: "फोन",
      lines: [settings.phone || "+977-1-XXXXXXX", settings.phone2 || "+977-98XXXXXXXX"],
      color: "text-[#25468F]", bg: "bg-blue-50",
    },
    {
      icon: Mail, title: "Email",
      titleNe: "इमेल",
      lines: [settings.email || "info@worldfibernet.com.np", settings.billing_email || "support@worldfibernet.com.np"],
      color: "text-[#0B7F3A]", bg: "bg-green-50",
    },
    {
      icon: MapPin, title: "Address",
      titleNe: "ठेगाना",
      lines: [settings.company_name || "World Fiber Net Pvt. Ltd.", settings.address || "Kathmandu, Nepal"],
      color: "text-[#2298D4]", bg: "bg-sky-50",
    },
    {
      icon: Clock, title: "Office Hours",
      titleNe: "कार्यालय समय",
      lines: [settings.office_hours || "Mon – Sat: 9:00 AM – 7:00 PM", "Sun: 10:00 AM – 4:00 PM"],
      color: "text-purple-600", bg: "bg-purple-50",
    },
  ];

  const socialLinks = [
    {
      label: "WhatsApp", labelNe: "ह्वाट्सएप",
      icon: MessageCircle,
      href: `https://wa.me/977${settings.whatsapp_number || "98XXXXXXXX"}`,
      bg: "bg-green-500 hover:bg-green-600",
      description: "Chat with us on WhatsApp",
      descNe: "ह्वाट्सएपमा कुराकानी गर्नुहोस्",
    },
    {
      label: "Viber", labelNe: "भाइबर",
      icon: Phone,
      href: `viber://chat?number=977${settings.viber_number || "98XXXXXXXX"}`,
      bg: "bg-purple-500 hover:bg-purple-600",
      description: "Call or message us on Viber",
      descNe: "भाइबरमा फोन वा सन्देश पठाउनुहोस्",
    },
    {
      label: "Messenger", labelNe: "मेसेन्जर",
      icon: MessageCircle,
      href: settings.messenger_link || "https://m.me/worldfibernet",
      bg: "bg-blue-500 hover:bg-blue-600",
      description: "Message us on Facebook",
      descNe: "फेसबुकमा सन्देश पठाउनुहोस्",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(ellipse at 15% 55%, #2298D4 0%, transparent 50%),
                              radial-gradient(ellipse at 85% 20%, #0B7F3A 0%, transparent 50%)`,
          }} />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice">
            <path d="M0,150 Q300,80 600,180 T1200,140" stroke="#2298D4" strokeWidth="2" fill="none" />
            <path d="M0,300 Q400,220 700,310 T1200,280" stroke="#0B7F3A" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="container-custom relative z-10 py-16 text-center text-white">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 animate-fade-in">
            <Phone size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">
              <span className="lang-en">We&apos;re Here to Help</span>
              <span className="lang-ne">हामी मद्दत गर्न तयार छौं</span>
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up anim-delay-1">
            <span className="lang-en">Get in <span className="text-[#2298D4]">Touch</span></span>
            <span className="lang-ne"><span className="text-[#2298D4]">सम्पर्क</span> गर्नुहोस्</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up anim-delay-2">
            <span className="lang-en">Apply for a new connection, ask about our services, or get support. Our team is always ready to help.</span>
            <span className="lang-ne">नयाँ जडानको लागि आवेदन दिनुहोस्, हाम्रा सेवाहरूबारे सोध्नुहोस् वा सहायता लिनुहोस्। हाम्रो टिम सधैं मद्दत गर्न तयार छ।</span>
          </p>
        </div>
      </section>

      {/* Office Image Banner — managed from Banner Manager (placement: CONTACT_OFFICE_BANNER) */}
      {officeBanner && officeBanner.desktopImageUrl && (
        <section className="bg-white border-b border-gray-100">
          <div className="relative overflow-hidden" style={{ maxHeight: 340 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={officeBanner.desktopImageUrl}
              alt={officeBanner.title || "Our Office"}
              className="w-full object-cover"
              style={{ maxHeight: 340 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D]/60 via-transparent to-transparent flex items-end">
              <div className="container-custom pb-8">
                {officeBanner.title && (
                  <h2 className="text-xl lg:text-2xl font-extrabold text-white mb-1">{officeBanner.title}</h2>
                )}
                {officeBanner.subtitle && (
                  <p className="text-blue-200 text-sm">{officeBanner.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="card-premium p-8 lg:p-10 animate-fade-in-up">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                    <CheckCircle2 size={40} className="text-[#0B7F3A]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                    <span className="lang-en">Enquiry Submitted!</span>
                    <span className="lang-ne">सोधपुछ पेश गरियो!</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    <span className="lang-en">Thank you for reaching out. Our team will review your enquiry and get back to you within 24 hours.</span>
                    <span className="lang-ne">सम्पर्क गर्नुभएकोमा धन्यवाद। हाम्रो टिमले तपाईंको सोधपुछ समीक्षा गरी २४ घन्टाभित्र जवाफ दिनेछ।</span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button onClick={() => setSubmitted(false)} className="px-5 py-3 bg-[#25468F] text-white font-bold rounded-xl hover:bg-[#071A3D] transition-all text-sm">
                      <span className="lang-en">Submit Another</span>
                      <span className="lang-ne">अर्को पेश गर्नुहोस्</span>
                    </button>
                    <Link href="/support-ticket" className="px-5 py-3 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm">
                      <span className="lang-en">Create Support Ticket</span>
                      <span className="lang-ne">सहायता टिकट बनाउनुहोस्</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                      <span className="lang-en">Send Us a Message</span>
                      <span className="lang-ne">हामीलाई सन्देश पठाउनुहोस्</span>
                    </h2>
                    <p className="text-gray-500 text-sm">
                      <span className="lang-en">Fill out the form and we&apos;ll get back to you within 24 hours.</span>
                      <span className="lang-ne">फारम भर्नुहोस् र हामी २४ घन्टाभित्र जवाफ दिनेछौं।</span>
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="lang-en">Full Name</span>
                        <span className="lang-ne">पूरा नाम</span>
                        {" "}<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("fullName", { required: "Full name is required" })}
                          type="text"
                          placeholder="Your full name"
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                        />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="lang-en">Phone Number</span>
                        <span className="lang-ne">फोन नम्बर</span>
                        {" "}<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Smartphone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9+\-\s]{7,15}$/, message: "Enter a valid phone number" } })}
                          type="tel"
                          placeholder="+977 98XXXXXXXX"
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="lang-en">Email Address</span>
                        <span className="lang-ne">इमेल ठेगाना</span>
                        {" "}<span className="text-gray-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("email", { pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" } })}
                          type="email"
                          placeholder="your@email.com"
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="lang-en">Your Location</span>
                        <span className="lang-ne">तपाईंको स्थान</span>
                        {" "}<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("location", { required: "Please enter your location" })}
                          type="text"
                          placeholder="e.g. Kathmandu, Lalitpur..."
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${errors.location ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                        />
                      </div>
                      {errors.location && <p className="text-red-500 text-xs mt-1.5">{errors.location.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="lang-en">Interested Service</span>
                        <span className="lang-ne">रुचि सेवा</span>
                        {" "}<span className="text-gray-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <select {...register("interestedService")} className="w-full pl-11 pr-4 py-3.5 border border-gray-200 bg-gray-50 focus:bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all appearance-none text-gray-700">
                          <option value="">Select a service...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <span className="lang-en">Message</span>
                        <span className="lang-ne">सन्देश</span>
                        {" "}<span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("message", { required: "Please enter your message", minLength: { value: 10, message: "At least 10 characters" } })}
                        rows={4}
                        placeholder="Tell us how we can help you..."
                        className={`w-full px-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
                    </div>

                    <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#25468F] hover:bg-[#071A3D] disabled:opacity-60 text-white font-bold rounded-xl transition-all text-sm shine-hover">
                      {submitting ? (
                        <><Loader2 size={18} className="animate-spin" /><span className="lang-en">Sending...</span><span className="lang-ne">पठाउँदैछ...</span></>
                      ) : (
                        <><Send size={16} /><span className="lang-en">Send Message</span><span className="lang-ne">सन्देश पठाउनुहोस्</span></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="card-premium p-7 animate-fade-in-up anim-delay-1">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">
                  <span className="lang-en">Contact Information</span>
                  <span className="lang-ne">सम्पर्क जानकारी</span>
                </h2>
                <div className="space-y-5">
                  {contactDetails.map((detail) => (
                    <div key={detail.title} className="flex items-start gap-4 group">
                      <div className={`w-11 h-11 ${detail.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <detail.icon size={20} className={detail.color} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                          <span className="lang-en">{detail.title}</span>
                          <span className="lang-ne">{detail.titleNe}</span>
                        </p>
                        {detail.lines.map((line, i) => (
                          <p key={i} className="text-gray-800 font-semibold text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-premium p-7 animate-fade-in-up anim-delay-2">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">
                  <span className="lang-en">Chat With Us</span>
                  <span className="lang-ne">हामीसँग कुराकानी गर्नुहोस्</span>
                </h2>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-4 ${social.bg} text-white p-4 rounded-2xl transition-all duration-200 group shine-hover`}>
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                        <social.icon size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-sm">
                          <span className="lang-en">{social.label}</span>
                          <span className="lang-ne">{social.labelNe}</span>
                        </p>
                        <p className="text-white/80 text-xs">
                          <span className="lang-en">{social.description}</span>
                          <span className="lang-ne">{social.descNe}</span>
                        </p>
                      </div>
                      <ArrowRight size={16} className="ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Support Ticket CTA */}
              <div className="bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-7 text-white animate-fade-in-up anim-delay-3 shine-hover">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <Ticket size={22} className="text-[#2298D4]" />
                </div>
                <h3 className="text-lg font-extrabold mb-2">
                  <span className="lang-en">Need Technical Support?</span>
                  <span className="lang-ne">प्राविधिक सहायता चाहिन्छ?</span>
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-5">
                  <span className="lang-en">For technical issues, create a support ticket and we&apos;ll resolve it with a tracked response.</span>
                  <span className="lang-ne">प्राविधिक समस्याका लागि सहायता टिकट बनाउनुहोस् र हामी ट्र्याक गरिएको प्रतिक्रियाका साथ समाधान गर्नेछौं।</span>
                </p>
                <div className="space-y-2 mb-5">
                  {[
                    { en: "Tracked & prioritized resolution", ne: "ट्र्याक गरिएको समाधान" },
                    { en: "Updates via SMS/WhatsApp", ne: "SMS/ह्वाट्सएपमा अपडेट" },
                    { en: "Resolved within 24 hours", ne: "२४ घन्टाभित्र समाधान" },
                  ].map(f => (
                    <div key={f.en} className="flex items-center gap-2 text-xs text-blue-200">
                      <CheckCircle2 size={13} className="text-[#4ade80]" />
                      <span className="lang-en">{f.en}</span>
                      <span className="lang-ne">{f.ne}</span>
                    </div>
                  ))}
                </div>
                <Link href="/support-ticket" className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm">
                  <span className="lang-en">Create Support Ticket</span>
                  <span className="lang-ne">सहायता टिकट बनाउनुहोस्</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      {mapUrl && (
        <section className="bg-white border-t border-gray-100">
          <div className="container-custom py-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#25468F] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                <Map size={13} />
                <span className="lang-en">Our Location</span>
                <span className="lang-ne">हाम्रो स्थान</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
                <span className="lang-en">Find Us on the Map</span>
                <span className="lang-ne">नक्सामा हामीलाई खोज्नुहोस्</span>
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                <span className="lang-en">Visit our office in Kathmandu — we&apos;re happy to see you in person.</span>
                <span className="lang-ne">काठमाडौंमा हाम्रो कार्यालय भ्रमण गर्नुहोस् — हामी व्यक्तिगत रूपमा भेट्न खुसी छौं।</span>
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe
                src={mapUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

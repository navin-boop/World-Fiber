"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  User,
  Smartphone,
  Building2,
  Loader2,
  Ticket,
  CheckCircle2,
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
  "FTTH Home Fiber",
  "Corporate Fiber",
  "IPTV – Net TV",
  "IPTV – Sky TV",
  "Internet + IPTV Combo",
  "Installation & Support",
  "Billing / Payment",
  "Technical Support",
  "Other",
];

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+977-1-XXXXXXX", "+977-98XXXXXXXX"],
    color: "text-[#25468F]",
    bg: "bg-blue-50",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@worldfibernet.com.np", "support@worldfibernet.com.np"],
    color: "text-[#0B7F3A]",
    bg: "bg-green-50",
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["World Fiber Net Pvt. Ltd.", "Kathmandu, Nepal"],
    color: "text-[#2298D4]",
    bg: "bg-sky-50",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sun: 10:00 AM – 4:00 PM"],
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const socialLinks = [
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/97798XXXXXXXX",
    bg: "bg-green-500 hover:bg-green-600",
    description: "Chat with us on WhatsApp",
  },
  {
    label: "Viber",
    icon: Phone,
    href: "viber://chat?number=97798XXXXXXXX",
    bg: "bg-purple-500 hover:bg-purple-600",
    description: "Call or message us on Viber",
  },
  {
    label: "Messenger",
    icon: MessageCircle,
    href: "https://m.me/worldfibernet",
    bg: "bg-blue-500 hover:bg-blue-600",
    description: "Message us on Facebook",
  },
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: "CONTACT",
          sourcePage: "/contact",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        toast.success("Your enquiry has been submitted! We'll get back to you shortly.");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse at 15% 55%, #2298D4 0%, transparent 50%),
                                radial-gradient(ellipse at 85% 20%, #0B7F3A 0%, transparent 50%)`,
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice">
            <path d="M0,150 Q300,80 600,180 T1200,140" stroke="#2298D4" strokeWidth="2" fill="none" />
            <path d="M0,300 Q400,220 700,310 T1200,280" stroke="#0B7F3A" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="container-custom relative z-10 py-16 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Phone size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">We're Here to Help</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Get in <span className="text-[#2298D4]">Touch</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
            Apply for a new connection, ask about our services, or get support. Our team is always ready to help you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-[#0B7F3A]" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Enquiry Submitted!</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Thank you for reaching out to World Fiber Net. Our team will review your enquiry and get back to you within 24 hours.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 bg-[#25468F] text-white font-bold rounded-xl hover:bg-[#071A3D] transition-all text-sm"
                    >
                      Submit Another
                    </button>
                    <Link
                      href="/support-ticket"
                      className="px-5 py-3 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm"
                    >
                      Create Support Ticket
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Send Us a Message</h2>
                    <p className="text-gray-500 text-sm">
                      Fill out the form and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("fullName", { required: "Full name is required" })}
                          type="text"
                          placeholder="Your full name"
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${
                            errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Smartphone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: { value: /^[0-9+\-\s]{7,15}$/, message: "Enter a valid phone number" },
                          })}
                          type="tel"
                          placeholder="+977 98XXXXXXXX"
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${
                            errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("email", {
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
                          })}
                          type="email"
                          placeholder="your@email.com"
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${
                            errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Location <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <input
                          {...register("location", { required: "Please enter your location" })}
                          type="text"
                          placeholder="e.g. Kathmandu, Lalitpur..."
                          className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${
                            errors.location ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                          }`}
                        />
                      </div>
                      {errors.location && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.location.message}</p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested Service <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                      </label>
                      <div className="relative">
                        <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                        <select
                          {...register("interestedService")}
                          className="w-full pl-11 pr-4 py-3.5 border border-gray-200 bg-gray-50 focus:bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all appearance-none text-gray-700"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("message", {
                          required: "Please enter your message",
                          minLength: { value: 10, message: "Message must be at least 10 characters" },
                        })}
                        rows={4}
                        placeholder="Tell us how we can help you..."
                        className={`w-full px-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all resize-none ${
                          errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#25468F] hover:bg-[#071A3D] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200 text-sm"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactDetails.map((detail) => (
                    <div key={detail.title} className="flex items-start gap-4">
                      <div className={`w-11 h-11 ${detail.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <detail.icon size={20} className={detail.color} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{detail.title}</p>
                        {detail.lines.map((line, i) => (
                          <p key={i} className="text-gray-800 font-semibold text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">Chat With Us</h2>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 ${social.bg} text-white p-4 rounded-2xl transition-all duration-200 group`}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                        <social.icon size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{social.label}</p>
                        <p className="text-white/80 text-xs">{social.description}</p>
                      </div>
                      <ArrowRight size={16} className="ml-auto opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Support Ticket CTA */}
              <div className="bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-7 text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <Ticket size={22} className="text-[#2298D4]" />
                </div>
                <h3 className="text-lg font-extrabold mb-2">Need Technical Support?</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-5">
                  For technical issues, slow internet, or IPTV problems, create a support ticket and we'll resolve it with a tracked response.
                </p>
                <div className="space-y-2">
                  {["Tracked & prioritized resolution", "Updates via SMS/WhatsApp", "Resolved within 24 hours"].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-blue-200">
                      <CheckCircle2 size={13} className="text-[#4ade80]" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href="/support-ticket"
                  className="inline-flex items-center gap-2 mt-5 bg-white text-[#25468F] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
                >
                  Create Support Ticket <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

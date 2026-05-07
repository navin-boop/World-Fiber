"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  Ticket,
  User,
  Smartphone,
  Mail,
  Hash,
  AlertCircle,
  ChevronDown,
  Paperclip,
  Send,
  Loader2,
  CheckCircle2,
  ArrowRight,
  Clock,
  Shield,
  Headphones,
} from "lucide-react";

const issueTypes = [
  "Internet Not Working",
  "Slow Internet",
  "Billing / Payment Issue",
  "IPTV Issue",
  "Net TV Issue",
  "Sky TV Issue",
  "New Connection Enquiry",
  "Router / WiFi Issue",
  "Installation Request",
  "Plan Upgrade Request",
  "Other",
];

const priorities = [
  { value: "LOW", label: "Low", color: "text-gray-500", bg: "bg-gray-100", description: "General query, no urgency" },
  { value: "MEDIUM", label: "Medium", color: "text-blue-600", bg: "bg-blue-100", description: "Service degraded but usable" },
  { value: "HIGH", label: "High", color: "text-orange-600", bg: "bg-orange-100", description: "Service significantly impacted" },
  { value: "URGENT", label: "Urgent", color: "text-red-600", bg: "bg-red-100", description: "Service completely down" },
];

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  customerId: string;
  issueType: string;
  priority: string;
  message: string;
  attachment?: FileList;
};

export default function SupportTicketPage() {
  const [submitting, setSubmitting] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState("MEDIUM");
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { priority: "MEDIUM" } });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setSubmitting(true);
    try {
      // Build JSON payload (attachment is handled separately if needed)
      const payload = {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || "",
        customerId: data.customerId || "",
        issueType: data.issueType,
        priority: data.priority,
        message: data.message,
        attachmentUrl: "",
      };

      const res = await fetch("/api/support-tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const result = await res.json();
        setTicketNumber(result.ticketNumber || result.data?.ticketNumber || `WFN-${Date.now().toString().slice(-6)}`);
        reset();
        setFileName(null);
        setSelectedPriority("MEDIUM");
        toast.success("Support ticket created successfully!");
      } else {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.message || "Submission failed");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handlePrioritySelect = (val: string) => {
    setSelectedPriority(val);
    setValue("priority", val);
  };

  if (ticketNumber) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center section-padding bg-gray-50">
        <div className="container-custom max-w-2xl text-center">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-12">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-[#0B7F3A]" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Ticket Created!</h2>
            <p className="text-gray-500 text-base mb-6">
              Your support ticket has been submitted successfully. Our team will review it and respond within 24 hours.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-500 mb-1">Your Ticket Number</p>
              <p className="text-3xl font-extrabold text-[#25468F] tracking-wider">{ticketNumber}</p>
              <p className="text-xs text-gray-400 mt-2">Save this number to track your ticket status.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Clock, title: "Response Time", detail: "Within 24 hours" },
                { icon: Shield, title: "Priority Handling", detail: "High & Urgent first" },
                { icon: Headphones, title: "Direct Support", detail: "Via phone or WhatsApp" },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4 text-center">
                  <item.icon size={20} className="text-[#25468F] mx-auto mb-2" />
                  <p className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setTicketNumber(null)}
                className="px-6 py-3 bg-[#25468F] text-white font-bold rounded-xl hover:bg-[#071A3D] transition-all text-sm"
              >
                Create Another Ticket
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        </div>
        <div className="container-custom relative z-10 py-16 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Ticket size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">Tracked & Prioritized Support</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Create a{" "}
            <span className="text-[#2298D4]">Support Ticket</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Submit a support ticket and our technical team will diagnose and resolve your issue with a full audit trail and priority handling.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: "< 2 hrs", label: "Avg Response" },
              { value: "24/7", label: "Monitoring" },
              { value: "98%", label: "Resolution Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-[#2298D4] mb-0.5">{stat.value}</div>
                <div className="text-blue-300 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Ticket Details</h2>
              <p className="text-gray-500 text-sm">
                Fill in the form below with as much detail as possible so our team can resolve your issue quickly.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
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
                  {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName.message}</p>}
                </div>

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
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Email & Customer ID */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      {...register("email", {
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                      })}
                      type="email"
                      placeholder="your@email.com"
                      className={`w-full pl-11 pr-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all ${
                        errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Customer ID <span className="text-gray-400 text-xs font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Hash size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <input
                      {...register("customerId")}
                      type="text"
                      placeholder="e.g. WFN-12345"
                      className="w-full pl-11 pr-4 py-3.5 border border-gray-200 bg-gray-50 focus:bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Issue Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Issue Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <AlertCircle size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select
                    {...register("issueType", { required: "Please select an issue type" })}
                    className={`w-full pl-11 pr-10 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all appearance-none ${
                      errors.issueType ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                    }`}
                  >
                    <option value="">Select issue type...</option>
                    {issueTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
                {errors.issueType && <p className="text-red-500 text-xs mt-1.5">{errors.issueType.message}</p>}
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Priority <span className="text-red-500">*</span>
                </label>
                <input type="hidden" {...register("priority", { required: true })} value={selectedPriority} />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {priorities.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => handlePrioritySelect(p.value)}
                      className={`p-3.5 rounded-xl border-2 text-left transition-all ${
                        selectedPriority === p.value
                          ? `border-current ${p.color} bg-opacity-10 ${p.bg}`
                          : "border-gray-200 bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      <div className={`text-sm font-bold ${selectedPriority === p.value ? p.color : "text-gray-700"}`}>
                        {p.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-tight">{p.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Describe Your Issue <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("message", {
                    required: "Please describe your issue",
                    minLength: { value: 20, message: "Please provide more detail (at least 20 characters)" },
                  })}
                  rows={5}
                  placeholder="Please describe your issue in detail. Include when it started, what you've already tried, and any error messages you've seen..."
                  className={`w-full px-4 py-3.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#25468F] transition-all resize-none ${
                    errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50 focus:bg-white"
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Attachment <span className="text-gray-400 text-xs font-normal">(Optional — screenshot or photo of the issue)</span>
                </label>
                <div className="relative">
                  <label className="flex items-center gap-3 border-2 border-dashed border-gray-200 rounded-xl px-5 py-4 cursor-pointer hover:border-[#25468F] hover:bg-blue-50/30 transition-all group">
                    <Paperclip size={18} className="text-gray-400 group-hover:text-[#25468F] transition-colors flex-shrink-0" />
                    <span className="text-sm text-gray-500 group-hover:text-[#25468F] transition-colors">
                      {fileName ? fileName : "Click to attach a file (JPG, PNG, PDF — max 5MB)"}
                    </span>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf,.webp"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      {...register("attachment", {
                        onChange: (e) => {
                          const file = e.target.files?.[0];
                          setFileName(file ? file.name : null);
                        },
                      })}
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#25468F] hover:bg-[#071A3D] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-200"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting Ticket...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Support Ticket
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting this ticket, you agree to our{" "}
                <Link href="/terms-and-conditions" className="text-[#25468F] underline underline-offset-2">
                  Terms & Conditions
                </Link>
                . We&apos;ll contact you via your provided phone or email.
              </p>
            </form>
          </div>

          {/* Info Strip */}
          <div className="grid sm:grid-cols-3 gap-5 mt-8">
            {[
              { icon: Clock, title: "Fast Response", desc: "High & Urgent tickets are addressed within 2 hours.", color: "text-[#25468F]", bg: "bg-blue-50" },
              { icon: Shield, title: "Secure & Private", desc: "Your information is handled with strict confidentiality.", color: "text-[#0B7F3A]", bg: "bg-green-50" },
              { icon: Headphones, title: "Expert Team", desc: "Experienced technicians handle every ticket personally.", color: "text-[#2298D4]", bg: "bg-sky-50" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm mb-3">Prefer to contact us directly?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25468F] text-white font-bold rounded-xl hover:bg-[#071A3D] transition-all text-sm"
              >
                Contact Page <ArrowRight size={15} />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Thank you for subscribing!");
        setEmail("");
      } else {
        toast.error(data.message || "Failed to subscribe");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F7F8FA] py-14">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-[#25468F] to-[#071A3D] rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">
                Stay Connected with World Fiber Net
              </h2>
              <p className="text-blue-200 text-sm lg:text-base">
                Subscribe for the latest offers, updates and exciting news.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[420px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#2298D4] min-w-0"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 bg-[#0B7F3A] hover:bg-[#065a28] text-white font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

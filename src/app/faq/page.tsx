"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  Ticket,
} from "lucide-react";

const categories = [
  "All",
  "Getting Started",
  "IPTV",
  "Billing",
  "Technical",
  "Plans",
  "Coverage",
];

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

const hardcodedFaqs: FAQ[] = [
  // Getting Started
  {
    id: "gs1",
    question: "How do I apply for a new fiber internet connection?",
    answer:
      "You can apply for a new connection by visiting our Contact page and filling out the enquiry form, calling us at +977-1-XXXXXXX, or reaching us via WhatsApp. Our team will conduct a free site survey within 24–48 hours and schedule your installation at a convenient time.",
    category: "Getting Started",
  },
  {
    id: "gs2",
    question: "How long does installation take?",
    answer:
      "The installation process typically takes 2–4 hours depending on the complexity of the setup and the distance from our nearest fiber node. Our technicians handle everything from fiber cabling to router configuration and WiFi optimization.",
    category: "Getting Started",
  },
  {
    id: "gs3",
    question: "What documents are required for a new connection?",
    answer:
      "You will need a valid government-issued photo ID (citizenship certificate, passport, or driving license), a recent utility bill or proof of address, and a passport-size photograph. For corporate connections, company registration documents are also required.",
    category: "Getting Started",
  },
  {
    id: "gs4",
    question: "Is there a security deposit or installation fee?",
    answer:
      "Installation is free for standard residential connections. A refundable security deposit may apply for the router/ONU equipment provided. Corporate connections may have different terms. Contact our sales team for exact details.",
    category: "Getting Started",
  },
  // IPTV
  {
    id: "iptv1",
    question: "What IPTV services does World Fiber Net offer?",
    answer:
      "We offer two premium IPTV platforms: Net TV (Nepal's most popular IPTV with 200+ channels) and Sky TV (premium international IPTV with 300+ channels). Both can be subscribed to individually or as part of an Internet + IPTV Combo package.",
    category: "IPTV",
  },
  {
    id: "iptv2",
    question: "What is the difference between Net TV and Sky TV?",
    answer:
      "Net TV focuses primarily on Nepali, Hindi, and regional content with 200+ channels, on-demand content, and local entertainment. Sky TV offers a more international lineup with 300+ channels including premium sports packages, Hollywood movies, international news, and documentary channels with Dolby Audio support.",
    category: "IPTV",
  },
  {
    id: "iptv3",
    question: "Can I subscribe to both Net TV and Sky TV?",
    answer:
      "Yes! You can subscribe to both platforms for the ultimate entertainment experience. We offer special combination packages. Contact our team for pricing details on bundled IPTV subscriptions.",
    category: "IPTV",
  },
  {
    id: "iptv4",
    question: "What devices can I use to watch IPTV?",
    answer:
      "Our IPTV service supports Smart TVs, Android TV boxes, smartphones, tablets, laptops, and desktop computers. Most platforms offer dedicated apps for easy access. Multi-room streaming is also available on supported plans.",
    category: "IPTV",
  },
  {
    id: "iptv5",
    question: "Is IPTV included in my internet plan?",
    answer:
      "IPTV is not included in standard internet plans — it is an add-on service or available as part of our Internet + IPTV Combo packages, which offer significant savings compared to subscribing separately.",
    category: "IPTV",
  },
  // Billing
  {
    id: "b1",
    question: "When is my bill due?",
    answer:
      "Bills are due on the same date each month as your connection activation date. You will receive a reminder notification via SMS or email 7 days before the due date. We recommend paying at least 2–3 days before the due date to avoid any service interruption.",
    category: "Billing",
  },
  {
    id: "b2",
    question: "What payment methods are accepted?",
    answer:
      "We accept payments via eSewa, Khalti, Mobile Banking (any Nepali bank), and direct Bank Transfer. Visit our Recharge page for step-by-step instructions for each payment method.",
    category: "Billing",
  },
  {
    id: "b3",
    question: "My payment is not reflected. What should I do?",
    answer:
      "Payments are usually reflected within 1–4 hours. If your payment is not reflected after 4 hours, please contact our billing team via WhatsApp with your payment receipt/screenshot. You can also create a support ticket on our website.",
    category: "Billing",
  },
  {
    id: "b4",
    question: "Can I get a refund if I cancel my subscription?",
    answer:
      "Refund eligibility depends on your plan and the date of cancellation. Monthly plans are generally non-refundable for the current billing period. Annual plan refunds are calculated on a pro-rata basis. Please contact our support team to discuss your specific situation.",
    category: "Billing",
  },
  // Technical
  {
    id: "t1",
    question: "My internet is slow. What can I do?",
    answer:
      "First, restart your router by unplugging it for 30 seconds and plugging it back in. Check if the issue is on WiFi (try a wired connection). Run a speed test at fast.com. If speeds are consistently below your plan limit, contact our technical support team — we'll investigate and resolve the issue remotely or send a technician.",
    category: "Technical",
  },
  {
    id: "t2",
    question: "My internet is completely down. What should I do?",
    answer:
      "Check if the fiber cable is properly connected to your ONT/ONU device. Verify that the ONT power LED is on. Restart the ONT and your router. If the ONT shows a red or blinking light, there may be a fiber line issue — contact our technical support immediately at +977-1-XXXXXXX or via WhatsApp.",
    category: "Technical",
  },
  {
    id: "t3",
    question: "What is the WiFi password and how do I change it?",
    answer:
      "Your default WiFi password is printed on the label on the bottom of your router. To change it, open a browser and visit 192.168.1.1 (or the IP printed on your router), log in with admin credentials (also on the label), and navigate to Wireless Settings. Our technicians can also help you change it remotely.",
    category: "Technical",
  },
  {
    id: "t4",
    question: "Does fiber internet have data caps?",
    answer:
      "No — World Fiber Net does not impose data caps or throttle your connection based on usage. You get unlimited data at your plan's full speed, all month long, with no fair usage policy (FUP) restrictions.",
    category: "Technical",
  },
  // Plans
  {
    id: "p1",
    question: "What internet speed plans do you offer?",
    answer:
      "We offer a range of plans from 25 Mbps to 1 Gbps for residential users, and custom dedicated bandwidth solutions for corporate clients. Visit our Packages page to see all available plans and pricing.",
    category: "Plans",
  },
  {
    id: "p2",
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle. Contact our support team or account manager to make changes.",
    category: "Plans",
  },
  {
    id: "p3",
    question: "Do you offer annual plans with discounts?",
    answer:
      "Yes, we offer annual plans that give you 2 months free compared to paying monthly. It's our most popular option for customers who want to save more. Visit our Packages page or contact us for annual plan details.",
    category: "Plans",
  },
  // Coverage
  {
    id: "c1",
    question: "Which areas do you currently serve?",
    answer:
      "We currently serve Kathmandu, Lalitpur, Bhaktapur, Pokhara, and Chitwan, with rapid expansion to more districts underway. To check if we serve your specific area, contact us with your address and our team will verify coverage.",
    category: "Coverage",
  },
  {
    id: "c2",
    question: "When will you expand to my area?",
    answer:
      "We are continuously expanding our fiber network. To register your interest for coverage in your area, contact us via the website or WhatsApp with your location details. We prioritize areas with high demand, so the more people who register, the faster we expand.",
    category: "Coverage",
  },
  {
    id: "c3",
    question: "Do you cover rural and suburban areas?",
    answer:
      "Our primary focus is currently on urban and peri-urban areas, but we are actively working to extend our fiber infrastructure to suburban and emerging residential areas. We encourage you to contact us to register your location for future coverage.",
    category: "Coverage",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3 flex-1">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <HelpCircle size={16} className="text-[#25468F]" />
          </div>
          <span className="font-semibold text-gray-900 text-sm lg:text-base leading-snug">{faq.question}</span>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp size={20} className="text-[#25468F]" />
          ) : (
            <ChevronDown size={20} className="text-gray-400" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-5 lg:px-6 pb-5 lg:pb-6 bg-white border-t border-gray-50">
          <div className="pl-11">
            <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>(hardcodedFaqs);

  useEffect(() => {
    // Try to fetch from API and merge with hardcoded data
    async function loadFaqs() {
      try {
        const res = await fetch("/api/faq");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setFaqs(data);
          }
        }
      } catch {
        // Use hardcoded FAQs as fallback
      }
    }
    loadFaqs();
  }, []);

  const filtered = faqs.filter((faq) => {
    const matchCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchSearch =
      search === "" ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse at 20% 50%, #2298D4 0%, transparent 50%),
                                radial-gradient(ellipse at 80% 25%, #0B7F3A 0%, transparent 50%)`,
            }}
          />
        </div>
        <div className="container-custom relative z-10 py-16 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <HelpCircle size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">Find Your Answers Here</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Frequently Asked{" "}
            <span className="text-[#2298D4]">Questions</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Everything you need to know about World Fiber Net's internet and IPTV services. Can't find your answer? Our support team is here to help.
          </p>
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search your question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white text-gray-900 rounded-2xl border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25468F] text-sm"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenId(null);
                }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#25468F] text-white shadow-md shadow-blue-200"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#25468F] hover:text-[#25468F]"
                }`}
              >
                {cat}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat ? "bg-white/20" : "bg-gray-100"}`}>
                  {cat === "All" ? faqs.length : faqs.filter((f) => f.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Results Found</h3>
              <p className="text-gray-500 mb-6">
                We couldn't find an answer to your question. Please contact our support team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25468F] text-white font-bold rounded-xl hover:bg-[#071A3D] transition-all"
              >
                Contact Support <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-3">
              {filtered.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggle(faq.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding-sm bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Still Have Questions?</h2>
            <p className="text-blue-200 text-base mb-8 max-w-xl mx-auto">
              Our support team is available 7 days a week to help you with anything related to your service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
              >
                <MessageCircle size={18} />
                Contact Us
              </Link>
              <Link
                href="/support-ticket"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all"
              >
                <Ticket size={18} />
                Create Support Ticket
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

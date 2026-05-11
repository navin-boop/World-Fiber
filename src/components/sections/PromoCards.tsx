import Link from "next/link";
import { ArrowRight } from "lucide-react";

const promoCards = [
  {
    badge: { en: "New Connection Offer", ne: "नयाँ जडान अफर" },
    title: { en: "Get 1 Month", ne: "१ महिना पाउनुहोस्" },
    highlight: { en: "FREE", ne: "निःशुल्क" },
    subtitle: { en: "On All Plans", ne: "सबै प्लानमा" },
    cta: { en: "Claim Now", ne: "अहिले लिनुहोस्" },
    href: "/contact#new-connection",
    bgFrom: "#25468F",
    bgTo: "#071A3D",
    accentColor: "#0B7F3A",
    icon: (
      <svg viewBox="0 0 80 60" className="w-full h-full opacity-20">
        <rect x="5" y="15" width="70" height="40" rx="5" fill="white" />
        <circle cx="55" cy="35" r="15" fill="white" opacity="0.5" />
        <circle cx="60" cy="30" r="15" fill="white" opacity="0.3" />
        <path d="M 10 25 L 10 45 L 70 45 L 70 25" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    badge: { en: "IPTV Available", ne: "IPTV उपलब्ध" },
    title: { en: "Net TV", ne: "नेट टिभी" },
    highlight: { en: "+ Sky TV", ne: "+ स्काई टिभी" },
    subtitle: { en: "100+ Live Channels", ne: "१०० भन्दा बढी लाइभ च्यानलहरू" },
    cta: { en: "Explore IPTV", ne: "IPTV हेर्नुहोस्" },
    href: "/iptv",
    bgFrom: "#0a5c30",
    bgTo: "#0B7F3A",
    accentColor: "#2298D4",
    icon: (
      <svg viewBox="0 0 80 60" className="w-full h-full opacity-20">
        <rect x="5" y="8" width="70" height="44" rx="4" fill="white" />
        <rect x="10" y="12" width="60" height="35" rx="2" fill="white" opacity="0.4" />
        <circle cx="40" cy="56" r="4" fill="white" />
        <rect x="28" y="52" width="24" height="3" rx="2" fill="white" />
        <polygon points="33,22 33,40 53,31" fill="white" opacity="0.6" />
      </svg>
    ),
  },
  {
    badge: { en: "Best Combo Deal", ne: "उत्तम कम्बो डिल" },
    title: { en: "Internet + IPTV", ne: "इन्टरनेट + IPTV" },
    highlight: { en: "Combo", ne: "कम्बो" },
    subtitle: { en: "Better Together", ne: "सँगै राम्रो" },
    cta: { en: "View Combo Plans", ne: "कम्बो प्लान हेर्नुहोस्" },
    href: "/packages#iptv-combo",
    bgFrom: "#0e3a6e",
    bgTo: "#25468F",
    accentColor: "#0B7F3A",
    icon: (
      <svg viewBox="0 0 80 60" className="w-full h-full opacity-20">
        <rect x="2" y="20" width="40" height="30" rx="4" fill="white" />
        <circle cx="22" cy="35" r="10" fill="white" opacity="0.4" />
        <rect x="45" y="10" width="33" height="22" rx="3" fill="white" />
        <rect x="48" y="13" width="27" height="16" rx="1" fill="white" opacity="0.4" />
        <path d="M 22,15 Q 45,15 55,10" stroke="white" strokeWidth="2" fill="none" strokeDasharray="3,2" />
      </svg>
    ),
  },
  {
    badge: { en: "Pay Online", ne: "अनलाइन भुक्तानी" },
    title: { en: "Recharge", ne: "रिचार्ज" },
    highlight: { en: "Online", ne: "अनलाइन" },
    subtitle: { en: "eSewa • Khalti • Banking", ne: "eSewa • Khalti • बैंकिङ" },
    cta: { en: "Recharge Now", ne: "अहिले रिचार्ज गर्नुहोस्" },
    href: "/recharge",
    bgFrom: "#1a6b4a",
    bgTo: "#0B7F3A",
    accentColor: "#2298D4",
    icon: (
      <svg viewBox="0 0 80 60" className="w-full h-full opacity-20">
        <rect x="15" y="5" width="50" height="85" rx="8" fill="white" />
        <rect x="20" y="15" width="40" height="6" rx="3" fill="white" opacity="0.5" />
        <rect x="20" y="25" width="30" height="4" rx="2" fill="white" opacity="0.3" />
        <circle cx="40" cy="45" r="10" fill="white" opacity="0.4" />
        <path d="M 35,45 L 39,49 L 45,42" stroke="white" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

export default function PromoCards() {
  return (
    <section className="section-padding-sm bg-[#F7F8FA]">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {promoCards.map((card) => (
            <div
              key={card.title.en}
              className="rounded-2xl overflow-hidden relative group card-hover"
              style={{ background: `linear-gradient(135deg, ${card.bgFrom} 0%, ${card.bgTo} 100%)` }}
            >
              {/* Background icon */}
              <div className="absolute top-4 right-4 w-24 h-20">{card.icon}</div>

              <div className="relative p-6">
                <div
                  className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 text-white"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <span className="lang-en">{card.badge.en}</span>
                  <span className="lang-ne">{card.badge.ne}</span>
                </div>
                <div className="text-white font-bold text-lg leading-tight">
                  <span className="lang-en">{card.title.en}</span>
                  <span className="lang-ne">{card.title.ne}</span>
                </div>
                <div
                  className="font-extrabold text-2xl leading-tight"
                  style={{ color: card.accentColor === "#0B7F3A" ? "#4ade80" : "#7dd3fc" }}
                >
                  <span className="lang-en">{card.highlight.en}</span>
                  <span className="lang-ne">{card.highlight.ne}</span>
                </div>
                <div className="text-white/70 text-xs mt-1 mb-5">
                  <span className="lang-en">{card.subtitle.en}</span>
                  <span className="lang-ne">{card.subtitle.ne}</span>
                </div>
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 bg-white text-[#25468F] text-xs font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="lang-en">{card.cta.en}</span>
                  <span className="lang-ne">{card.cta.ne}</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

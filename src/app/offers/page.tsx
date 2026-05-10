import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Tag, Clock, Zap, Star } from "lucide-react";

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_offers_title || "Offers & Promotions | World Fiber Net Pvt. Ltd.",
    description: s.seo_offers_desc || "Discover the latest offers, deals, and promotions from World Fiber Net. Save on fiber internet and IPTV packages across Nepal.",
  };
}

export const revalidate = 300;

const fallbackOffers = [
  {
    id: "f1",
    title: "New Connection Discount",
    description:
      "Get your first month free when you sign up for any fiber internet plan. No setup fee, free professional installation, and free router included. Limited time offer for new customers.",
    ctaText: "Apply Now",
    ctaLink: "/contact",
    badge: "New Customers",
    badgeColor: "bg-[#0B7F3A] text-white",
  },
  {
    id: "f2",
    title: "Internet + IPTV Combo Deal",
    description:
      "Bundle your fiber internet with Net TV or Sky TV IPTV and save up to 30%. Enjoy seamless entertainment and high-speed internet for one convenient monthly bill.",
    ctaText: "View Packages",
    ctaLink: "/packages",
    badge: "Best Value",
    badgeColor: "bg-[#25468F] text-white",
  },
  {
    id: "f3",
    title: "Annual Plan — 2 Months Free",
    description:
      "Subscribe to any annual plan and get 2 months absolutely free. Lock in your rate, enjoy uninterrupted service, and save significantly on your yearly internet bill.",
    ctaText: "Get Annual Plan",
    ctaLink: "/packages",
    badge: "Annual Offer",
    badgeColor: "bg-purple-600 text-white",
  },
  {
    id: "f4",
    title: "Refer a Friend & Earn",
    description:
      "Refer a friend or neighbor to World Fiber Net and earn exciting rewards when they sign up for a plan. The more you refer, the more you save on your own bill.",
    ctaText: "Refer Now",
    ctaLink: "/contact",
    badge: "Referral Bonus",
    badgeColor: "bg-[#2298D4] text-white",
  },
];

const gradients = [
  "from-[#25468F] to-[#071A3D]",
  "from-[#0B7F3A] to-[#065a28]",
  "from-purple-600 to-purple-900",
  "from-[#2298D4] to-[#1a78a8]",
  "from-[#071A3D] to-[#25468F]",
  "from-orange-500 to-orange-800",
];

type Offer = {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  startDate?: Date | null;
  endDate?: Date | null;
};

async function fetchOffers(): Promise<Offer[]> {
  try {
    const offers = await prisma.offer.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
    });
    return offers;
  } catch {
    return [];
  }
}

function OfferCard({
  offer,
  index,
  badge,
  badgeColor,
}: {
  offer: Offer;
  index: number;
  badge?: string;
  badgeColor?: string;
}) {
  const gradient = gradients[index % gradients.length];
  const hasEndDate = offer.endDate && new Date(offer.endDate) > new Date();

  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover flex flex-col">
      <div className={`bg-gradient-to-r ${gradient} h-2`} />
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-5">
          {badge ? (
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeColor}`}>{badge}</span>
          ) : (
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full">
              <Tag size={11} />
              Special Offer
            </span>
          )}
          {hasEndDate && (
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-full">
              <Clock size={11} />
              Limited Time
            </span>
          )}
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5`}>
          <Star size={20} className="text-white fill-white/50" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-3">{offer.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm flex-1">{offer.description}</p>
        {hasEndDate && (
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <Clock size={13} />
            <span>Offer ends: {new Date(offer.endDate!).toLocaleDateString("en-NP", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
        )}
        <div className="mt-6">
          <Link
            href={offer.ctaLink || "/contact"}
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-all text-sm`}
          >
            {offer.ctaText || "Learn More"} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FallbackCard({
  offer,
  index,
}: {
  offer: (typeof fallbackOffers)[0];
  index: number;
}) {
  const gradient = gradients[index % gradients.length];
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover flex flex-col">
      <div className={`bg-gradient-to-r ${gradient} h-2`} />
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${offer.badgeColor}`}>{offer.badge}</span>
          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full">
            <Tag size={11} />
            Active Offer
          </span>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5`}>
          <Zap size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-3">{offer.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm flex-1">{offer.description}</p>
        <div className="mt-6">
          <Link
            href={offer.ctaLink}
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-all text-sm`}
          >
            {offer.ctaText} <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function OffersPage() {
  const offers = await fetchOffers();
  const hasOffers = offers.length > 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#0B7F3A] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse at 15% 50%, #2298D4 0%, transparent 55%),
                                radial-gradient(ellipse at 85% 20%, #0B7F3A 0%, transparent 50%)`,
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="100" r="120" stroke="#2298D4" strokeWidth="1.5" fill="none" />
            <circle cx="1000" cy="300" r="180" stroke="#0B7F3A" strokeWidth="1" fill="none" />
            <path d="M0,180 Q400,100 800,200 T1200,160" stroke="#4ade80" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="container-custom relative z-10 py-16 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Tag size={14} className="text-yellow-300" />
            <span className="text-sm font-medium text-blue-100">Exclusive Deals for Our Customers</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Offers &amp; <span className="text-yellow-300">Promotions</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Take advantage of our latest deals and special promotions on fiber internet and IPTV packages. Limited time offers available!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
            >
              View All Packages <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Offer Stats Strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "30%", label: "Up to 30% Savings on Combos" },
              { value: "2 Months", label: "Free on Annual Plans" },
              { value: "Free", label: "Professional Installation" },
              { value: "24/7", label: "Support Included" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-[#25468F] mb-0.5">{stat.value}</div>
                <div className="text-gray-500 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">Current Deals</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              {hasOffers ? "Active Offers" : "Featured Promotions"}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {hasOffers
                ? "Check out our currently active offers. Act fast — some are for a limited time only!"
                : "Explore our ongoing promotions and save big on fiber internet and IPTV packages."}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-7">
            {hasOffers
              ? offers.map((offer, i) => (
                  <OfferCard key={offer.id} offer={offer} index={i} />
                ))
              : fallbackOffers.map((offer, i) => (
                  <FallbackCard key={offer.id} offer={offer} index={i} />
                ))}
          </div>
        </div>
      </section>

      {/* Terms Note */}
      <section className="bg-gray-100 border-t border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-start gap-3">
            <Tag size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-700">Terms & Conditions Apply:</strong> All offers are subject to availability and may be modified or discontinued at any time. Offers are valid for new connections or as specified. Contact our sales team for full terms.{" "}
              <Link href="/terms-and-conditions" className="text-[#25468F] underline underline-offset-2">
                View Full Terms
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-gradient-to-r from-[#0B7F3A] to-[#065a28]">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Don&apos;t Miss Out!
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            These offers won&apos;t last forever. Apply for a new connection today and take advantage of our best deals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0B7F3A] font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg text-base"
            >
              Apply for New Connection <ArrowRight size={18} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all text-base"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

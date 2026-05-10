import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ArrowRight, Tag, Clock, Zap, Star, Sparkles, Gift } from "lucide-react";
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
    titleNe: "नयाँ जडान छूट",
    description: "Get your first month free when you sign up for any fiber internet plan. No setup fee, free professional installation, and free router included. Limited time offer for new customers.",
    descNe: "कुनै पनि फाइबर इन्टरनेट प्लानमा साइन अप गर्दा पहिलो महिना निःशुल्क पाउनुहोस्। सेटअप शुल्क छैन, निःशुल्क पेशेवर स्थापना र निःशुल्क राउटर समावेश।",
    ctaText: "Apply Now",
    ctaTextNe: "अहिले आवेदन दिनुहोस्",
    ctaLink: "/contact",
    badge: "New Customers",
    badgeNe: "नयाँ ग्राहक",
    badgeColor: "bg-[#0B7F3A] text-white",
    bannerUrl: "",
  },
  {
    id: "f2",
    title: "Internet + IPTV Combo Deal",
    titleNe: "इन्टरनेट + IPTV कम्बो अफर",
    description: "Bundle your fiber internet with Net TV or Sky TV IPTV and save up to 30%. Enjoy seamless entertainment and high-speed internet for one convenient monthly bill.",
    descNe: "नेट टीभी वा स्काई टीभी IPTV सँग आफ्नो फाइबर इन्टरनेट बन्डल गर्नुहोस् र ३०% सम्म बचत गर्नुहोस्। एउटै मासिक बिलमा सहज मनोरञ्जन र हाई-स्पिड इन्टरनेट उपभोग गर्नुहोस्।",
    ctaText: "View Packages",
    ctaTextNe: "प्याकेजहरू हेर्नुहोस्",
    ctaLink: "/packages",
    badge: "Best Value",
    badgeNe: "उत्तम मूल्य",
    badgeColor: "bg-[#25468F] text-white",
    bannerUrl: "",
  },
  {
    id: "f3",
    title: "Annual Plan — 2 Months Free",
    titleNe: "वार्षिक योजना — २ महिना निःशुल्क",
    description: "Subscribe to any annual plan and get 2 months absolutely free. Lock in your rate, enjoy uninterrupted service, and save significantly on your yearly internet bill.",
    descNe: "कुनै पनि वार्षिक योजनामा सदस्यता लिनुहोस् र २ महिना पूर्णतः निःशुल्क पाउनुहोस्। आफ्नो दर निर्धारण गर्नुहोस् र वार्षिक इन्टरनेट बिलमा उल्लेखनीय बचत गर्नुहोस्।",
    ctaText: "Get Annual Plan",
    ctaTextNe: "वार्षिक योजना लिनुहोस्",
    ctaLink: "/packages",
    badge: "Annual Offer",
    badgeNe: "वार्षिक अफर",
    badgeColor: "bg-purple-600 text-white",
    bannerUrl: "",
  },
  {
    id: "f4",
    title: "Refer a Friend & Earn",
    titleNe: "साथीलाई रेफर गर्नुहोस् र कमाउनुहोस्",
    description: "Refer a friend or neighbor to World Fiber Net and earn exciting rewards when they sign up for a plan. The more you refer, the more you save on your own bill.",
    descNe: "साथी वा छिमेकीलाई वर्ल्ड फाइबर नेटमा रेफर गर्नुहोस् र उनीहरूले प्लानमा साइन अप गर्दा रोमाञ्चक पुरस्कार कमाउनुहोस्।",
    ctaText: "Refer Now",
    ctaTextNe: "अहिले रेफर गर्नुहोस्",
    ctaLink: "/contact",
    badge: "Referral Bonus",
    badgeNe: "रेफरल बोनस",
    badgeColor: "bg-[#2298D4] text-white",
    bannerUrl: "",
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
  bannerUrl: string;
  mobileBannerUrl: string;
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

async function fetchHeroBanner() {
  try {
    const banners = await prisma.banner.findMany({
      where: { placement: "OFFERS_PAGE_BANNER", isActive: true },
      orderBy: { sortOrder: "asc" },
      take: 1,
    });
    return banners[0] || null;
  } catch {
    return null;
  }
}

async function fetchSectionBanner() {
  try {
    const banners = await prisma.banner.findMany({
      where: { placement: "OFFERS_SECTION_BANNER", isActive: true },
      orderBy: { sortOrder: "asc" },
      take: 1,
    });
    return banners[0] || null;
  } catch {
    return null;
  }
}

function OfferCard({ offer, index }: { offer: Offer; index: number }) {
  const gradient = gradients[index % gradients.length];
  const hasEndDate = offer.endDate && new Date(offer.endDate) > new Date();

  return (
    <div className="card-premium flex flex-col overflow-hidden group shine-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Banner image */}
      {offer.bannerUrl && (
        <div className="relative overflow-hidden" style={{ maxHeight: 200 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={offer.bannerUrl}
            alt={offer.title}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ maxHeight: 200 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}

      {/* Top gradient bar (when no image) */}
      {!offer.bannerUrl && <div className={`bg-gradient-to-r ${gradient} h-1.5`} />}

      <div className="p-7 flex flex-col flex-1">
        {/* Badge Row */}
        <div className="flex items-center justify-between mb-5">
          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-100">
            <Tag size={11} />
            <span className="lang-en">Special Offer</span>
            <span className="lang-ne">विशेष अफर</span>
          </span>
          {hasEndDate && (
            <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-red-100">
              <Clock size={11} />
              <span className="lang-en">Limited Time</span>
              <span className="lang-ne">सीमित समय</span>
            </span>
          )}
        </div>

        {/* Icon */}
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
          <Star size={20} className="text-white fill-white/50" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug">{offer.title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm flex-1">{offer.description}</p>

        {/* End Date */}
        {hasEndDate && (
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <Clock size={13} />
            <span>Offer ends: {new Date(offer.endDate!).toLocaleDateString("en-NP", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>
        )}

        {/* CTA */}
        <div className="mt-6">
          <Link
            href={offer.ctaLink || "/contact"}
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-all text-sm shadow-md`}
          >
            <span className="lang-en">{offer.ctaText || "Learn More"}</span>
            <span className="lang-ne">थप जान्नुहोस्</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FallbackCard({ offer, index }: { offer: (typeof fallbackOffers)[0]; index: number }) {
  const gradient = gradients[index % gradients.length];
  return (
    <div className="card-premium flex flex-col overflow-hidden group shine-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
      {offer.bannerUrl ? (
        <div className="relative overflow-hidden" style={{ maxHeight: 200 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={offer.bannerUrl} alt={offer.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ maxHeight: 200 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      ) : (
        <div className={`bg-gradient-to-r ${gradient} h-1.5`} />
      )}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${offer.badgeColor}`}>
            <span className="lang-en">{offer.badge}</span>
            <span className="lang-ne">{offer.badgeNe}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-100">
            <Tag size={11} />
            <span className="lang-en">Active Offer</span>
            <span className="lang-ne">सक्रिय अफर</span>
          </span>
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
          <Zap size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug">
          <span className="lang-en">{offer.title}</span>
          <span className="lang-ne">{offer.titleNe}</span>
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm flex-1">
          <span className="lang-en">{offer.description}</span>
          <span className="lang-ne">{offer.descNe}</span>
        </p>
        <div className="mt-6">
          <Link
            href={offer.ctaLink}
            className={`inline-flex items-center gap-2 bg-gradient-to-r ${gradient} text-white font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-all text-sm shadow-md`}
          >
            <span className="lang-en">{offer.ctaText}</span>
            <span className="lang-ne">{offer.ctaTextNe}</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function OffersPage() {
  const [offers, heroBanner, sectionBanner] = await Promise.all([fetchOffers(), fetchHeroBanner(), fetchSectionBanner()]);
  const hasOffers = offers.length > 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[360px] lg:min-h-[440px] overflow-hidden flex items-center promo-banner">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(ellipse at 15% 50%, #2298D4 0%, transparent 55%),
                                radial-gradient(ellipse at 85% 20%, #0B7F3A 0%, transparent 50%)`,
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 440" preserveAspectRatio="xMidYMid slice">
            <circle cx="200" cy="100" r="120" stroke="#2298D4" strokeWidth="1.5" fill="none" />
            <circle cx="1000" cy="300" r="180" stroke="#0B7F3A" strokeWidth="1" fill="none" />
            <path d="M0,180 Q400,100 800,200 T1200,160" stroke="#4ade80" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="container-custom relative z-10 py-16 text-center text-white">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 mb-6 animate-fade-in">
            <Gift size={14} className="text-yellow-300" />
            <span className="text-sm font-medium text-blue-100">
              <span className="lang-en">Exclusive Deals for Our Customers</span>
              <span className="lang-ne">हाम्रा ग्राहकहरूका लागि विशेष अफरहरू</span>
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 fiber-glow animate-fade-in-up anim-delay-1">
            <span className="lang-en">Offers &amp; <span className="text-yellow-300">Promotions</span></span>
            <span className="lang-ne">अफर &amp; <span className="text-yellow-300">प्रवर्धनहरू</span></span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up anim-delay-2">
            <span className="lang-en">Take advantage of our latest deals and special promotions on fiber internet and IPTV packages.</span>
            <span className="lang-ne">फाइबर इन्टरनेट र IPTV प्याकेजहरूमा हाम्रो नवीनतम अफर र विशेष प्रवर्धनहरूको फाइदा उठाउनुहोस्।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up anim-delay-3">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg shine-hover"
            >
              <span className="lang-en">View All Packages</span>
              <span className="lang-ne">सबै प्याकेजहरू हेर्नुहोस्</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 glass text-white font-bold rounded-xl transition-all"
            >
              <span className="lang-en">Enquire Now</span>
              <span className="lang-ne">अहिले सोध्नुहोस्</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Page-level hero banner from DB */}
      {heroBanner && heroBanner.desktopImageUrl && (
        <section className="relative overflow-hidden">
          <div className="relative" style={{ maxHeight: 380 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroBanner.desktopImageUrl}
              alt={heroBanner.altText || heroBanner.title}
              className="w-full object-cover"
              style={{ maxHeight: 380 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/70 via-[#071A3D]/40 to-transparent flex items-center">
              <div className="container-custom py-8">
                {heroBanner.title && (
                  <h2 className="text-2xl lg:text-4xl font-extrabold text-white mb-3 max-w-xl">{heroBanner.title}</h2>
                )}
                {heroBanner.subtitle && (
                  <p className="text-blue-200 text-base mb-5 max-w-lg">{heroBanner.subtitle}</p>
                )}
                {heroBanner.ctaText && heroBanner.ctaLink && (
                  <Link
                    href={heroBanner.ctaLink}
                    className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
                  >
                    {heroBanner.ctaText} <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Offer Stats Strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { enVal: "30%", en: "Up to 30% Savings on Combos", ne: "कम्बोमा ३०% सम्म बचत" },
              { enVal: "2 Months", en: "Free on Annual Plans", ne: "वार्षिक योजनामा निःशुल्क" },
              { enVal: "Free", en: "Professional Installation", ne: "पेशेवर स्थापना" },
              { enVal: "24/7", en: "Support Included", ne: "सहायता समावेश" },
            ].map((stat) => (
              <div key={stat.en} className="group">
                <div className="text-2xl font-extrabold text-[#25468F] mb-0.5 group-hover:scale-110 transition-transform">{stat.enVal}</div>
                <div className="text-gray-500 text-xs font-medium">
                  <span className="lang-en">{stat.en}</span>
                  <span className="lang-ne">{stat.ne}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <Sparkles size={14} />
              <span className="lang-en">Current Deals</span>
              <span className="lang-ne">हालका अफरहरू</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              <span className="lang-en">{hasOffers ? "Active Offers" : "Featured Promotions"}</span>
              <span className="lang-ne">{hasOffers ? "सक्रिय अफरहरू" : "विशेष प्रवर्धनहरू"}</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <span className="lang-en">
                {hasOffers
                  ? "Check out our currently active offers. Act fast — some are for a limited time only!"
                  : "Explore our ongoing promotions and save big on fiber internet and IPTV packages."}
              </span>
              <span className="lang-ne">
                {hasOffers
                  ? "हाम्रा हालका सक्रिय अफरहरू हेर्नुहोस्। छिटो काम गर्नुहोस् — केही सीमित समयका लागि मात्र छन्!"
                  : "हाम्रा चलिरहेका प्रवर्धनहरू अन्वेषण गर्नुहोस् र फाइबर इन्टरनेट र IPTV प्याकेजहरूमा ठूलो बचत गर्नुहोस्।"}
              </span>
            </p>
          </div>

          {/* Section Banner — managed from Banner Manager (placement: OFFERS_SECTION_BANNER) */}
          {sectionBanner && sectionBanner.desktopImageUrl && (
            <div className="mb-10 rounded-3xl overflow-hidden shadow-xl relative" style={{ maxHeight: 320 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sectionBanner.desktopImageUrl}
                alt={sectionBanner.altText || sectionBanner.title}
                className="w-full object-cover"
                style={{ maxHeight: 320 }}
              />
              {(sectionBanner.title || sectionBanner.ctaText) && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/75 via-[#071A3D]/40 to-transparent flex items-center">
                  <div className="px-8 py-6 max-w-xl">
                    {sectionBanner.title && (
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-snug">{sectionBanner.title}</h3>
                    )}
                    {sectionBanner.subtitle && (
                      <p className="text-blue-200 text-sm mb-4">{sectionBanner.subtitle}</p>
                    )}
                    {sectionBanner.ctaText && sectionBanner.ctaLink && (
                      <Link
                        href={sectionBanner.ctaLink}
                        className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-all text-sm"
                      >
                        {sectionBanner.ctaText} <ArrowRight size={15} />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-7">
            {hasOffers
              ? offers.map((offer, i) => <OfferCard key={offer.id} offer={offer} index={i} />)
              : fallbackOffers.map((offer, i) => <FallbackCard key={offer.id} offer={offer} index={i} />)}
          </div>
        </div>
      </section>

      {/* Promotional mid-page banner */}
      <section className="section-padding-sm promo-banner">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div>
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-2">
                <span className="lang-en">Limited Time</span>
                <span className="lang-ne">सीमित समय</span>
              </p>
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">
                <span className="lang-en">Get 2 Months FREE on Any Annual Plan!</span>
                <span className="lang-ne">कुनै पनि वार्षिक योजनामा २ महिना निःशुल्क पाउनुहोस्!</span>
              </h2>
              <p className="text-blue-200 text-sm">
                <span className="lang-en">Subscribe annually and save more. Offer valid for new connections only.</span>
                <span className="lang-ne">वार्षिक रूपमा सदस्यता लिनुहोस् र थप बचत गर्नुहोस्। नयाँ जडानहरूका लागि मात्र मान्य।</span>
              </p>
            </div>
            <div className="flex-shrink-0 flex gap-3">
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all text-sm shine-hover"
              >
                <span className="lang-en">View Annual Plans</span>
                <span className="lang-ne">वार्षिक योजनाहरू हेर्नुहोस्</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 glass text-white font-bold px-5 py-3.5 rounded-xl transition-all text-sm"
              >
                <span className="lang-en">Contact Us</span>
                <span className="lang-ne">सम्पर्क</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Note */}
      <section className="bg-gray-100 border-t border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-start gap-3">
            <Tag size={16} className="text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-gray-500 text-sm">
              <strong className="text-gray-700">
                <span className="lang-en">Terms & Conditions Apply:</span>
                <span className="lang-ne">नियम र सर्तहरू लागू:</span>
              </strong>{" "}
              <span className="lang-en">All offers are subject to availability and may be modified or discontinued at any time.</span>
              <span className="lang-ne">सबै अफरहरू उपलब्धताको अधीनमा छन् र जुनसुकै समयमा परिमार्जन वा बन्द गर्न सकिन्छ।</span>
              {" "}
              <Link href="/terms-and-conditions" className="text-[#25468F] underline underline-offset-2">
                <span className="lang-en">View Full Terms</span>
                <span className="lang-ne">पूर्ण सर्तहरू हेर्नुहोस्</span>
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-gradient-to-r from-[#0B7F3A] to-[#065a28]">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            <span className="lang-en">Don&apos;t Miss Out!</span>
            <span className="lang-ne">अफर नछुटाउनुहोस्!</span>
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            <span className="lang-en">These offers won&apos;t last forever. Apply for a new connection today.</span>
            <span className="lang-ne">यी अफरहरू सधैं रहँदैनन्। आज नयाँ जडानका लागि आवेदन दिनुहोस्।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0B7F3A] font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg text-base shine-hover"
            >
              <span className="lang-en">Apply for New Connection</span>
              <span className="lang-ne">नयाँ जडानका लागि आवेदन दिनुहोस्</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-7 py-4 glass text-white font-bold rounded-xl transition-all text-base"
            >
              <span className="lang-en">View All Packages</span>
              <span className="lang-ne">सबै प्याकेजहरू हेर्नुहोस्</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

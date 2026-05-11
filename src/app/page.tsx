import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import PromoCards from "@/components/sections/PromoCards";
import ServicesSection from "@/components/sections/ServicesSection";
import FullWidthPromo from "@/components/sections/FullWidthPromo";
import PackagesPreview from "@/components/sections/PackagesPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "World Fiber Net - Fiber Internet & IPTV in Nepal",
  description:
    "Experience ultra-fast FTTH fiber internet and IPTV services including Net TV and Sky TV in Nepal. Connect with World Fiber Net Pvt. Ltd. today.",
};

const cities = ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan"];

const corporateFeatures = [
  { en: "Dedicated Bandwidth", ne: "समर्पित ब्यान्डविड्थ" },
  { en: "High Reliability & 99.9% SLA", ne: "उच्च विश्वसनीयता र ९९.९% SLA" },
  { en: "Priority 24/7 Support", ne: "प्राथमिकता २४/७ सहायता" },
  { en: "Static IP Available", ne: "स्थिर IP उपलब्ध" },
];

function CoverageSection() {
  return (
    <section className="section-padding-sm bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-2">
              <span className="lang-en">Coverage</span>
              <span className="lang-ne">सेवा क्षेत्र</span>
            </p>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              <span className="lang-en">We&apos;re Expanding Across Nepal</span>
              <span className="lang-ne">हामी नेपालभरि विस्तार गर्दैछौं</span>
            </h2>
            <p className="text-gray-500 mb-6">
              <span className="lang-en">Currently serving 5+ districts with rapid expansion plans. Check if we cover your area.</span>
              <span className="lang-ne">हाल ५+ जिल्लाहरूमा सेवा प्रदान गर्दैछौं, द्रुत विस्तार योजनाका साथ। हाम्रो सेवा तपाईंको क्षेत्रमा छ कि छैन जाँच गर्नुहोस्।</span>
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {cities.map((city) => (
                <span key={city} className="flex items-center gap-1.5 bg-blue-50 text-[#25468F] text-sm font-medium px-3 py-1.5 rounded-full">
                  <MapPin size={13} />
                  {city}
                </span>
              ))}
              <span className="flex items-center gap-1.5 bg-green-50 text-[#0B7F3A] text-sm font-medium px-3 py-1.5 rounded-full">
                <span className="lang-en">+ More Districts</span>
                <span className="lang-ne">+ थप जिल्लाहरू</span>
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25468F] text-white font-bold rounded-xl hover:bg-[#071A3D] transition-all"
            >
              <span className="lang-en">Check Coverage</span>
              <span className="lang-ne">सेवा क्षेत्र जाँच्नुहोस्</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[#071A3D] to-[#25468F] rounded-3xl p-8 text-white">
            <div className="inline-block bg-white/10 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="lang-en">For Business</span>
              <span className="lang-ne">व्यवसायका लागि</span>
            </div>
            <h3 className="text-2xl font-extrabold mb-3">
              <span className="lang-en">Corporate Fiber Solutions</span>
              <span className="lang-ne">कर्पोरेट फाइबर समाधानहरू</span>
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              <span className="lang-en">Power your business with dedicated, high-speed fiber internet and reliable support.</span>
              <span className="lang-ne">समर्पित, उच्च-गति फाइबर इन्टरनेट र विश्वसनीय सहायताका साथ आफ्नो व्यवसाय शक्तिशाली बनाउनुहोस्।</span>
            </p>
            <ul className="space-y-2.5 mb-6">
              {corporateFeatures.map((f) => (
                <li key={f.en} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 size={16} className="text-[#4ade80]" />
                  <span className="lang-en">{f.en}</span>
                  <span className="lang-ne">{f.ne}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services#corporate-fiber"
              className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold text-sm px-5 py-3 rounded-xl hover:bg-blue-50 transition-all"
            >
              <span className="lang-en">Learn More</span>
              <span className="lang-ne">थप जान्नुहोस्</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoverageStatsBanner() {
  return (
    <section className="bg-gradient-to-r from-[#25468F] to-[#071A3D] py-10">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-white text-center lg:text-left">
            <h3 className="text-xl font-extrabold mb-1">
              <span className="lang-en">Fiber Internet Built for Speed, Reliability &amp; You</span>
              <span className="lang-ne">गति, विश्वसनीयता र तपाईंका लागि निर्मित फाइबर इन्टरनेट</span>
            </h3>
            <p className="text-blue-200 text-sm">
              <span className="lang-en">Seamless streaming, smooth gaming, and smart living with World Fiber Net.</span>
              <span className="lang-ne">वर्ल्ड फाइबर नेटसँग निर्बाध स्ट्रिमिङ, सहज गेमिङ र स्मार्ट जीवन।</span>
            </p>
          </div>
          <Link
            href="/packages"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all"
          >
            <span className="lang-en">Check Packages</span>
            <span className="lang-ne">प्याकेजहरू हेर्नुहोस्</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const [heroBanners, fullwidthBanners] = await Promise.all([
    prisma.banner.findMany({
      where: { placement: "HOMEPAGE_HERO", isActive: true },
      orderBy: { sortOrder: "asc" },
      take: 1,
    }).catch(() => []),
    prisma.banner.findMany({
      where: { placement: "HOMEPAGE_FULLWIDTH", isActive: true },
      orderBy: { sortOrder: "asc" },
      take: 1,
    }).catch(() => []),
  ]);

  const hero = heroBanners[0];
  const fullwidth = fullwidthBanners[0];

  return (
    <>
      <HeroSection
        title={hero?.title || undefined}
        subtitle={hero?.subtitle || undefined}
        cta1Text={hero?.ctaText || undefined}
        cta1Link={hero?.ctaLink || undefined}
        backgroundImageUrl={hero?.desktopImageUrl || undefined}
        mobileImageUrl={hero?.mobileImageUrl || undefined}
        altText={hero?.altText || undefined}
      />
      <StatsStrip />
      <PromoCards />
      <ServicesSection />
      <FullWidthPromo
        title={fullwidth?.title || undefined}
        description={fullwidth?.subtitle || undefined}
        cta1Text={fullwidth?.ctaText || undefined}
        cta1Link={fullwidth?.ctaLink || undefined}
      />
      <PackagesPreview />
      <CoverageSection />
      <TestimonialsSection />
      <CoverageStatsBanner />
      <NewsletterSection />
    </>
  );
}

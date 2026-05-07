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

function CoverageSection() {
  return (
    <section className="section-padding-sm bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-2">Coverage</p>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              We&apos;re Expanding Across Nepal
            </h2>
            <p className="text-gray-500 mb-6">
              Currently serving 5+ districts with rapid expansion plans. Check if we cover your area.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan"].map((city) => (
                <span key={city} className="flex items-center gap-1.5 bg-blue-50 text-[#25468F] text-sm font-medium px-3 py-1.5 rounded-full">
                  <MapPin size={13} />
                  {city}
                </span>
              ))}
              <span className="flex items-center gap-1.5 bg-green-50 text-[#0B7F3A] text-sm font-medium px-3 py-1.5 rounded-full">
                + More Districts
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25468F] text-white font-bold rounded-xl hover:bg-[#071A3D] transition-all"
            >
              Check Coverage
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[#071A3D] to-[#25468F] rounded-3xl p-8 text-white">
            <div className="inline-block bg-white/10 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              For Business
            </div>
            <h3 className="text-2xl font-extrabold mb-3">Corporate Fiber Solutions</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Power your business with dedicated, high-speed fiber internet and reliable support.
            </p>
            <ul className="space-y-2.5 mb-6">
              {["Dedicated Bandwidth", "High Reliability & 99.9% SLA", "Priority 24/7 Support", "Static IP Available"].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 size={16} className="text-[#4ade80]" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/services#corporate-fiber"
              className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold text-sm px-5 py-3 rounded-xl hover:bg-blue-50 transition-all"
            >
              Learn More
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
            <h3 className="text-xl font-extrabold mb-1">Fiber Internet Built for Speed, Reliability & You</h3>
            <p className="text-blue-200 text-sm">Seamless streaming, smooth gaming, and smart living with World Fiber Net.</p>
          </div>
          <Link
            href="/packages"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all"
          >
            Check Packages
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

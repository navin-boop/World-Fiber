import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
  backgroundImageUrl?: string;
  mobileImageUrl?: string;
  altText?: string;
}

export default function HeroSection({
  title = "Connect Nepal with Fiber-Fast Internet & IPTV",
  subtitle = "Experience ultra-fast and reliable connectivity with FTTH Home Fiber, Corporate Fiber, and IPTV including Net TV and Sky TV, built for every lifestyle.",
  cta1Text = "New Connection",
  cta1Link = "/contact#new-connection",
  cta2Text = "View Packages",
  cta2Link = "/packages",
  backgroundImageUrl,
  mobileImageUrl,
  altText,
}: HeroSectionProps) {
  const hasImage = !!backgroundImageUrl;
  return (
    <section className="relative min-h-[560px] lg:min-h-[640px] overflow-hidden bg-[#071A3D]">
      {/* Background */}
      <div className="absolute inset-0">
        {hasImage ? (
          <>
            {/* Desktop image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={backgroundImageUrl}
              alt={altText || title}
              className={`absolute inset-0 w-full h-full object-cover ${mobileImageUrl ? "hidden sm:block" : ""}`}
            />
            {mobileImageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={mobileImageUrl}
                alt={altText || title}
                className="absolute inset-0 w-full h-full object-cover sm:hidden"
              />
            )}
            {/* Dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D]/80 via-[#071A3D]/60 to-[#071A3D]/30" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D]" />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(ellipse at 20% 50%, #2298D4 0%, transparent 60%),
                                  radial-gradient(ellipse at 80% 20%, #0B7F3A 0%, transparent 50%),
                                  radial-gradient(ellipse at 60% 80%, #25468F 0%, transparent 60%)`,
              }}
            />
            {/* Fiber lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice">
              <path d="M0,200 Q300,100 600,220 T1200,180" stroke="#2298D4" strokeWidth="2" fill="none" />
              <path d="M0,350 Q400,250 700,380 T1200,320" stroke="#0B7F3A" strokeWidth="1.5" fill="none" />
              <path d="M0,480 Q350,400 650,500 T1200,460" stroke="#2298D4" strokeWidth="1" fill="none" />
              <circle cx="600" cy="220" r="4" fill="#2298D4" className="opacity-60" />
              <circle cx="750" cy="380" r="3" fill="#0B7F3A" className="opacity-60" />
            </svg>
          </>
        )}
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0B7F3A] animate-pulse"></div>
              <span className="text-sm font-medium text-blue-100">Nepal&apos;s Fastest Fiber Network</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              {title.split("Fiber-Fast").length > 1 ? (
                <>
                  {title.split("Fiber-Fast")[0]}
                  <span className="text-[#2298D4]">Fiber-Fast</span>
                  {title.split("Fiber-Fast")[1]}
                </>
              ) : (
                title
              )}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={cta1Link}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B7F3A] hover:bg-[#065a28] text-white font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-900/30 hover:shadow-xl"
              >
                {cta1Text}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={cta2Link}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all duration-200"
              >
                {cta2Text}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Visual — hidden when a real banner image fills the background */}
          <div className={`items-center justify-center ${hasImage ? "hidden" : "hidden lg:flex"}`}>
            <div className="relative w-full max-w-md">
              {/* Glowing card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)" }}>
                {/* Nepal-inspired visual placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#25468F]/30 to-[#071A3D]/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    {/* Stupa/Pagoda silhouette */}
                    <div className="mx-auto mb-4" style={{ width: 120 }}>
                      <svg viewBox="0 0 120 160" className="w-full opacity-80">
                        {/* Simple stupa shape */}
                        <ellipse cx="60" cy="140" rx="50" ry="10" fill="#2298D4" opacity="0.3" />
                        <rect x="40" y="120" width="40" height="20" rx="4" fill="#25468F" opacity="0.6" />
                        <rect x="30" y="105" width="60" height="18" rx="4" fill="#25468F" opacity="0.5" />
                        <ellipse cx="60" cy="105" rx="35" ry="15" fill="#2298D4" opacity="0.3" />
                        <path d="M 60 20 L 80 100 L 40 100 Z" fill="#25468F" opacity="0.7" />
                        <path d="M 60 0 L 65 20 L 55 20 Z" fill="#2298D4" opacity="0.8" />
                        {/* Fiber light trails */}
                        <path d="M 0,130 Q 30,80 60,60 T 120,30" stroke="#2298D4" strokeWidth="1.5" fill="none" opacity="0.6" />
                        <path d="M 0,150 Q 40,120 70,90 T 120,60" stroke="#0B7F3A" strokeWidth="1" fill="none" opacity="0.6" />
                      </svg>
                    </div>
                    <div className="text-white/80 text-sm font-medium">Nepal&apos;s Trusted Fiber ISP</div>
                    <div className="text-[#2298D4] text-xs mt-1">Kathmandu • Lalitpur • Bhaktapur • Pokhara • Chitwan</div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#0B7F3A]">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Network Uptime</div>
                  <div className="text-sm font-bold text-gray-800">99.9%</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E3F2FD] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25468F]">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Happy Customers</div>
                  <div className="text-sm font-bold text-gray-800">10,000+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

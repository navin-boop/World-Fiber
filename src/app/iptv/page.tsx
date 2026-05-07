import Link from "next/link";
import {
  ArrowRight,
  Tv,
  Wifi,
  CheckCircle2,
  Play,
  Globe,
  Music,
  Newspaper,
  Trophy,
  Film,
  Baby,
  Heart,
  BookOpen,
  Zap,
  Package,
  Star,
} from "lucide-react";

export const metadata = {
  title: "IPTV — Net TV & Sky TV | World Fiber Net Pvt. Ltd.",
  description:
    "Enjoy premium IPTV with Net TV and Sky TV. Hundreds of live channels, sports, movies, on-demand content, and more — powered by World Fiber Net's fiber network.",
};

const entertainmentCategories = [
  { icon: Tv, label: "Live TV", count: "200+ Channels", color: "text-[#25468F]", bg: "bg-blue-50" },
  { icon: Trophy, label: "Sports", count: "30+ Sports Channels", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Film, label: "Movies", count: "1000+ VOD Titles", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Newspaper, label: "News", count: "50+ News Channels", color: "text-[#0B7F3A]", bg: "bg-green-50" },
  { icon: Baby, label: "Kids", count: "25+ Kids Channels", color: "text-pink-500", bg: "bg-pink-50" },
  { icon: Music, label: "Music", count: "40+ Music Channels", color: "text-[#2298D4]", bg: "bg-sky-50" },
  { icon: BookOpen, label: "Documentary", count: "20+ Doc Channels", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Heart, label: "Lifestyle", count: "15+ Lifestyle Channels", color: "text-rose-500", bg: "bg-rose-50" },
];

const iptvBenefits = [
  {
    icon: Globe,
    title: "Massive Channel Library",
    description:
      "Access 200–300+ live channels spanning news, sports, entertainment, kids, music, documentary, and international content — all in one place.",
    color: "text-[#25468F]",
    bg: "bg-blue-50",
  },
  {
    icon: Play,
    title: "Crystal-Clear HD & 4K",
    description:
      "Enjoy sharp, buffer-free viewing in HD and 4K quality, powered by our dedicated fiber network that delivers smooth streaming at all times.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Tv,
    title: "On-Demand Content",
    description:
      "Access a vast library of on-demand movies, TV shows, documentaries, and exclusive series. Watch what you want, when you want.",
    color: "text-[#0B7F3A]",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Seamless Integration",
    description:
      "Bundle IPTV with your fiber internet for a single bill, seamless setup, and priority support from our local team.",
    color: "text-[#2298D4]",
    bg: "bg-sky-50",
  },
];

const netTvFeatures = [
  "200+ Live Channels",
  "HD & SD Quality Options",
  "Nepali & Hindi Channels",
  "Sports & News Included",
  "Kids Entertainment Channels",
  "Regional Language Channels",
  "VOD Movie Library",
  "Electronic Programme Guide (EPG)",
  "Multi-device streaming",
  "Catch-up TV (7 days)",
];

const skyTvFeatures = [
  "300+ International Channels",
  "Premium Sports Packages",
  "Hollywood & Bollywood Movies",
  "International News Networks",
  "Music & Lifestyle Channels",
  "Documentary & Educational",
  "Dolby Digital Audio Support",
  "4K Ultra HD Channels",
  "Multi-room support",
  "Catch-up & Restart TV",
];

export default function IptvPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center"
        style={{ background: "linear-gradient(135deg, #071A3D 0%, #25468F 50%, #3a1a7a 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(ellipse at 10% 60%, #2298D4 0%, transparent 50%),
                                radial-gradient(ellipse at 90% 20%, #7c3aed 0%, transparent 50%),
                                radial-gradient(ellipse at 55% 90%, #0B7F3A 0%, transparent 45%)`,
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
            <circle cx="900" cy="150" r="200" stroke="#a78bfa" strokeWidth="1.5" fill="none" />
            <circle cx="300" cy="350" r="150" stroke="#2298D4" strokeWidth="1" fill="none" />
            <path d="M0,200 Q300,120 600,220 T1200,180" stroke="#7c3aed" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="container-custom relative z-10 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Tv size={14} className="text-purple-300" />
            <span className="text-sm font-medium text-purple-100">Premium IPTV Entertainment</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            IPTV with{" "}
            <span className="text-[#2298D4]">Net TV</span>{" "}
            &amp;{" "}
            <span className="text-purple-300">Sky TV</span>
          </h1>
          <p className="text-purple-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Experience next-level entertainment with 200–300+ live channels, on-demand movies, sports, news, and more — all powered by World Fiber Net's ultra-fast fiber network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#net-tv"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25468F] hover:bg-[#071A3D] text-white font-bold rounded-xl transition-all duration-200 shadow-lg"
            >
              Explore Net TV <ArrowRight size={18} />
            </a>
            <a
              href="#sky-tv"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all duration-200"
            >
              Explore Sky TV <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* IPTV Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-3">IPTV Options</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Choose Your IPTV Platform
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We offer two premium IPTV platforms as part of our service. Enjoy them separately or together with a combined package.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Net TV */}
            <div
              id="net-tv"
              className="relative bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-8 lg:p-10 text-white overflow-hidden scroll-mt-24"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2298D4]/10 rounded-full translate-y-10 -translate-x-10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">
                    📺
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold">Net TV</h3>
                    <p className="text-blue-200 text-sm">Nepal's #1 IPTV Platform</p>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Net TV is Nepal's most popular IPTV service, featuring a wide selection of Nepali, Hindi, English, and regional channels. Perfect for families who want comprehensive local and international entertainment.
                </p>
                <ul className="space-y-3 mb-8">
                  {netTvFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={15} className="text-[#4ade80] flex-shrink-0" />
                      <span className="text-blue-100">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
                >
                  Get Net TV <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Sky TV */}
            <div
              id="sky-tv"
              className="relative rounded-3xl p-8 lg:p-10 text-white overflow-hidden scroll-mt-24"
              style={{ background: "linear-gradient(135deg, #3a1a7a 0%, #1e0a4a 100%)" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/10 rounded-full translate-y-10 -translate-x-10 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">
                    🌐
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold">Sky TV</h3>
                    <p className="text-purple-200 text-sm">Premium International IPTV</p>
                  </div>
                </div>
                <p className="text-purple-100 leading-relaxed mb-6">
                  Sky TV brings you premium international content with an extensive channel lineup spanning sports, movies, documentaries, lifestyle, and exclusive programming from around the world.
                </p>
                <ul className="space-y-3 mb-8">
                  {skyTvFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={15} className="text-purple-300 flex-shrink-0" />
                      <span className="text-purple-100">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-all text-sm"
                >
                  Get Sky TV <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">Content Library</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Entertainment for Everyone
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From thrilling sports to children's shows — our IPTV platforms have content for every member of your family.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {entertainmentCategories.map((cat) => (
              <div
                key={cat.label}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 card-hover group"
              >
                <div className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon size={26} className={cat.color} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cat.label}</h3>
                <p className={`text-xs font-semibold ${cat.color}`}>{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IPTV */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">Benefits</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose World Fiber Net IPTV?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our IPTV service is built on our own fiber network — no buffering, no interruptions, just pure entertainment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {iptvBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover group text-center"
              >
                <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <benefit.icon size={26} className={benefit.color} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internet + IPTV Combo Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#071A3D] to-[#25468F] rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 bg-[#0B7F3A]/20 border border-[#0B7F3A]/30 text-green-300 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <Star size={12} className="fill-green-300" />
                  Best Value Bundle
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                  Internet + IPTV Combo
                </h2>
                <p className="text-blue-200 leading-relaxed mb-6 text-base">
                  Get the ultimate entertainment and connectivity package. Combine our blazing-fast fiber internet with Net TV or Sky TV IPTV and save up to 30% compared to buying them separately.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "High-speed fiber internet included",
                    "Net TV or Sky TV IPTV included",
                    "Save up to 30% vs. separate plans",
                    "Single monthly bill — hassle free",
                    "Priority bundled customer support",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={15} className="text-[#4ade80] flex-shrink-0" />
                      <span className="text-blue-100">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/packages"
                    className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all"
                  >
                    <Package size={16} />
                    View Combo Packages
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
                  >
                    Contact Us <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="p-10 lg:p-14 bg-white/5 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-6">What&apos;s Included</h3>
                <div className="space-y-4">
                  {[
                    { icon: Wifi, label: "Fiber Internet", detail: "25 Mbps to 1 Gbps plans" },
                    { icon: Tv, label: "Net TV / Sky TV", detail: "200–300+ live channels" },
                    { icon: Film, label: "On-Demand Content", detail: "1000+ movies & series" },
                    { icon: Trophy, label: "Live Sports", detail: "30+ sports channels" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-[#2298D4]" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">{item.label}</p>
                        <p className="text-blue-300 text-xs">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding-sm" style={{ background: "linear-gradient(135deg, #3a1a7a 0%, #25468F 50%, #071A3D 100%)" }}>
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Tv size={14} className="text-purple-300" />
            <span className="text-sm text-purple-100 font-medium">Upgrade Your Entertainment</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Upgrade Your TV Experience Today
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of happy customers enjoying premium IPTV on Nepal's fastest fiber network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-all shadow-lg text-base"
            >
              Get IPTV Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all text-base"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

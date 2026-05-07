import Link from "next/link";
import {
  ArrowRight,
  Wifi,
  Tv,
  Building2,
  Home,
  Wrench,
  CheckCircle2,
  Phone,
  Zap,
  Star,
  Package,
} from "lucide-react";

export const metadata = {
  title: "Our Services | World Fiber Net Pvt. Ltd.",
  description:
    "Explore World Fiber Net's full range of services: FTTH Home Fiber, Corporate Fiber, IPTV (Net TV & Sky TV), Internet+IPTV Combo, and Local Installation & Support.",
};

const services = [
  {
    id: "ftth-home-fiber",
    icon: Home,
    title: "FTTH Home Fiber",
    badge: "Most Popular",
    badgeColor: "bg-[#25468F] text-white",
    iconBg: "bg-blue-50",
    iconColor: "text-[#25468F]",
    accentColor: "border-[#25468F]",
    description:
      "Experience the internet like never before with our Fiber-to-the-Home (FTTH) technology. Pure fiber optic cables run directly to your home, delivering symmetric upload and download speeds with ultra-low latency.",
    features: [
      "Speeds from 25 Mbps up to 1 Gbps",
      "Symmetrical upload & download speeds",
      "No throttling, no data caps",
      "99.9% uptime guarantee",
      "Low latency — perfect for gaming & video calls",
      "Free router installation",
      "24/7 customer support",
      "Flexible monthly & annual plans",
    ],
    cta: "Get Home Fiber",
    ctaLink: "/contact",
  },
  {
    id: "corporate-fiber",
    icon: Building2,
    title: "Corporate Fiber",
    badge: "For Business",
    badgeColor: "bg-[#071A3D] text-white",
    iconBg: "bg-slate-50",
    iconColor: "text-[#071A3D]",
    accentColor: "border-[#071A3D]",
    description:
      "Power your business with a dedicated fiber connection designed for enterprise demands. From small offices to large corporations, our corporate solutions deliver unmatched performance with SLA-backed guarantees.",
    features: [
      "Dedicated bandwidth — not shared",
      "Symmetrical speeds up to 10 Gbps",
      "SLA-backed 99.9% uptime",
      "Static IP addresses available",
      "Priority 24/7 technical support",
      "Managed network options",
      "Multiple WAN failover",
      "Custom enterprise packages",
    ],
    cta: "Enquire for Business",
    ctaLink: "/contact",
  },
  {
    id: "iptv",
    icon: Tv,
    title: "IPTV",
    badge: "Entertainment",
    badgeColor: "bg-purple-600 text-white",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    accentColor: "border-purple-500",
    description:
      "Transform your TV experience with our premium IPTV service. Choose from Nepal's leading IPTV platforms — Net TV and Sky TV — packed with hundreds of live channels, on-demand content, sports, movies, and more.",
    subOptions: [
      {
        id: "net-tv",
        title: "Net TV",
        icon: "📺",
        description:
          "Nepal's most popular IPTV platform featuring 200+ live channels including news, entertainment, sports, kids, and regional channels.",
        highlights: ["200+ Live Channels", "HD & 4K Quality", "VOD Library", "Multi-device support"],
      },
      {
        id: "sky-tv",
        title: "Sky TV",
        icon: "🌐",
        description:
          "Premium satellite-grade IPTV with an extensive international channel lineup, sports packages, and exclusive content.",
        highlights: ["300+ International Channels", "Premium Sports Packages", "Catch-up TV", "Dolby Audio Support"],
      },
    ],
    features: [
      "Choose Net TV or Sky TV (or both)",
      "HD & 4K streaming quality",
      "200–300+ live channels",
      "On-demand movies & shows",
      "Sports, News, Kids, Music channels",
      "Multi-room support available",
      "EPG (Electronic Programme Guide)",
      "Pause, rewind & record live TV",
    ],
    cta: "Explore IPTV",
    ctaLink: "/iptv",
  },
  {
    id: "iptv-combo",
    icon: Package,
    title: "Internet + IPTV Combo",
    badge: "Best Value",
    badgeColor: "bg-[#0B7F3A] text-white",
    iconBg: "bg-green-50",
    iconColor: "text-[#0B7F3A]",
    accentColor: "border-[#0B7F3A]",
    description:
      "Get the best of both worlds with our combined Internet + IPTV package. Enjoy blazing-fast fiber internet and premium IPTV entertainment in one convenient, cost-saving bundle.",
    features: [
      "Save up to 30% vs. separate plans",
      "High-speed fiber internet included",
      "Net TV or Sky TV IPTV included",
      "Single monthly bill",
      "Easy setup and activation",
      "Priority bundled support",
      "Flexible speed & channel tiers",
      "Upgrade or downgrade anytime",
    ],
    cta: "Get Combo Package",
    ctaLink: "/packages",
  },
  {
    id: "installation-support",
    icon: Wrench,
    title: "Local Installation & Support",
    badge: "24/7 Service",
    badgeColor: "bg-[#2298D4] text-white",
    iconBg: "bg-sky-50",
    iconColor: "text-[#2298D4]",
    accentColor: "border-[#2298D4]",
    description:
      "Our local technicians handle everything from initial site survey and fiber installation to ongoing maintenance and rapid issue resolution. We're in your neighborhood — and we'll be there when you need us.",
    features: [
      "Free professional installation",
      "Site survey before installation",
      "Router & equipment setup",
      "WiFi optimization included",
      "24/7 phone & WhatsApp support",
      "Same-day or next-day response",
      "Annual network maintenance",
      "Firmware & security updates",
    ],
    cta: "Book Installation",
    ctaLink: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[380px] lg:min-h-[440px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse at 20% 50%, #2298D4 0%, transparent 55%),
                                radial-gradient(ellipse at 80% 20%, #0B7F3A 0%, transparent 50%)`,
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 440" preserveAspectRatio="xMidYMid slice">
            <path d="M0,130 Q300,60 600,150 T1200,120" stroke="#2298D4" strokeWidth="2" fill="none" />
            <path d="M0,260 Q400,180 700,280 T1200,240" stroke="#0B7F3A" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="container-custom relative z-10 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Zap size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">Complete Connectivity Solutions</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Our <span className="text-[#2298D4]">Services</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            From ultra-fast home fiber to enterprise solutions and premium IPTV entertainment — World Fiber Net has everything you need to stay connected.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((service, idx) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding scroll-mt-24 ${idx % 2 === 1 ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-14 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center`}>
                      <service.icon size={26} className={service.iconColor} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>

                  {/* IPTV Sub-options */}
                  {service.subOptions && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {service.subOptions.map((opt) => (
                        <div
                          key={opt.id}
                          id={opt.id}
                          className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm scroll-mt-24"
                        >
                          <div className="text-2xl mb-2">{opt.icon}</div>
                          <h4 className="font-bold text-gray-900 mb-2">{opt.title}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed mb-3">{opt.description}</p>
                          <ul className="space-y-1.5">
                            {opt.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                                <CheckCircle2 size={13} className="text-[#0B7F3A] flex-shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={service.ctaLink}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25468F] hover:bg-[#071A3D] text-white font-bold rounded-xl transition-all duration-200"
                    >
                      {service.cta} <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/packages"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all duration-200"
                    >
                      View Packages
                    </Link>
                  </div>
                </div>

                {/* Features Card */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`bg-white border-2 ${service.accentColor} border-opacity-30 rounded-3xl p-8 shadow-sm`}>
                    <div className="flex items-center gap-2 mb-6">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-gray-700">Key Features</span>
                    </div>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#0B7F3A] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                          <Phone size={18} className="text-[#0B7F3A]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Need help choosing?</p>
                          <p className="text-sm font-bold text-gray-900">Call us: +977-1-XXXXXXX</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Banner */}
      <section className="section-padding-sm bg-gradient-to-r from-[#25468F] to-[#071A3D]">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Not Sure Which Plan Is Right for You?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Our team is happy to help you find the perfect service for your needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg text-base"
            >
              Talk to Us <ArrowRight size={18} />
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

import Link from "next/link";
import {
  ArrowRight,
  Wifi,
  Tv,
  Shield,
  Headphones,
  Zap,
  Users,
  MapPin,
  TrendingUp,
  Award,
  Heart,
  Globe,
  CheckCircle2,
  Star,
  Building2,
  Home,
} from "lucide-react";

export const metadata = {
  title: "About Us | World Fiber Net Pvt. Ltd.",
  description:
    "Learn about World Fiber Net Pvt. Ltd. — Nepal's trusted FTTH fiber internet and IPTV provider. Our mission, vision, team, and coverage across Nepal.",
};

const stats = [
  { value: "10,000+", label: "Happy Customers", icon: Users, color: "text-[#25468F]", bg: "bg-blue-50" },
  { value: "5+", label: "Districts Covered", icon: MapPin, color: "text-[#0B7F3A]", bg: "bg-green-50" },
  { value: "99.9%", label: "Network Uptime", icon: TrendingUp, color: "text-[#2298D4]", bg: "bg-sky-50" },
  { value: "24/7", label: "Customer Support", icon: Headphones, color: "text-purple-600", bg: "bg-purple-50" },
];

const whyChooseUs = [
  {
    icon: Zap,
    title: "Blazing Fast Speeds",
    description:
      "Pure FTTH fiber optic connectivity delivering symmetrical upload and download speeds with zero throttling.",
    color: "text-[#2298D4]",
    bg: "bg-sky-50",
  },
  {
    icon: Shield,
    title: "Rock-Solid Reliability",
    description:
      "Our redundant network infrastructure ensures 99.9% uptime so you stay connected when it matters most.",
    color: "text-[#0B7F3A]",
    bg: "bg-green-50",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Real humans, 24/7. Our local support team is always ready to resolve issues quickly via phone, WhatsApp, or Viber.",
    color: "text-[#25468F]",
    bg: "bg-blue-50",
  },
  {
    icon: Tv,
    title: "IPTV Entertainment",
    description:
      "Bundled IPTV services with Net TV and Sky TV — hundreds of live channels, on-demand content, and sports.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Affordable Plans",
    description:
      "Transparent pricing with no hidden fees. Flexible plans for homes, businesses, and everyone in between.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Globe,
    title: "Expanding Coverage",
    description:
      "Rapidly expanding across Nepal's key districts, bringing premium fiber connectivity to more communities.",
    color: "text-[#0B7F3A]",
    bg: "bg-emerald-50",
  },
];

const services = [
  { icon: Home, title: "FTTH Home Fiber", desc: "Ultra-fast fiber internet for residential users" },
  { icon: Building2, title: "Corporate Fiber", desc: "Dedicated bandwidth solutions for businesses" },
  { icon: Tv, title: "IPTV – Net TV", desc: "Nepal's leading IPTV platform with 200+ channels" },
  { icon: Tv, title: "IPTV – Sky TV", desc: "Premium satellite-grade IPTV entertainment" },
  { icon: Wifi, title: "Internet + IPTV Combo", desc: "Best value bundle combining fiber and IPTV" },
  { icon: Headphones, title: "Installation & Support", desc: "Professional setup and 24/7 technical assistance" },
];

const districts = ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan"];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative min-h-[420px] lg:min-h-[500px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse at 15% 50%, #2298D4 0%, transparent 55%),
                                radial-gradient(ellipse at 85% 20%, #0B7F3A 0%, transparent 50%),
                                radial-gradient(ellipse at 60% 85%, #25468F 0%, transparent 60%)`,
            }}
          />
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            viewBox="0 0 1200 500"
            preserveAspectRatio="xMidYMid slice"
          >
            <path d="M0,150 Q300,80 600,170 T1200,140" stroke="#2298D4" strokeWidth="2" fill="none" />
            <path d="M0,280 Q400,200 700,300 T1200,260" stroke="#0B7F3A" strokeWidth="1.5" fill="none" />
            <path d="M0,400 Q350,320 650,420 T1200,380" stroke="#2298D4" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="container-custom relative z-10 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#0B7F3A] animate-pulse"></div>
            <span className="text-sm font-medium text-blue-100">Nepal&apos;s Trusted Fiber ISP</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            About{" "}
            <span className="text-[#2298D4]">World Fiber Net</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Connecting Nepal with premium FTTH fiber internet and IPTV services — empowering homes, businesses, and communities across the nation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B7F3A] hover:bg-[#065a28] text-white font-bold rounded-xl transition-all duration-200 shadow-lg"
            >
              Get Connected <ArrowRight size={18} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all duration-200"
            >
              View Packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Building Nepal&apos;s Digital Future, One Fiber at a Time
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                World Fiber Net Pvt. Ltd. is a Nepal-based telecommunications company dedicated to delivering ultra-fast FTTH (Fiber to the Home) internet and premium IPTV services. Founded with the vision of a fully connected Nepal, we have grown to serve over 10,000 customers across 5+ districts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that fast, reliable internet is not a luxury — it is a necessity. Our fiber optic infrastructure eliminates the limitations of traditional copper-based networks, providing symmetric speeds and rock-solid stability for streaming, gaming, remote work, and enterprise applications.
              </p>
              <div className="flex flex-wrap gap-3">
                {["FTTH Fiber Internet", "Net TV IPTV", "Sky TV IPTV", "Corporate Solutions", "24/7 Support"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-[#25468F] text-sm font-semibold px-4 py-2 rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow card-hover"
                >
                  <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon size={22} className={stat.color} />
                  </div>
                  <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">Our Purpose</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Mission &amp; Vision</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-8 lg:p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#2298D4]/10 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={28} className="text-[#2298D4]" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed text-base">
                  To provide every household and business in Nepal with access to reliable, affordable, and high-performance fiber internet and IPTV services — bridging the digital divide and enabling a prosperous, connected society.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Deliver unmatched internet speeds",
                    "Ensure 99.9% service reliability",
                    "Provide responsive local support",
                    "Expand coverage to underserved areas",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-blue-100">
                      <CheckCircle2 size={16} className="text-[#4ade80] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-[#0B7F3A] to-[#065a28] rounded-3xl p-8 lg:p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Star size={28} className="text-yellow-300" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Our Vision</h3>
                <p className="text-green-100 leading-relaxed text-base">
                  To become Nepal&apos;s most trusted and preferred fiber internet and IPTV provider — recognized for service excellence, innovation, and our commitment to empowering communities through technology.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Lead Nepal's digital transformation",
                    "Reach all 77 districts of Nepal",
                    "Innovate with next-gen technologies",
                    "Build a digitally empowered nation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-green-100">
                      <CheckCircle2 size={16} className="text-yellow-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose World Fiber Net */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose World Fiber Net?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We go beyond just delivering internet — we deliver an experience that keeps you ahead in a connected world.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover group"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon size={22} className={item.color} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="section-padding-sm bg-gradient-to-r from-[#25468F] to-[#071A3D]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">Our Reach Across Nepal</h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              Serving thousands of customers across multiple districts with rapid expansion underway.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {districts.map((d) => (
              <span
                key={d}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-5 py-2.5 rounded-full text-sm"
              >
                <MapPin size={14} className="text-[#2298D4]" />
                {d}
              </span>
            ))}
            <span className="flex items-center gap-2 bg-[#0B7F3A]/30 border border-[#0B7F3A]/40 text-green-300 font-medium px-5 py-2.5 rounded-full text-sm">
              + More Coming Soon
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svc.icon size={20} className="text-[#25468F]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{svc.title}</h3>
                  <p className="text-gray-500 text-sm">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">Community</p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                More Than an ISP — We&apos;re a Community
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                At World Fiber Net, we believe in building lasting relationships with our customers and the communities we serve. Our local teams live and work in the same neighborhoods, giving us a deep understanding of what our customers truly need.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                From quick installations to prompt issue resolution, our on-the-ground presence means faster response times and a genuinely personal service experience that national ISPs simply cannot match.
              </p>
              <div className="space-y-3">
                {[
                  "Local technicians in every service area",
                  "Community-first customer service approach",
                  "Transparent billing with no hidden charges",
                  "Regular network upgrades and maintenance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#0B7F3A] flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#071A3D] to-[#25468F] rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { label: "Years in Service", value: "5+" },
                  { label: "ISP License", value: "NTA" },
                  { label: "Response Time", value: "<2 hrs" },
                  { label: "Customer Rating", value: "4.8★" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-extrabold text-[#2298D4] mb-1">{item.value}</div>
                    <div className="text-blue-200 text-xs font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-blue-200 text-sm mb-4">
                  Licensed by Nepal Telecommunications Authority (NTA) and committed to delivering world-class service.
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-[#2298D4] bg-white/10 px-4 py-2 rounded-full">
                  <Shield size={14} />
                  NTA Licensed ISP — Nepal
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-gradient-to-br from-[#0B7F3A] to-[#065a28]">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Ready to Get Connected?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Apply for a new fiber connection today and experience the difference of true FTTH internet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0B7F3A] font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg text-base"
            >
              Apply for New Connection <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all text-base"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

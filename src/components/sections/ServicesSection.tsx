import Link from "next/link";
import { ArrowRight, Home, Building2, Tv, Wifi, Headphones } from "lucide-react";

const services = [
  {
    icon: Home,
    name: "FTTH Home Fiber",
    description: "Super-fast and stable fiber internet for seamless browsing, streaming & gaming.",
    href: "/services#ftth-home-fiber",
    cta: "Learn More",
    badge: null,
    color: "#25468F",
    bg: "#EFF6FF",
  },
  {
    icon: Building2,
    name: "Corporate Fiber",
    description: "Dedicated, reliable internet for businesses with unmatched performance.",
    href: "/services#corporate-fiber",
    cta: "Learn More",
    badge: null,
    color: "#25468F",
    bg: "#EFF6FF",
  },
  {
    icon: Tv,
    name: "IPTV",
    description: "Enjoy a wide range of live TV channels and on-demand content in crystal clear quality.",
    href: "/iptv",
    cta: "Explore IPTV",
    badge: "Includes Net TV & Sky TV",
    color: "#0B7F3A",
    bg: "#F0FDF4",
  },
  {
    icon: Wifi,
    name: "Internet + IPTV Combo",
    description: "The perfect combo of high-speed internet and IPTV for unbeatable value.",
    href: "/packages#iptv-combo",
    cta: "View Combo Plans",
    badge: null,
    color: "#2298D4",
    bg: "#F0F9FF",
  },
  {
    icon: Headphones,
    name: "Local Installation & Support",
    description: "Quick installation by our local team with 24/7 support you can trust.",
    href: "/services#installation-support",
    cta: "Learn More",
    badge: null,
    color: "#25468F",
    bg: "#EFF6FF",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#171717] mb-4">
            Everything You Need for Home, Business & Entertainment
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From blazing-fast fiber internet to crystal-clear IPTV — all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 flex flex-col group"
                style={{ backgroundColor: service.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={24} style={{ color: service.color }} />
                </div>
                <h3 className="font-bold text-base text-gray-800 mb-2">{service.name}</h3>
                {service.badge && (
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 w-fit"
                    style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  >
                    {service.badge}
                  </span>
                )}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
                  style={{ color: service.color }}
                >
                  {service.cta}
                  <ArrowRight size={15} className="transition-all" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

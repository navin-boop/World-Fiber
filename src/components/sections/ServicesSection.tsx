import Link from "next/link";
import { ArrowRight, Home, Building2, Tv, Wifi, Headphones } from "lucide-react";

const services = [
  {
    icon: Home,
    name: { en: "FTTH Home Fiber", ne: "FTTH होम फाइबर" },
    description: {
      en: "Super-fast and stable fiber internet for seamless browsing, streaming & gaming.",
      ne: "निरन्तर ब्राउजिङ, स्ट्रिमिङ र गेमिङका लागि सुपर-फास्ट र स्थिर फाइबर इन्टरनेट।",
    },
    href: "/services#ftth-home-fiber",
    cta: { en: "Learn More", ne: "थप जान्नुहोस्" },
    badge: null,
    color: "#25468F",
    bg: "#EFF6FF",
  },
  {
    icon: Building2,
    name: { en: "Corporate Fiber", ne: "कर्पोरेट फाइबर" },
    description: {
      en: "Dedicated, reliable internet for businesses with unmatched performance.",
      ne: "अद्वितीय प्रदर्शनका साथ व्यवसायहरूका लागि समर्पित, विश्वसनीय इन्टरनेट।",
    },
    href: "/services#corporate-fiber",
    cta: { en: "Learn More", ne: "थप जान्नुहोस्" },
    badge: null,
    color: "#25468F",
    bg: "#EFF6FF",
  },
  {
    icon: Tv,
    name: { en: "IPTV", ne: "IPTV" },
    description: {
      en: "Enjoy a wide range of live TV channels and on-demand content in crystal clear quality.",
      ne: "क्रिस्टल स्पष्ट गुणस्तरमा लाइभ टिभी च्यानलहरू र अन-डिमान्ड सामग्री आनन्द लिनुहोस्।",
    },
    href: "/iptv",
    cta: { en: "Explore IPTV", ne: "IPTV हेर्नुहोस्" },
    badge: { en: "Includes Net TV & Sky TV", ne: "नेट टिभी र स्काई टिभी समावेश" },
    color: "#0B7F3A",
    bg: "#F0FDF4",
  },
  {
    icon: Wifi,
    name: { en: "Internet + IPTV Combo", ne: "इन्टरनेट + IPTV कम्बो" },
    description: {
      en: "The perfect combo of high-speed internet and IPTV for unbeatable value.",
      ne: "अपराजित मूल्यमा उच्च गति इन्टरनेट र IPTV को उत्तम कम्बो।",
    },
    href: "/packages#iptv-combo",
    cta: { en: "View Combo Plans", ne: "कम्बो प्लान हेर्नुहोस्" },
    badge: null,
    color: "#2298D4",
    bg: "#F0F9FF",
  },
  {
    icon: Headphones,
    name: { en: "Local Installation & Support", ne: "स्थानीय स्थापना र सहायता" },
    description: {
      en: "Quick installation by our local team with 24/7 support you can trust.",
      ne: "विश्वास गर्न सकिने २४/७ सहायतासहित हाम्रो स्थानीय टोलीद्वारा द्रुत स्थापना।",
    },
    href: "/services#installation-support",
    cta: { en: "Learn More", ne: "थप जान्नुहोस्" },
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
            <span className="lang-en">Everything You Need for Home, Business &amp; Entertainment</span>
            <span className="lang-ne">घर, व्यवसाय र मनोरञ्जनका लागि सबै कुरा</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            <span className="lang-en">From blazing-fast fiber internet to crystal-clear IPTV — all in one place.</span>
            <span className="lang-ne">अत्यन्त तीव्र फाइबर इन्टरनेटदेखि स्पष्ट IPTV सम्म — सबै एकै ठाउँमा।</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name.en}
                className="rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-200 flex flex-col group"
                style={{ backgroundColor: service.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={24} style={{ color: service.color }} />
                </div>
                <h3 className="font-bold text-base text-gray-800 mb-2">
                  <span className="lang-en">{service.name.en}</span>
                  <span className="lang-ne">{service.name.ne}</span>
                </h3>
                {service.badge && (
                  <span
                    className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 w-fit"
                    style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  >
                    <span className="lang-en">{service.badge.en}</span>
                    <span className="lang-ne">{service.badge.ne}</span>
                  </span>
                )}
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  <span className="lang-en">{service.description.en}</span>
                  <span className="lang-ne">{service.description.ne}</span>
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
                  style={{ color: service.color }}
                >
                  <span className="lang-en">{service.cta.en}</span>
                  <span className="lang-ne">{service.cta.ne}</span>
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

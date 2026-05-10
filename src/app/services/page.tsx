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

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_services_title || "Our Services | World Fiber Net Pvt. Ltd.",
    description: s.seo_services_desc || "Explore World Fiber Net's full range of services: FTTH Home Fiber, Corporate Fiber, IPTV (Net TV & Sky TV), Internet+IPTV Combo, and Local Installation & Support.",
  };
}

const services = [
  {
    id: "ftth-home-fiber",
    icon: Home,
    titleEn: "FTTH Home Fiber",
    titleNe: "FTTH होम फाइबर",
    badgeEn: "Most Popular",
    badgeNe: "सर्वाधिक लोकप्रिय",
    badgeColor: "bg-[#25468F] text-white",
    iconBg: "bg-blue-50",
    iconColor: "text-[#25468F]",
    accentColor: "border-[#25468F]",
    descEn: "Experience the internet like never before with our Fiber-to-the-Home (FTTH) technology. Pure fiber optic cables run directly to your home, delivering symmetric upload and download speeds with ultra-low latency.",
    descNe: "हाम्रो Fiber-to-the-Home (FTTH) प्रविधिले इन्टरनेट अनुभव बिल्कुल नयाँ बनाउँछ। शुद्ध फाइबर अप्टिक केबलहरू सिधै तपाईंको घरसम्म आउँछन्, सममित गति र अति-न्यून विलम्बता प्रदान गर्छन्।",
    features: [
      { en: "Speeds from 25 Mbps up to 1 Gbps", ne: "२५ Mbps देखि १ Gbps सम्मको गति" },
      { en: "Symmetrical upload & download speeds", ne: "सममित अपलोड र डाउनलोड गति" },
      { en: "No throttling, no data caps", ne: "कुनै थ्रोटलिङ छैन, कुनै डेटा क्याप छैन" },
      { en: "99.9% uptime guarantee", ne: "९९.९% अपटाइम ग्यारेन्टी" },
      { en: "Low latency — perfect for gaming & video calls", ne: "न्यून विलम्बता — गेमिङ र भिडियो कलका लागि उत्तम" },
      { en: "Free router installation", ne: "निःशुल्क राउटर स्थापना" },
      { en: "24/7 customer support", ne: "२४/७ ग्राहक सहायता" },
      { en: "Flexible monthly & annual plans", ne: "लचिलो मासिक र वार्षिक योजनाहरू" },
    ],
    ctaEn: "Get Home Fiber",
    ctaNe: "होम फाइबर लिनुहोस्",
    ctaLink: "/contact",
  },
  {
    id: "corporate-fiber",
    icon: Building2,
    titleEn: "Corporate Fiber",
    titleNe: "कर्पोरेट फाइबर",
    badgeEn: "For Business",
    badgeNe: "व्यवसायका लागि",
    badgeColor: "bg-[#071A3D] text-white",
    iconBg: "bg-slate-50",
    iconColor: "text-[#071A3D]",
    accentColor: "border-[#071A3D]",
    descEn: "Power your business with a dedicated fiber connection designed for enterprise demands. From small offices to large corporations, our corporate solutions deliver unmatched performance with SLA-backed guarantees.",
    descNe: "एन्टरप्राइज आवश्यकताका लागि डिजाइन गरिएको समर्पित फाइबर जडानले तपाईंको व्यवसायलाई शक्ति दिनुहोस्। सानो कार्यालयदेखि ठूला निगमहरूसम्म, हाम्रो कर्पोरेट समाधानहरूले SLA-समर्थित ग्यारेन्टीसहित अतुलनीय प्रदर्शन दिन्छ।",
    features: [
      { en: "Dedicated bandwidth — not shared", ne: "समर्पित ब्यान्डविथ — साझा गरिएको होइन" },
      { en: "Symmetrical speeds up to 10 Gbps", ne: "१० Gbps सम्मको सममित गति" },
      { en: "SLA-backed 99.9% uptime", ne: "SLA-समर्थित ९९.९% अपटाइम" },
      { en: "Static IP addresses available", ne: "स्ट्याटिक IP ठेगाना उपलब्ध" },
      { en: "Priority 24/7 technical support", ne: "प्राथमिकता २४/७ प्राविधिक सहायता" },
      { en: "Managed network options", ne: "व्यवस्थित नेटवर्क विकल्पहरू" },
      { en: "Multiple WAN failover", ne: "बहु WAN फेलओभर" },
      { en: "Custom enterprise packages", ne: "अनुकूलित एन्टरप्राइज प्याकेजहरू" },
    ],
    ctaEn: "Enquire for Business",
    ctaNe: "व्यवसायका लागि सोध्नुहोस्",
    ctaLink: "/contact",
  },
  {
    id: "iptv",
    icon: Tv,
    titleEn: "IPTV",
    titleNe: "IPTV",
    badgeEn: "Entertainment",
    badgeNe: "मनोरञ्जन",
    badgeColor: "bg-purple-600 text-white",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    accentColor: "border-purple-500",
    descEn: "Transform your TV experience with our premium IPTV service. Choose from Nepal's leading IPTV platforms — Net TV and Sky TV — packed with hundreds of live channels, on-demand content, sports, movies, and more.",
    descNe: "हाम्रो प्रिमियम IPTV सेवाले तपाईंको TV अनुभव परिवर्तन गर्नुहोस्। नेपालका अग्रणी IPTV प्लेटफर्महरू — Net TV र Sky TV — मध्ये छान्नुहोस्।",
    subOptions: [
      {
        id: "net-tv",
        titleEn: "Net TV",
        icon: "📺",
        descEn: "Nepal's most popular IPTV platform featuring 200+ live channels including news, entertainment, sports, kids, and regional channels.",
        highlights: ["200+ Live Channels", "HD & 4K Quality", "VOD Library", "Multi-device support"],
      },
      {
        id: "sky-tv",
        titleEn: "Sky TV",
        icon: "🌐",
        descEn: "Premium satellite-grade IPTV with an extensive international channel lineup, sports packages, and exclusive content.",
        highlights: ["300+ International Channels", "Premium Sports Packages", "Catch-up TV", "Dolby Audio Support"],
      },
    ],
    features: [
      { en: "Choose Net TV or Sky TV (or both)", ne: "Net TV वा Sky TV छान्नुहोस् (वा दुवै)" },
      { en: "HD & 4K streaming quality", ne: "HD र 4K स्ट्रिमिङ गुणस्तर" },
      { en: "200–300+ live channels", ne: "२°°–३°° भन्दा बढ़ी लाइभ च्यानलहरू" },
      { en: "On-demand movies & shows", ne: "अन-डिमान्ड चलचित्र र शोहरू" },
      { en: "Sports, News, Kids, Music channels", ne: "खेलकुद, समाचार, बालबालिका, सङ्गीत च्यानलहरू" },
      { en: "Multi-room support available", ne: "बहु-कोठा समर्थन उपलब्ध" },
      { en: "EPG (Electronic Programme Guide)", ne: "EPG (इलेक्ट्रोनिक कार्यक्रम गाइड)" },
      { en: "Pause, rewind & record live TV", ne: "लाइभ TV रोक्नु, पछि जानु र रेकर्ड गर्नु" },
    ],
    ctaEn: "Explore IPTV",
    ctaNe: "IPTV हेर्नुहोस्",
    ctaLink: "/iptv",
  },
  {
    id: "iptv-combo",
    icon: Package,
    titleEn: "Internet + IPTV Combo",
    titleNe: "इन्टरनेट + IPTV कम्बो",
    badgeEn: "Best Value",
    badgeNe: "उत्तम मूल्य",
    badgeColor: "bg-[#0B7F3A] text-white",
    iconBg: "bg-green-50",
    iconColor: "text-[#0B7F3A]",
    accentColor: "border-[#0B7F3A]",
    descEn: "Get the best of both worlds with our combined Internet + IPTV package. Enjoy blazing-fast fiber internet and premium IPTV entertainment in one convenient, cost-saving bundle.",
    descNe: "हाम्रो संयुक्त इन्टरनेट + IPTV प्याकेजले दुवैको सुविधा पाउनुहोस्। एउटै किफायती बन्डलमा अति द्रुत फाइबर इन्टरनेट र प्रिमियम IPTV मनोरञ्जन उभोग गर्नुहोस्।",
    features: [
      { en: "Save up to 30% vs. separate plans", ne: "अलग-अलग योजनाभन्दा ३०% सम्म बचत गर्नुहोस्" },
      { en: "High-speed fiber internet included", ne: "उच्च-गति फाइबर इन्टरनेट समावेश" },
      { en: "Net TV or Sky TV IPTV included", ne: "Net TV वा Sky TV IPTV समावेश" },
      { en: "Single monthly bill", ne: "एकल मासिक बिल" },
      { en: "Easy setup and activation", ne: "सजिलो सेटअप र सक्रियता" },
      { en: "Priority bundled support", ne: "प्राथमिकता बन्डल सहायता" },
      { en: "Flexible speed & channel tiers", ne: "लचिलो गति र च्यानल स्तरहरू" },
      { en: "Upgrade or downgrade anytime", ne: "जुनसुकै बेला अपग्रेड वा डाउनग्रेड गर्नुहोस्" },
    ],
    ctaEn: "Get Combo Package",
    ctaNe: "कम्बो प्याकेज लिनुहोस्",
    ctaLink: "/packages",
  },
  {
    id: "installation-support",
    icon: Wrench,
    titleEn: "Local Installation & Support",
    titleNe: "स्थानीय स्थापना र सहायता",
    badgeEn: "24/7 Service",
    badgeNe: "२४/७ सेवा",
    badgeColor: "bg-[#2298D4] text-white",
    iconBg: "bg-sky-50",
    iconColor: "text-[#2298D4]",
    accentColor: "border-[#2298D4]",
    descEn: "Our local technicians handle everything from initial site survey and fiber installation to ongoing maintenance and rapid issue resolution. We're in your neighborhood — and we'll be there when you need us.",
    descNe: "हाम्रा स्थानीय प्राविधिकहरूले प्रारम्भिक साइट सर्वेक्षण र फाइबर स्थापनादेखि चलिरहेको मर्मत र द्रुत समस्या समाधानसम्म सबै कुरा सम्हाल्छन्।",
    features: [
      { en: "Free professional installation", ne: "निःशुल्क पेशेवर स्थापना" },
      { en: "Site survey before installation", ne: "स्थापना अघि साइट सर्वेक्षण" },
      { en: "Router & equipment setup", ne: "राउटर र उपकरण सेटअप" },
      { en: "WiFi optimization included", ne: "WiFi अप्टिमाइजेसन समावेश" },
      { en: "24/7 phone & WhatsApp support", ne: "२४/७ फोन र WhatsApp सहायता" },
      { en: "Same-day or next-day response", ne: "उही दिन वा अर्को दिनको प्रतिक्रिया" },
      { en: "Annual network maintenance", ne: "वार्षिक नेटवर्क मर्मत" },
      { en: "Firmware & security updates", ne: "फर्मवेयर र सुरक्षा अपडेटहरू" },
    ],
    ctaEn: "Book Installation",
    ctaNe: "स्थापना बुक गर्नुहोस्",
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
        <div className="container-custom relative z-10 py-20 text-center text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 hero-badge">
            <Zap size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">
              <span className="lang-en">Complete Connectivity Solutions</span>
              <span className="lang-ne">सम्पूर्ण कनेक्टिभिटी समाधानहरू</span>
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            <span className="lang-en">Our <span className="text-[#2298D4]">Services</span></span>
            <span className="lang-ne">हाम्रा <span className="text-[#2298D4]">सेवाहरू</span></span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up anim-delay-1">
            <span className="lang-en">From ultra-fast home fiber to enterprise solutions and premium IPTV entertainment — World Fiber Net has everything you need to stay connected.</span>
            <span className="lang-ne">अति द्रुत होम फाइबरदेखि एन्टरप्राइज समाधान र प्रिमियम IPTV मनोरञ्जनसम्म — वर्ल्ड फाइबर नेटसँग जडानमा रहन आवश्यक सबै कुरा छ।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up anim-delay-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
              >
                <span className="lang-en">{s.titleEn}</span>
                <span className="lang-ne">{s.titleNe}</span>
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
                <div className={`animate-fade-in-up ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center`}>
                      <service.icon size={26} className={service.iconColor} />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${service.badgeColor}`}>
                      <span className="lang-en">{service.badgeEn}</span>
                      <span className="lang-ne">{service.badgeNe}</span>
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                    <span className="lang-en">{service.titleEn}</span>
                    <span className="lang-ne">{service.titleNe}</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    <span className="lang-en">{service.descEn}</span>
                    <span className="lang-ne">{service.descNe}</span>
                  </p>

                  {/* IPTV Sub-options */}
                  {service.subOptions && (
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {service.subOptions.map((opt) => (
                        <div
                          key={opt.id}
                          id={opt.id}
                          className="card-premium rounded-2xl p-5 scroll-mt-24"
                        >
                          <div className="text-2xl mb-2">{opt.icon}</div>
                          <h4 className="font-bold text-gray-900 mb-2">{opt.titleEn}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed mb-3">{opt.descEn}</p>
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
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25468F] hover:bg-[#071A3D] text-white font-bold rounded-xl transition-all duration-200 shine-hover"
                    >
                      <span className="lang-en">{service.ctaEn}</span>
                      <span className="lang-ne">{service.ctaNe}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link
                      href="/packages"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-all duration-200"
                    >
                      <span className="lang-en">View Packages</span>
                      <span className="lang-ne">प्याकेजहरू हेर्नुहोस्</span>
                    </Link>
                  </div>
                </div>

                {/* Features Card */}
                <div className={`animate-fade-in-up anim-delay-1 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`card-premium border-2 ${service.accentColor} border-opacity-30 rounded-3xl p-8`}>
                    <div className="flex items-center gap-2 mb-6">
                      <Star size={16} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold text-gray-700">
                        <span className="lang-en">Key Features</span>
                        <span className="lang-ne">मुख्य सुविधाहरू</span>
                      </span>
                    </div>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature.en} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#0B7F3A] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm font-medium">
                            <span className="lang-en">{feature.en}</span>
                            <span className="lang-ne">{feature.ne}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 pt-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                          <Phone size={18} className="text-[#0B7F3A]" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-medium">
                            <span className="lang-en">Need help choosing?</span>
                            <span className="lang-ne">छान्न सहायता चाहिन्छ?</span>
                          </p>
                          <p className="text-sm font-bold text-gray-900">
                            <span className="lang-en">Call us: +977-1-XXXXXXX</span>
                            <span className="lang-ne">फोन गर्नुहोस्: +977-1-XXXXXXX</span>
                          </p>
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
            <span className="lang-en">Not Sure Which Plan Is Right for You?</span>
            <span className="lang-ne">कुन योजना उपयुक्त छ थाहा छैन?</span>
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            <span className="lang-en">Our team is happy to help you find the perfect service for your needs and budget.</span>
            <span className="lang-ne">हाम्रो टोलीले तपाईंको आवश्यकता र बजेटका लागि उत्तम सेवा खोज्न खुसीसाथ मद्दत गर्नेछ।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg text-base shine-hover"
            >
              <span className="lang-en">Talk to Us</span>
              <span className="lang-ne">हामीसँग कुरा गर्नुहोस्</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all text-base"
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

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

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_about_title || "About Us | World Fiber Net Pvt. Ltd.",
    description: s.seo_about_desc || "Learn about World Fiber Net Pvt. Ltd. — Nepal's trusted FTTH fiber internet and IPTV provider. Our mission, vision, team, and coverage across Nepal.",
  };
}

const stats = [
  { value: "10,000+", labelEn: "Happy Customers", labelNe: "खुसी ग्राहकहरू", icon: Users, color: "text-[#25468F]", bg: "bg-blue-50" },
  { value: "5+", labelEn: "Districts Covered", labelNe: "जिल्लाहरू", icon: MapPin, color: "text-[#0B7F3A]", bg: "bg-green-50" },
  { value: "99.9%", labelEn: "Network Uptime", labelNe: "नेटवर्क अपटाइम", icon: TrendingUp, color: "text-[#2298D4]", bg: "bg-sky-50" },
  { value: "24/7", labelEn: "Customer Support", labelNe: "ग्राहक सेवा", icon: Headphones, color: "text-purple-600", bg: "bg-purple-50" },
];

const whyChooseUs = [
  {
    icon: Zap,
    titleEn: "Blazing Fast Speeds",
    titleNe: "अत्यन्त द्रुत गति",
    descEn: "Pure FTTH fiber optic connectivity delivering symmetrical upload and download speeds with zero throttling.",
    descNe: "शून्य थ्रोटलिङसहित सममित अपलोड र डाउनलोड गति प्रदान गर्ने शुद्ध FTTH फाइबर अप्टिक जडान।",
    color: "text-[#2298D4]",
    bg: "bg-sky-50",
  },
  {
    icon: Shield,
    titleEn: "Rock-Solid Reliability",
    titleNe: "अत्यन्त भरपर्दो सेवा",
    descEn: "Our redundant network infrastructure ensures 99.9% uptime so you stay connected when it matters most.",
    descNe: "हाम्रो अनावश्यक नेटवर्क पूर्वाधारले ९९.९% अपटाइम सुनिश्चित गर्दछ।",
    color: "text-[#0B7F3A]",
    bg: "bg-green-50",
  },
  {
    icon: Headphones,
    titleEn: "Dedicated Support",
    titleNe: "समर्पित सहायता",
    descEn: "Real humans, 24/7. Our local support team is always ready to resolve issues quickly via phone, WhatsApp, or Viber.",
    descNe: "वास्तविक मानिसहरू, २४/७। हाम्रो स्थानीय सहायता टोली सधैँ तयार छ।",
    color: "text-[#25468F]",
    bg: "bg-blue-50",
  },
  {
    icon: Tv,
    titleEn: "IPTV Entertainment",
    titleNe: "IPTV मनोरञ्जन",
    descEn: "Bundled IPTV services with Net TV and Sky TV — hundreds of live channels, on-demand content, and sports.",
    descNe: "Net TV र Sky TV सहित बन्डल IPTV सेवाहरू — सयौं च्यानलहरू र खेलकुद।",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Award,
    titleEn: "Affordable Plans",
    titleNe: "किफायती योजनाहरू",
    descEn: "Transparent pricing with no hidden fees. Flexible plans for homes, businesses, and everyone in between.",
    descNe: "कुनै लुकेको शुल्क छैन। घर, व्यवसाय, र सबैका लागि लचिलो योजनाहरू।",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Globe,
    titleEn: "Expanding Coverage",
    titleNe: "विस्तार हुँदो कभरेज",
    descEn: "Rapidly expanding across Nepal's key districts, bringing premium fiber connectivity to more communities.",
    descNe: "नेपालका प्रमुख जिल्लाहरूमा तीव्र गतिमा विस्तार हुँदै थप समुदायहरूसम्म पुग्दै।",
    color: "text-[#0B7F3A]",
    bg: "bg-emerald-50",
  },
];

const services = [
  { icon: Home, titleEn: "FTTH Home Fiber", titleNe: "FTTH होम फाइबर", descEn: "Ultra-fast fiber internet for residential users", descNe: "घरायसी प्रयोगकर्ताका लागि अति द्रुत फाइबर इन्टरनेट" },
  { icon: Building2, titleEn: "Corporate Fiber", titleNe: "कर्पोरेट फाइबर", descEn: "Dedicated bandwidth solutions for businesses", descNe: "व्यवसायका लागि समर्पित ब्यान्डविथ समाधान" },
  { icon: Tv, titleEn: "IPTV – Net TV", titleNe: "IPTV – नेट टीभी", descEn: "Nepal's leading IPTV platform with 200+ channels", descNe: "नेपालको अग्रणी IPTV प्लेटफर्म, २०० भन्दा बढी च्यानलहरू" },
  { icon: Tv, titleEn: "IPTV – Sky TV", titleNe: "IPTV – स्काई टीभी", descEn: "Premium satellite-grade IPTV entertainment", descNe: "प्रिमियम स्याटेलाइट-ग्रेड IPTV मनोरञ्जन" },
  { icon: Wifi, titleEn: "Internet + IPTV Combo", titleNe: "इन्टरनेट + IPTV कम्बो", descEn: "Best value bundle combining fiber and IPTV", descNe: "फाइबर र IPTV मिलाएको उत्तम मूल्यको बन्डल" },
  { icon: Headphones, titleEn: "Installation & Support", titleNe: "स्थापना र सहायता", descEn: "Professional setup and 24/7 technical assistance", descNe: "पेशेवर सेटअप र २४/७ प्राविधिक सहायता" },
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
        <div className="container-custom relative z-10 py-20 text-center text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 hero-badge">
            <div className="w-2 h-2 rounded-full bg-[#0B7F3A] animate-pulse"></div>
            <span className="text-sm font-medium text-blue-100">
              <span className="lang-en">Nepal&apos;s Trusted Fiber ISP</span>
              <span className="lang-ne">नेपालको विश्वसनीय फाइबर ISP</span>
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            <span className="lang-en">About <span className="text-[#2298D4]">World Fiber Net</span></span>
            <span className="lang-ne">हाम्रोबारे — <span className="text-[#2298D4]">वर्ल्ड फाइबर नेट</span></span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up anim-delay-1">
            <span className="lang-en">Connecting Nepal with premium FTTH fiber internet and IPTV services — empowering homes, businesses, and communities across the nation.</span>
            <span className="lang-ne">नेपाललाई प्रिमियम FTTH फाइबर इन्टरनेट र IPTV सेवाहरूसँग जोड्दै — घर, व्यवसाय, र समुदायहरूलाई सशक्त बनाउँदै।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up anim-delay-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B7F3A] hover:bg-[#065a28] text-white font-bold rounded-xl transition-all duration-200 shadow-lg shine-hover"
            >
              <span className="lang-en">Get Connected</span>
              <span className="lang-ne">जडान गर्नुहोस्</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all duration-200"
            >
              <span className="lang-en">View Packages</span>
              <span className="lang-ne">प्याकेजहरू हेर्नुहोस्</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">
                <span className="lang-en">Who We Are</span>
                <span className="lang-ne">हामी को हौं</span>
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                <span className="lang-en">Building Nepal&apos;s Digital Future, One Fiber at a Time</span>
                <span className="lang-ne">नेपालको डिजिटल भविष्य निर्माण गर्दै, एक-एक फाइबर</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                <span className="lang-en">World Fiber Net Pvt. Ltd. is a Nepal-based telecommunications company dedicated to delivering ultra-fast FTTH (Fiber to the Home) internet and premium IPTV services. Founded with the vision of a fully connected Nepal, we have grown to serve over 10,000 customers across 5+ districts.</span>
                <span className="lang-ne">वर्ल्ड फाइबर नेट प्रा. लि. नेपालमा आधारित एक दूरसञ्चार कम्पनी हो जसले अति द्रुत FTTH इन्टरनेट र प्रिमियम IPTV सेवाहरू प्रदान गर्न समर्पित छ। हामीले ५+ जिल्लामा १०,०००+ ग्राहकहरूलाई सेवा दिइरहेका छौं।</span>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="lang-en">We believe that fast, reliable internet is not a luxury — it is a necessity. Our fiber optic infrastructure eliminates the limitations of traditional copper-based networks, providing symmetric speeds and rock-solid stability for streaming, gaming, remote work, and enterprise applications.</span>
                <span className="lang-ne">हामी विश्वास गर्छौं कि द्रुत, भरपर्दो इन्टरनेट विलासिता होइन — यो आवश्यकता हो। हाम्रो फाइबर अप्टिक पूर्वाधारले परम्परागत तामाको तारको सीमाहरू हटाउँछ।</span>
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
              {stats.map((stat, i) => (
                <div
                  key={stat.labelEn}
                  className={`bg-white border border-gray-100 rounded-2xl p-6 shadow-sm card-premium anim-delay-${i + 1}`}
                >
                  <div className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon size={22} className={stat.color} />
                  </div>
                  <div className={`text-3xl font-extrabold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-500 text-sm font-medium">
                    <span className="lang-en">{stat.labelEn}</span>
                    <span className="lang-ne">{stat.labelNe}</span>
                  </div>
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
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">Our Purpose</span>
              <span className="lang-ne">हाम्रो उद्देश्य</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              <span className="lang-en">Mission &amp; Vision</span>
              <span className="lang-ne">मिशन र दृष्टिकोण</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-8 lg:p-10 text-white overflow-hidden animate-fade-in-up">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#2298D4]/10 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={28} className="text-[#2298D4]" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">
                  <span className="lang-en">Our Mission</span>
                  <span className="lang-ne">हाम्रो मिशन</span>
                </h3>
                <p className="text-blue-100 leading-relaxed text-base">
                  <span className="lang-en">To provide every household and business in Nepal with access to reliable, affordable, and high-performance fiber internet and IPTV services — bridging the digital divide and enabling a prosperous, connected society.</span>
                  <span className="lang-ne">नेपालका हरेक घर र व्यवसायलाई भरपर्दो, किफायती र उच्च-प्रदर्शन फाइबर इन्टरनेट र IPTV सेवाहरूमा पहुँच प्रदान गर्न।</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { en: "Deliver unmatched internet speeds", ne: "अतुलनीय इन्टरनेट गति प्रदान गर्नु" },
                    { en: "Ensure 99.9% service reliability", ne: "९९.९% सेवा विश्वसनीयता सुनिश्चित गर्नु" },
                    { en: "Provide responsive local support", ne: "त्वरित स्थानीय सहायता प्रदान गर्नु" },
                    { en: "Expand coverage to underserved areas", ne: "कम सेवा प्राप्त क्षेत्रहरूमा कभरेज विस्तार गर्नु" },
                  ].map((item) => (
                    <li key={item.en} className="flex items-center gap-3 text-sm text-blue-100">
                      <CheckCircle2 size={16} className="text-[#4ade80] flex-shrink-0" />
                      <span className="lang-en">{item.en}</span>
                      <span className="lang-ne">{item.ne}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-gradient-to-br from-[#0B7F3A] to-[#065a28] rounded-3xl p-8 lg:p-10 text-white overflow-hidden animate-fade-in-up anim-delay-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Star size={28} className="text-yellow-300" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">
                  <span className="lang-en">Our Vision</span>
                  <span className="lang-ne">हाम्रो दृष्टिकोण</span>
                </h3>
                <p className="text-green-100 leading-relaxed text-base">
                  <span className="lang-en">To become Nepal&apos;s most trusted and preferred fiber internet and IPTV provider — recognized for service excellence, innovation, and our commitment to empowering communities through technology.</span>
                  <span className="lang-ne">नेपालको सबैभन्दा विश्वसनीय र प्राथमिकता प्राप्त फाइबर इन्टरनेट र IPTV प्रदायक बन्न — सेवा उत्कृष्टता, नवाचार र प्रविधिमार्फत समुदायहरूलाई सशक्त बनाउन।</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { en: "Lead Nepal's digital transformation", ne: "नेपालको डिजिटल रूपान्तरणमा नेतृत्व" },
                    { en: "Reach all 77 districts of Nepal", ne: "नेपालका सबै ७७ जिल्लामा पुग्नु" },
                    { en: "Innovate with next-gen technologies", ne: "अर्को पुस्ताको प्रविधिहरूसँग नवाचार" },
                    { en: "Build a digitally empowered nation", ne: "डिजिटल रूपमा सशक्त राष्ट्र निर्माण" },
                  ].map((item) => (
                    <li key={item.en} className="flex items-center gap-3 text-sm text-green-100">
                      <CheckCircle2 size={16} className="text-yellow-300 flex-shrink-0" />
                      <span className="lang-en">{item.en}</span>
                      <span className="lang-ne">{item.ne}</span>
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
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">Why Us</span>
              <span className="lang-ne">किन हामी</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              <span className="lang-en">Why Choose World Fiber Net?</span>
              <span className="lang-ne">वर्ल्ड फाइबर नेट किन छान्ने?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <span className="lang-en">We go beyond just delivering internet — we deliver an experience that keeps you ahead in a connected world.</span>
              <span className="lang-ne">हामी इन्टरनेट मात्र दिँदैनौं — हामी एउटा अनुभव दिन्छौं जसले तपाईंलाई जोडिएको संसारमा अगाडि राख्छ।</span>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.titleEn}
                className={`card-premium rounded-2xl p-6 group animate-fade-in-up anim-delay-${(i % 3) + 1}`}
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <item.icon size={22} className={item.color} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  <span className="lang-en">{item.titleEn}</span>
                  <span className="lang-ne">{item.titleNe}</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  <span className="lang-en">{item.descEn}</span>
                  <span className="lang-ne">{item.descNe}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="section-padding-sm bg-gradient-to-r from-[#25468F] to-[#071A3D]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              <span className="lang-en">Our Reach Across Nepal</span>
              <span className="lang-ne">नेपालभरि हाम्रो पहुँच</span>
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto">
              <span className="lang-en">Serving thousands of customers across multiple districts with rapid expansion underway.</span>
              <span className="lang-ne">धेरै जिल्लाहरूमा हजारौं ग्राहकहरूलाई सेवा दिँदै, तीव्र विस्तार भइरहेको छ।</span>
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
              <span className="lang-en">+ More Coming Soon</span>
              <span className="lang-ne">+ थप आउँदैछ</span>
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div key={stat.labelEn} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">
                  <span className="lang-en">{stat.labelEn}</span>
                  <span className="lang-ne">{stat.labelNe}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">What We Offer</span>
              <span className="lang-ne">हामी के प्रदान गर्छौं</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
              <span className="lang-en">Our Services</span>
              <span className="lang-ne">हाम्रा सेवाहरू</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div
                key={svc.titleEn}
                className={`flex items-start gap-4 card-premium rounded-2xl p-5 animate-fade-in-up anim-delay-${(i % 3) + 1}`}
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svc.icon size={20} className="text-[#25468F]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    <span className="lang-en">{svc.titleEn}</span>
                    <span className="lang-ne">{svc.titleNe}</span>
                  </h3>
                  <p className="text-gray-500 text-sm">
                    <span className="lang-en">{svc.descEn}</span>
                    <span className="lang-ne">{svc.descNe}</span>
                  </p>
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
            <div className="animate-fade-in-up">
              <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">
                <span className="lang-en">Community</span>
                <span className="lang-ne">समुदाय</span>
              </p>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
                <span className="lang-en">More Than an ISP — We&apos;re a Community</span>
                <span className="lang-ne">ISP मात्र होइन — हामी एउटा समुदाय हौं</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                <span className="lang-en">At World Fiber Net, we believe in building lasting relationships with our customers and the communities we serve. Our local teams live and work in the same neighborhoods, giving us a deep understanding of what our customers truly need.</span>
                <span className="lang-ne">वर्ल्ड फाइबर नेटमा, हामी हाम्रा ग्राहकहरू र हामीले सेवा दिने समुदायहरूसँग दीर्घकालीन सम्बन्ध निर्माण गर्न विश्वास गर्छौं।</span>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <span className="lang-en">From quick installations to prompt issue resolution, our on-the-ground presence means faster response times and a genuinely personal service experience that national ISPs simply cannot match.</span>
                <span className="lang-ne">द्रुत स्थापनादेखि तत्काल समस्या समाधानसम्म, हाम्रो स्थानीय उपस्थितिले छिटो प्रतिक्रिया समय सुनिश्चित गर्छ।</span>
              </p>
              <div className="space-y-3">
                {[
                  { en: "Local technicians in every service area", ne: "हरेक सेवा क्षेत्रमा स्थानीय प्राविधिकहरू" },
                  { en: "Community-first customer service approach", ne: "समुदाय-पहिले ग्राहक सेवा दृष्टिकोण" },
                  { en: "Transparent billing with no hidden charges", ne: "कुनै लुकेको शुल्क नभएको पारदर्शी बिलिङ" },
                  { en: "Regular network upgrades and maintenance", ne: "नियमित नेटवर्क स्तरोन्नति र मर्मत" },
                ].map((item) => (
                  <div key={item.en} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#0B7F3A] flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">
                      <span className="lang-en">{item.en}</span>
                      <span className="lang-ne">{item.ne}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#071A3D] to-[#25468F] rounded-3xl p-8 text-white animate-fade-in-up anim-delay-1">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { labelEn: "Years in Service", labelNe: "सेवाका वर्षहरू", value: "5+" },
                  { labelEn: "ISP License", labelNe: "ISP लाइसेन्स", value: "NTA" },
                  { labelEn: "Response Time", labelNe: "प्रतिक्रिया समय", value: "<2 hrs" },
                  { labelEn: "Customer Rating", labelNe: "ग्राहक मूल्यांकन", value: "4.8★" },
                ].map((item) => (
                  <div key={item.labelEn} className="bg-white/10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-extrabold text-[#2298D4] mb-1">{item.value}</div>
                    <div className="text-blue-200 text-xs font-medium">
                      <span className="lang-en">{item.labelEn}</span>
                      <span className="lang-ne">{item.labelNe}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-blue-200 text-sm mb-4">
                  <span className="lang-en">Licensed by Nepal Telecommunications Authority (NTA) and committed to delivering world-class service.</span>
                  <span className="lang-ne">नेपाल दूरसञ्चार प्राधिकरण (NTA) द्वारा लाइसेन्स प्राप्त र विश्वस्तरीय सेवा प्रदान गर्न प्रतिबद्ध।</span>
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
            <span className="lang-en">Ready to Get Connected?</span>
            <span className="lang-ne">जडान हुन तयार हुनुहुन्छ?</span>
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            <span className="lang-en">Apply for a new fiber connection today and experience the difference of true FTTH internet.</span>
            <span className="lang-ne">आज नयाँ फाइबर जडानको लागि आवेदन दिनुहोस् र साँचो FTTH इन्टरनेटको फरक अनुभव गर्नुहोस्।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0B7F3A] font-bold rounded-xl hover:bg-green-50 transition-all shadow-lg text-base shine-hover"
            >
              <span className="lang-en">Apply for New Connection</span>
              <span className="lang-ne">नयाँ जडानको लागि आवेदन दिनुहोस्</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all text-base"
            >
              <span className="lang-en">View All Services</span>
              <span className="lang-ne">सबै सेवाहरू हेर्नुहोस्</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

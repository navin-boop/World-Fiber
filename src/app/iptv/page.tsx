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

import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_iptv_title || "IPTV — Net TV & Sky TV | World Fiber Net Pvt. Ltd.",
    description: s.seo_iptv_desc || "Enjoy premium IPTV with Net TV and Sky TV. Hundreds of live channels, sports, movies, on-demand content, and more — powered by World Fiber Net's fiber network.",
  };
}

const entertainmentCategories = [
  { icon: Tv, labelEn: "Live TV", labelNe: "लाइभ टीभी", count: "200+ Channels", color: "text-[#25468F]", bg: "bg-blue-50" },
  { icon: Trophy, labelEn: "Sports", labelNe: "खेलकुद", count: "30+ Sports Channels", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Film, labelEn: "Movies", labelNe: "चलचित्र", count: "1000+ VOD Titles", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Newspaper, labelEn: "News", labelNe: "समाचार", count: "50+ News Channels", color: "text-[#0B7F3A]", bg: "bg-green-50" },
  { icon: Baby, labelEn: "Kids", labelNe: "बालबालिका", count: "25+ Kids Channels", color: "text-pink-500", bg: "bg-pink-50" },
  { icon: Music, labelEn: "Music", labelNe: "संगीत", count: "40+ Music Channels", color: "text-[#2298D4]", bg: "bg-sky-50" },
  { icon: BookOpen, labelEn: "Documentary", labelNe: "डकुमेन्ट्री", count: "20+ Doc Channels", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: Heart, labelEn: "Lifestyle", labelNe: "जीवनशैली", count: "15+ Lifestyle Channels", color: "text-rose-500", bg: "bg-rose-50" },
];

const iptvBenefits = [
  {
    icon: Globe,
    titleEn: "Massive Channel Library",
    titleNe: "विशाल च्यानल संग्रह",
    descEn: "Access 200–300+ live channels spanning news, sports, entertainment, kids, music, documentary, and international content — all in one place.",
    descNe: "समाचार, खेलकुद, मनोरञ्जन, बालबालिका, संगीत, डकुमेन्ट्री र अन्तर्राष्ट्रिय सामग्री समेट्ने २००–३०० भन्दा बढी लाइभ च्यानलहरू।",
    color: "text-[#25468F]",
    bg: "bg-blue-50",
  },
  {
    icon: Play,
    titleEn: "Crystal-Clear HD & 4K",
    titleNe: "क्रिस्टल-क्लियर HD र 4K",
    descEn: "Enjoy sharp, buffer-free viewing in HD and 4K quality, powered by our dedicated fiber network that delivers smooth streaming at all times.",
    descNe: "हाम्रो समर्पित फाइबर नेटवर्कद्वारा संचालित HD र 4K गुणस्तरमा तीखो, बफर-मुक्त दृश्य आनन्द लिनुहोस्।",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Tv,
    titleEn: "On-Demand Content",
    titleNe: "अन-डिमान्ड सामग्री",
    descEn: "Access a vast library of on-demand movies, TV shows, documentaries, and exclusive series. Watch what you want, when you want.",
    descNe: "अन-डिमान्ड चलचित्र, TV शोहरू, डकुमेन्ट्री र एक्सक्लुसिव सिरिजको विशाल संग्रहमा पहुँच। जहिले चाहे, जे हेर्नुहोस्।",
    color: "text-[#0B7F3A]",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    titleEn: "Seamless Integration",
    titleNe: "निर्बाध एकीकरण",
    descEn: "Bundle IPTV with your fiber internet for a single bill, seamless setup, and priority support from our local team.",
    descNe: "एकल बिल, निर्बाध सेटअप र हाम्रो स्थानीय टोलीबाट प्राथमिकता सहायताका लागि IPTV लाई फाइबर इन्टरनेटसँग बन्डल गर्नुहोस्।",
    color: "text-[#2298D4]",
    bg: "bg-sky-50",
  },
];

const netTvFeatures = [
  { en: "200+ Live Channels", ne: "२०० भन्दा बढी लाइभ च्यानलहरू" },
  { en: "HD & SD Quality Options", ne: "HD र SD गुणस्तर विकल्पहरू" },
  { en: "Nepali & Hindi Channels", ne: "नेपाली र हिन्दी च्यानलहरू" },
  { en: "Sports & News Included", ne: "खेलकुद र समाचार समावेश" },
  { en: "Kids Entertainment Channels", ne: "बालबालिका मनोरञ्जन च्यानलहरू" },
  { en: "Regional Language Channels", ne: "क्षेत्रीय भाषा च्यानलहरू" },
  { en: "VOD Movie Library", ne: "VOD चलचित्र संग्रह" },
  { en: "Electronic Programme Guide (EPG)", ne: "इलेक्ट्रोनिक कार्यक्रम गाइड (EPG)" },
  { en: "Multi-device streaming", ne: "बहु-उपकरण स्ट्रिमिङ" },
  { en: "Catch-up TV (7 days)", ne: "क्याच-अप टीभी (७ दिन)" },
];

const skyTvFeatures = [
  { en: "300+ International Channels", ne: "३०० भन्दा बढी अन्तर्राष्ट्रिय च्यानलहरू" },
  { en: "Premium Sports Packages", ne: "प्रिमियम खेलकुद प्याकेजहरू" },
  { en: "Hollywood & Bollywood Movies", ne: "हलिउड र बलिउड चलचित्रहरू" },
  { en: "International News Networks", ne: "अन्तर्राष्ट्रिय समाचार नेटवर्कहरू" },
  { en: "Music & Lifestyle Channels", ne: "संगीत र जीवनशैली च्यानलहरू" },
  { en: "Documentary & Educational", ne: "डकुमेन्ट्री र शैक्षिक" },
  { en: "Dolby Digital Audio Support", ne: "डल्बी डिजिटल अडियो समर्थन" },
  { en: "4K Ultra HD Channels", ne: "4K अल्ट्रा HD च्यानलहरू" },
  { en: "Multi-room support", ne: "बहु-कोठा समर्थन" },
  { en: "Catch-up & Restart TV", ne: "क्याच-अप र रिस्टार्ट टीभी" },
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
        <div className="container-custom relative z-10 py-20 text-center text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 hero-badge">
            <Tv size={14} className="text-purple-300" />
            <span className="text-sm font-medium text-purple-100">
              <span className="lang-en">Premium IPTV Entertainment</span>
              <span className="lang-ne">प्रिमियम IPTV मनोरञ्जन</span>
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            <span className="lang-en">IPTV with <span className="text-[#2298D4]">Net TV</span> &amp; <span className="text-purple-300">Sky TV</span></span>
            <span className="lang-ne">IPTV — <span className="text-[#2298D4]">नेट टीभी</span> र <span className="text-purple-300">स्काई टीभी</span></span>
          </h1>
          <p className="text-purple-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up anim-delay-1">
            <span className="lang-en">Experience next-level entertainment with 200–300+ live channels, on-demand movies, sports, news, and more — all powered by World Fiber Net&apos;s ultra-fast fiber network.</span>
            <span className="lang-ne">२००–३०० भन्दा बढी लाइभ च्यानलहरू, अन-डिमान्ड चलचित्र, खेलकुद, समाचार र थप — वर्ल्ड फाइबर नेटको अति द्रुत फाइबर नेटवर्कद्वारा संचालित।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up anim-delay-2">
            <a
              href="#net-tv"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25468F] hover:bg-[#071A3D] text-white font-bold rounded-xl transition-all duration-200 shadow-lg shine-hover"
            >
              <span className="lang-en">Explore Net TV</span>
              <span className="lang-ne">नेट टीभी हेर्नुहोस्</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="#sky-tv"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all duration-200"
            >
              <span className="lang-en">Explore Sky TV</span>
              <span className="lang-ne">स्काई टीभी हेर्नुहोस्</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* IPTV Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">IPTV Options</span>
              <span className="lang-ne">IPTV विकल्पहरू</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              <span className="lang-en">Choose Your IPTV Platform</span>
              <span className="lang-ne">आफ्नो IPTV प्लेटफर्म छान्नुहोस्</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <span className="lang-en">We offer two premium IPTV platforms as part of our service. Enjoy them separately or together with a combined package.</span>
              <span className="lang-ne">हामी हाम्रो सेवाको भागको रूपमा दुई प्रिमियम IPTV प्लेटफर्महरू प्रदान गर्छौं। तिनीहरूलाई छुट्टाछुट्टै वा संयुक्त प्याकेजसँग आनन्द लिनुहोस्।</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Net TV */}
            <div
              id="net-tv"
              className="relative bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-8 lg:p-10 text-white overflow-hidden scroll-mt-24 animate-fade-in-up"
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
                    <p className="text-blue-200 text-sm">
                      <span className="lang-en">Nepal&apos;s #1 IPTV Platform</span>
                      <span className="lang-ne">नेपालको #१ IPTV प्लेटफर्म</span>
                    </p>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed mb-6">
                  <span className="lang-en">Net TV is Nepal&apos;s most popular IPTV service, featuring a wide selection of Nepali, Hindi, English, and regional channels. Perfect for families who want comprehensive local and international entertainment.</span>
                  <span className="lang-ne">Net TV नेपालको सबैभन्दा लोकप्रिय IPTV सेवा हो, जसमा नेपाली, हिन्दी, अंग्रेजी र क्षेत्रीय च्यानलहरूको व्यापक चयन छ। स्थानीय र अन्तर्राष्ट्रिय मनोरञ्जन चाहने परिवारहरूका लागि उत्तम।</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {netTvFeatures.map((f) => (
                    <li key={f.en} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={15} className="text-[#4ade80] flex-shrink-0" />
                      <span className="text-blue-100">
                        <span className="lang-en">{f.en}</span>
                        <span className="lang-ne">{f.ne}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm shine-hover"
                >
                  <span className="lang-en">Get Net TV</span>
                  <span className="lang-ne">Net TV लिनुहोस्</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Sky TV */}
            <div
              id="sky-tv"
              className="relative rounded-3xl p-8 lg:p-10 text-white overflow-hidden scroll-mt-24 animate-fade-in-up anim-delay-1"
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
                    <p className="text-purple-200 text-sm">
                      <span className="lang-en">Premium International IPTV</span>
                      <span className="lang-ne">प्रिमियम अन्तर्राष्ट्रिय IPTV</span>
                    </p>
                  </div>
                </div>
                <p className="text-purple-100 leading-relaxed mb-6">
                  <span className="lang-en">Sky TV brings you premium international content with an extensive channel lineup spanning sports, movies, documentaries, lifestyle, and exclusive programming from around the world.</span>
                  <span className="lang-ne">Sky TV ले तपाईंलाई खेलकुद, चलचित्र, डकुमेन्ट्री, जीवनशैली र विश्वभरका एक्सक्लुसिव कार्यक्रमहरू समेट्ने विशाल च्यानल सूचीसहित प्रिमियम अन्तर्राष्ट्रिय सामग्री ल्याउँछ।</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {skyTvFeatures.map((f) => (
                    <li key={f.en} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={15} className="text-purple-300 flex-shrink-0" />
                      <span className="text-purple-100">
                        <span className="lang-en">{f.en}</span>
                        <span className="lang-ne">{f.ne}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-all text-sm shine-hover"
                >
                  <span className="lang-en">Get Sky TV</span>
                  <span className="lang-ne">Sky TV लिनुहोस्</span>
                  <ArrowRight size={16} />
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
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">Content Library</span>
              <span className="lang-ne">सामग्री संग्रह</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              <span className="lang-en">Entertainment for Everyone</span>
              <span className="lang-ne">सबैका लागि मनोरञ्जन</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <span className="lang-en">From thrilling sports to children&apos;s shows — our IPTV platforms have content for every member of your family.</span>
              <span className="lang-ne">रोमाञ्चक खेलकुददेखि बालबालिकाको कार्यक्रमसम्म — हाम्रा IPTV प्लेटफर्महरूमा तपाईंको परिवारका हरेक सदस्यका लागि सामग्री छ।</span>
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {entertainmentCategories.map((cat, i) => (
              <div
                key={cat.labelEn}
                className={`card-premium rounded-2xl p-6 text-center group animate-fade-in-up anim-delay-${(i % 4) + 1}`}
              >
                <div className={`w-14 h-14 ${cat.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon size={26} className={cat.color} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  <span className="lang-en">{cat.labelEn}</span>
                  <span className="lang-ne">{cat.labelNe}</span>
                </h3>
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
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">Benefits</span>
              <span className="lang-ne">फाइदाहरू</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              <span className="lang-en">Why Choose World Fiber Net IPTV?</span>
              <span className="lang-ne">वर्ल्ड फाइबर नेट IPTV किन छान्ने?</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <span className="lang-en">Our IPTV service is built on our own fiber network — no buffering, no interruptions, just pure entertainment.</span>
              <span className="lang-ne">हाम्रो IPTV सेवा हाम्रै फाइबर नेटवर्कमा निर्मित छ — कुनै बफरिङ छैन, कुनै अवरोध छैन, शुद्ध मनोरञ्जन मात्र।</span>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {iptvBenefits.map((benefit, i) => (
              <div
                key={benefit.titleEn}
                className={`card-premium rounded-2xl p-6 group text-center animate-fade-in-up anim-delay-${(i % 4) + 1}`}
              >
                <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  <benefit.icon size={26} className={benefit.color} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  <span className="lang-en">{benefit.titleEn}</span>
                  <span className="lang-ne">{benefit.titleNe}</span>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  <span className="lang-en">{benefit.descEn}</span>
                  <span className="lang-ne">{benefit.descNe}</span>
                </p>
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
                  <span className="lang-en">Best Value Bundle</span>
                  <span className="lang-ne">उत्तम मूल्य बन्डल</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                  <span className="lang-en">Internet + IPTV Combo</span>
                  <span className="lang-ne">इन्टरनेट + IPTV कम्बो</span>
                </h2>
                <p className="text-blue-200 leading-relaxed mb-6 text-base">
                  <span className="lang-en">Get the ultimate entertainment and connectivity package. Combine our blazing-fast fiber internet with Net TV or Sky TV IPTV and save up to 30% compared to buying them separately.</span>
                  <span className="lang-ne">अन्तिम मनोरञ्जन र कनेक्टिभिटी प्याकेज पाउनुहोस्। हाम्रो अति द्रुत फाइबर इन्टरनेटलाई Net TV वा Sky TV IPTV सँग संयोजन गर्नुहोस् र छुट्टाछुट्टै किनेभन्दा ३०% सम्म बचत गर्नुहोस्।</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    { en: "High-speed fiber internet included", ne: "उच्च-गति फाइबर इन्टरनेट समावेश" },
                    { en: "Net TV or Sky TV IPTV included", ne: "Net TV वा Sky TV IPTV समावेश" },
                    { en: "Save up to 30% vs. separate plans", ne: "अलग योजनाभन्दा ३०% सम्म बचत" },
                    { en: "Single monthly bill — hassle free", ne: "एकल मासिक बिल — झञ्झट-मुक्त" },
                    { en: "Priority bundled customer support", ne: "प्राथमिकता बन्डल ग्राहक सहायता" },
                  ].map((f) => (
                    <li key={f.en} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={15} className="text-[#4ade80] flex-shrink-0" />
                      <span className="text-blue-100">
                        <span className="lang-en">{f.en}</span>
                        <span className="lang-ne">{f.ne}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/packages"
                    className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all shine-hover"
                  >
                    <Package size={16} />
                    <span className="lang-en">View Combo Packages</span>
                    <span className="lang-ne">कम्बो प्याकेजहरू हेर्नुहोस्</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
                  >
                    <span className="lang-en">Contact Us</span>
                    <span className="lang-ne">सम्पर्क गर्नुहोस्</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="p-10 lg:p-14 bg-white/5 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-6">
                  <span className="lang-en">What&apos;s Included</span>
                  <span className="lang-ne">के-के समावेश छ</span>
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Wifi, labelEn: "Fiber Internet", labelNe: "फाइबर इन्टरनेट", detail: "25 Mbps to 1 Gbps plans" },
                    { icon: Tv, labelEn: "Net TV / Sky TV", labelNe: "नेट टीभी / स्काई टीभी", detail: "200–300+ live channels" },
                    { icon: Film, labelEn: "On-Demand Content", labelNe: "अन-डिमान्ड सामग्री", detail: "1000+ movies & series" },
                    { icon: Trophy, labelEn: "Live Sports", labelNe: "लाइभ खेलकुद", detail: "30+ sports channels" },
                  ].map((item) => (
                    <div key={item.labelEn} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-[#2298D4]" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm">
                          <span className="lang-en">{item.labelEn}</span>
                          <span className="lang-ne">{item.labelNe}</span>
                        </p>
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
            <span className="text-sm text-purple-100 font-medium">
              <span className="lang-en">Upgrade Your Entertainment</span>
              <span className="lang-ne">तपाईंको मनोरञ्जन स्तरोन्नति गर्नुहोस्</span>
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            <span className="lang-en">Upgrade Your TV Experience Today</span>
            <span className="lang-ne">आज आफ्नो TV अनुभव स्तरोन्नति गर्नुहोस्</span>
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-xl mx-auto">
            <span className="lang-en">Join thousands of happy customers enjoying premium IPTV on Nepal&apos;s fastest fiber network.</span>
            <span className="lang-ne">नेपालको सबैभन्दा द्रुत फाइबर नेटवर्कमा प्रिमियम IPTV आनन्द लिइरहेका हजारौं खुसी ग्राहकहरूमा सामेल हुनुहोस्।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-all shadow-lg text-base shine-hover"
            >
              <span className="lang-en">Get IPTV Now</span>
              <span className="lang-ne">अहिले IPTV लिनुहोस्</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all text-base"
            >
              <span className="lang-en">View Packages</span>
              <span className="lang-ne">प्याकेजहरू हेर्नुहोस्</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  CreditCard,
  Building2,
  CheckCircle2,
  Phone,
  MessageCircle,
  Ticket,
  Clock,
  AlertCircle,
  Info,
} from "lucide-react";
import { getSettings } from "@/lib/settings";

export async function generateMetadata() {
  const s = await getSettings();
  return {
    title: s.seo_recharge_title || "Recharge & Bill Payment | World Fiber Net Pvt. Ltd.",
    description:
      s.seo_recharge_desc ||
      "Pay your World Fiber Net bill easily via eSewa, Khalti, or Mobile Banking. Step-by-step payment guide for all methods.",
  };
}

const paymentMethods = [
  {
    id: "esewa",
    icon: Smartphone,
    titleEn: "eSewa",
    subtitleEn: "Nepal's Leading Digital Wallet",
    subtitleNe: "नेपालको अग्रणी डिजिटल वालेट",
    iconBg: "bg-green-50",
    iconColor: "text-[#0B7F3A]",
    headerGradient: "from-[#0B7F3A] to-[#065a28]",
    badgeEn: "Most Popular",
    badgeNe: "सर्वाधिक लोकप्रिय",
    badgeColor: "bg-white text-[#0B7F3A]",
    imageKey: "recharge_esewa_image",
    steps: [
      { en: "Open the eSewa app on your smartphone.", ne: "आय्नो स्मार्टफोनमा eSewa एप खोल्नुहोस्।" },
      { en: 'Tap on "Pay" or navigate to "Utility Payment".', ne: '"Pay" थिच्नुहोस् वा "Utility Payment" मा जानुहोस्।' },
      { en: 'Search for or select "World Fiber Net" from the service list.', ne: 'सेवा सूचीबाट "World Fiber Net" खोज्नुहोस् वा छान्नुहोस्।' },
      { en: "Enter your Customer ID or registered phone number.", ne: "आय्नो ग्राहक ID वा दर्ता गरिएको फोन नम्बर प्रविष्ट गर्नुहोस्।" },
      { en: "Verify the payment amount and your account details.", ne: "भुक्तान रकम र आय्नो खाताको विवरण प्रमाणित गर्नुहोस्।" },
      { en: "Enter your eSewa PIN or use biometric authentication.", ne: "आय्नो eSewa PIN प्रविष्ट गर्नुहोस् वा बायोमेट्रिक प्रमाणीकरण प्रयोग गर्नुहोस्।" },
      { en: 'Tap "Pay Now" to complete the transaction.', ne: '"Pay Now" थिचेर कारोबार पूरा गर्नुहोस्।' },
      { en: "Save or screenshot the payment receipt for your records.", ne: "आय्नो अभिलेखका लागि भुक्तान रसिद सेभ गर्नुहोस् वा स्क्रिनसट लिनुहोस्।" },
    ],
    noteEn: "Payments via eSewa are reflected within 1–2 hours during business hours.",
    noteNe: "eSewa मार्फत भुक्तानहरू व्यापार घण्टामा १–२ घण्टाभित्र प्रतिबिम्बित हुन्छन्।",
  },
  {
    id: "khalti",
    icon: CreditCard,
    titleEn: "Khalti",
    subtitleEn: "Fast & Secure Digital Payment",
    subtitleNe: "द्रुत र सुरक्षित डिजिटल भुक्तान",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    headerGradient: "from-purple-600 to-purple-800",
    badgeEn: "Recommended",
    badgeNe: "सिफारिश गरिएको",
    badgeColor: "bg-white text-purple-600",
    imageKey: "recharge_khalti_image",
    steps: [
      { en: "Open the Khalti app or visit khalti.com.", ne: "Khalti एप खोल्नुहोस् वा khalti.com मा जानुहोस्।" },
      { en: 'Tap "Pay" and search for "World Fiber Net".', ne: '"Pay" थिच्नुहोस् र "World Fiber Net" खोज्नुहोस्।' },
      { en: "Select the service from the list of operators.", ne: "अपरेटरहरूको सूचीबाट सेवा छान्नुहोस्।" },
      { en: "Enter your Customer ID or registered mobile number.", ne: "आय्नो ग्राहक ID वा दर्ता गरिएको मोबाइल नम्बर प्रविष्ट गर्नुहोस्।" },
      { en: "Enter the payment amount as shown on your bill.", ne: "तपाईंको बिलमा देखाइएको भुक्तान रकम प्रविष्ट गर्नुहोस्।" },
      { en: "Review the transaction details carefully.", ne: "कारोबारको विवरण ध्यानपूर्वक समीक्षा गर्नुहोस्।" },
      { en: "Confirm with your Khalti PIN or MPIN.", ne: "आय्नो Khalti PIN वा MPIN सँग पुष्टि गर्नुहोस्।" },
      { en: "Collect and save the payment confirmation.", ne: "भुक्तान पुष्टिकरण सङ्कलन गर्नुहोस् र सेभ गर्नुहोस्।" },
    ],
    noteEn: "Khalti payments are usually instant. If not reflected within 2 hours, contact support.",
    noteNe: "Khalti भुक्तानहरू सामान्यतया तत्काल हुन्छन्। २ घण्टाभित्र प्रतिबिम्बित नभए सहायतामा सम्पर्क गर्नुहोस्।",
  },
  {
    id: "mobile-banking",
    icon: Building2,
    titleEn: "Mobile Banking",
    subtitleEn: "Via Any Nepali Bank App",
    subtitleNe: "जुनसुकै नेपाली बैंक एप मार्फत",
    iconBg: "bg-sky-50",
    iconColor: "text-[#2298D4]",
    headerGradient: "from-[#2298D4] to-[#1a78a8]",
    badgeEn: "Universal",
    badgeNe: "सार्वभौमिक",
    badgeColor: "bg-white text-[#2298D4]",
    imageKey: "recharge_mobile_image",
    steps: [
      { en: "Open your bank's mobile banking app (NIC Asia, Nabil, Rastriya Banijya, etc.).", ne: "आय्नो बैंकको मोबाइल बैंकिङ एप खोल्नुहोस् (NIC Asia, Nabil, राष्ट्रिय बाणिज्य, आदि)।" },
      { en: 'Navigate to "Fund Transfer" or "Utility Payment" section.', ne: '"Fund Transfer" वा "Utility Payment" खण्डमा जानुहोस्।' },
      { en: 'Select "ISP Payment" or "Internet Bill" category.', ne: '"ISP Payment" वा "Internet Bill" वर्ग छान्नुहोस्।' },
      { en: 'Search for "World Fiber Net" in the provider list.', ne: 'प्रदायक सूचीमा "World Fiber Net" खोज्नुहोस्।' },
      { en: "Enter your Customer ID or registered contact number.", ne: "आय्नो ग्राहक ID वा दर्ता गरिएको सम्पर्क नम्बर प्रविष्ट गर्नुहोस्।" },
      { en: "Enter the exact payment amount from your bill.", ne: "तपाईंको बिलबाट सटीक भुक्तान रकम प्रविष्ट गर्नुहोस्।" },
      { en: "Double-check all details before confirming.", ne: "पुष्टि गर्नु अघि सबै विवरण दोहोर्याएर जाँच्नुहोस्।" },
      { en: "Confirm payment and save the transaction reference number.", ne: "भुक्तान पुष्टि गर्नुहोस् र कारोबार सन्दर्भ नम्बर सेभ गर्नुहोस्।" },
    ],
    noteEn: "Mobile banking transfers may take up to 4 hours on weekdays and longer on weekends.",
    noteNe: "मोबाइल बैंकिङ स्थानान्तरण कार्यदिनमा ४ घण्टासम्म र सप्ताहान्तमा थप समय लाग्न सक्छ।",
  },
];

export default async function RechargePage() {
  const settings = await getSettings();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[360px] lg:min-h-[420px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(ellipse at 15% 60%, #2298D4 0%, transparent 50%),
                                radial-gradient(ellipse at 85% 25%, #0B7F3A 0%, transparent 50%)`,
            }}
          />
        </div>
        <div className="container-custom relative z-10 py-16 text-center text-white animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 hero-badge">
            <CreditCard size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">
              <span className="lang-en">Simple &amp; Secure Bill Payment</span>
              <span className="lang-ne">सरल र सुरक्षित बिल भुक्तान</span>
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            <span className="lang-en">Recharge &amp; <span className="text-[#2298D4]">Bill Payment</span></span>
            <span className="lang-ne">रिचार्ज र <span className="text-[#2298D4]">बिल भुक्तान</span></span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-in-up anim-delay-1">
            <span className="lang-en">Pay your World Fiber Net bill quickly and securely using any of our digital payment methods. No queue, no hassle.</span>
            <span className="lang-ne">हाम्रो कुनै पनि डिजिटल भुक्तान विधि प्रयोग गरेर वर्ल्ड फाइबर नेट बिल छिटो र सुरक्षित रूपमा तिर्नुहोस्। कुनै लाइन छैन, कुनै झझट छैन।</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up anim-delay-2">
            {paymentMethods.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
              >
                {m.titleEn}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-amber-50 border-b border-amber-100">
        <div className="container-custom py-5">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 font-semibold text-sm">
                <span className="lang-en">Important Reminder</span>
                <span className="lang-ne">महत्त्वपूर्ण सम्झना</span>
              </p>
              <p className="text-amber-700 text-sm mt-0.5">
                <span className="lang-en">Always include your <strong>Customer ID</strong> or <strong>registered phone number</strong> when making payments. For any payment issues, contact our billing team via WhatsApp or phone.</span>
                <span className="lang-ne">भुक्तान गर्दा सधैं आय्नो <strong>ग्राहक ID</strong> वा <strong>दर्ता गरिएको फोन नम्बर</strong> समावेश गर्नुहोस्। कुनै पनि भुक्तान समस्याका लागि WhatsApp वा फोनमार्फत हाम्रो बिलिङ टोलीसँग सम्पर्क गर्नुहोस्।</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">Payment Methods</span>
              <span className="lang-ne">भुक्तान विधिहरू</span>
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              <span className="lang-en">How to Pay Your Bill</span>
              <span className="lang-ne">बिल कसरी तिर्ने</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              <span className="lang-en">Choose your preferred digital payment method and follow the step-by-step guide below.</span>
              <span className="lang-ne">आय्नो मनपर्दो डिजिटल भुक्तान विधि छान्नुहोस् र तलको चरण-दर-चरण गाइड पालना गर्नुहोस्।</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10">
            {paymentMethods.map((method, idx) => {
              const imageUrl = settings[method.imageKey as keyof typeof settings];
              return (
                <div
                  key={method.id}
                  id={method.id}
                  className={`card-premium rounded-3xl overflow-hidden scroll-mt-24 animate-fade-in-up anim-delay-${(idx % 2) + 1}`}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${method.headerGradient} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 ${method.iconBg} rounded-2xl flex items-center justify-center`}>
                          <method.icon size={26} className={method.iconColor} />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-white">{method.titleEn}</h3>
                          <p className="text-white/70 text-sm">
                            <span className="lang-en">{method.subtitleEn}</span>
                            <span className="lang-ne">{method.subtitleNe}</span>
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${method.badgeColor}`}>
                        <span className="lang-en">{method.badgeEn}</span>
                        <span className="lang-ne">{method.badgeNe}</span>
                      </span>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="p-6 lg:p-8">
                    <h4 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#0B7F3A]" />
                      <span className="lang-en">Step-by-Step Guide</span>
                      <span className="lang-ne">चरण-दर-चरण गाइड</span>
                    </h4>
                    <ol className="space-y-3">
                      {method.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-50 text-[#25468F] text-xs font-bold rounded-full flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="text-gray-600 text-sm leading-relaxed pt-0.5">
                            <span className="lang-en">{step.en}</span>
                            <span className="lang-ne">{step.ne}</span>
                          </span>
                        </li>
                      ))}
                    </ol>

                    {/* How-to image */}
                    {imageUrl && (
                      <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imageUrl}
                          alt={`How to pay via ${method.titleEn}`}
                          className="w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Note */}
                    <div className="mt-5 flex items-start gap-2.5 bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <Info size={15} className="text-[#25468F] flex-shrink-0 mt-0.5" />
                      <p className="text-[#25468F] text-xs leading-relaxed">
                        <span className="lang-en">{method.noteEn}</span>
                        <span className="lang-ne">{method.noteNe}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">
              <span className="lang-en">Tips</span>
              <span className="lang-ne">सुझावहरू</span>
            </p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">
              <span className="lang-en">Payment Tips &amp; Reminders</span>
              <span className="lang-ne">भुक्तान सुझाव र सम्झना</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Clock,
                titleEn: "Pay Before Due Date",
                titleNe: "म्याद अघि तिर्नुहोस्",
                descEn: "Avoid service interruption by paying at least 2 days before your billing due date.",
                descNe: "सेवा अवरोधबाट बच्न बिलिङ म्याद तिथिभन्दा कम्तिमा २ दिन अघि तिर्नुहोस्।",
                color: "text-[#25468F]",
                bg: "bg-blue-50",
              },
              {
                icon: CheckCircle2,
                titleEn: "Keep Your Receipt",
                titleNe: "रसिद राख्नुहोस्",
                descEn: "Always save payment receipts or screenshots as proof of payment for at least 30 days.",
                descNe: "कम्तिमा ३० दिनका लागि भुक्तानको प्रमाणको रूपमा भुक्तान रसिद वा स्क्रिनसट सधैं सेभ गर्नुहोस्।",
                color: "text-[#0B7F3A]",
                bg: "bg-green-50",
              },
              {
                icon: AlertCircle,
                titleEn: "Correct Customer ID",
                titleNe: "सही ग्राहक ID",
                descEn: "Always enter your correct Customer ID to ensure your payment is credited to the right account.",
                descNe: "तपाईंको भुक्तान सही खातामा जमा भएको सुनिश्चित गर्न सधैं सही ग्राहक ID प्रविष्ट गर्नुहोस्।",
                color: "text-orange-500",
                bg: "bg-orange-50",
              },
              {
                icon: Info,
                titleEn: "Payment Not Reflected?",
                titleNe: "भुक्तान देखिएन?",
                descEn: "Contact our billing team with your receipt. Payments are usually updated within 2–4 business hours.",
                descNe: "आय्नो रसिदसहित हाम्रो बिलिङ टोलीसँग सम्पर्क गर्नुहोस्। भुक्तानहरू सामान्यतया २–४ व्यापार घण्टाभित्र अपडेट हुन्छन्।",
                color: "text-[#2298D4]",
                bg: "bg-sky-50",
              },
            ].map((tip, i) => (
              <div key={tip.titleEn} className={`card-premium rounded-2xl p-5 animate-fade-in-up anim-delay-${(i % 4) + 1}`}>
                <div className={`w-10 h-10 ${tip.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <tip.icon size={18} className={tip.color} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">
                  <span className="lang-en">{tip.titleEn}</span>
                  <span className="lang-ne">{tip.titleNe}</span>
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  <span className="lang-en">{tip.descEn}</span>
                  <span className="lang-ne">{tip.descNe}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Support CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  <span className="lang-en">Need Billing Support?</span>
                  <span className="lang-ne">बिलिङ सहायता चाहिन्छ?</span>
                </h2>
                <p className="text-blue-200 text-base leading-relaxed mb-6">
                  <span className="lang-en">If you have any issues with your payment, billing queries, or need help with your account, our team is ready to assist you.</span>
                  <span className="lang-ne">यदि तपाईंलाई भुक्तान, बिलिङ प्रश्नहरू, वा आय्नो खातामा मद्दत चाहिन्छ भने, हाम्रो टोली सहायता गर्न तयार छ।</span>
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Phone, labelEn: "Call Us", labelNe: "फोन गर्नुहोस्", detail: settings.phone || "+977-1-XXXXXXX", sub: settings.office_hours || "Mon–Sat, 9 AM – 7 PM" },
                    { icon: MessageCircle, labelEn: "WhatsApp / Viber", labelNe: "WhatsApp / Viber", detail: `+977-${settings.whatsapp_number || "98XXXXXXXX"}`, sub: "Quick response guaranteed" },
                    { icon: Ticket, labelEn: "Support Ticket", labelNe: "सहायता टिकट", detail: "Create a billing ticket", sub: "Tracked & resolved within 24 hrs" },
                  ].map((contact) => (
                    <div key={contact.labelEn} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <contact.icon size={18} className="text-[#2298D4]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">
                          <span className="lang-en">{contact.labelEn}</span>
                          <span className="lang-ne">{contact.labelNe}</span>
                          : {contact.detail}
                        </p>
                        <p className="text-blue-300 text-xs">{contact.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">
                    <span className="lang-en">Can&apos;t find your Customer ID?</span>
                    <span className="lang-ne">ग्राहक ID फेला परेन?</span>
                  </h3>
                  <p className="text-blue-200 text-sm mb-4">
                    <span className="lang-en">Your Customer ID is on your welcome email or installation receipt. Our support team can also help you retrieve it.</span>
                    <span className="lang-ne">तपाईंको ग्राहक ID स्वागत इमेल वा स्थापना रसिदमा छ। हाम्रो सहायता टोलीले पनि यो प्राप्त गर्न मद्दत गर्न सक्छ।</span>
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm shine-hover">
                    <span className="lang-en">Contact Support</span>
                    <span className="lang-ne">सहायतामा सम्पर्क गर्नुहोस्</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">
                    <span className="lang-en">Raise a Billing Ticket</span>
                    <span className="lang-ne">बिलिङ टिकट खोल्नुहोस्</span>
                  </h3>
                  <p className="text-blue-200 text-sm mb-4">
                    <span className="lang-en">For complex billing issues, create a support ticket and our billing team will resolve it within 24 hours.</span>
                    <span className="lang-ne">जटिल बिलिङ समस्याहरूका लागि, सहायता टिकट बनाउनुहोस् र हाम्रो बिलिङ टोलीले २४ घण्टाभित्र समाधान गर्नेछ।</span>
                  </p>
                  <Link href="/support-ticket" className="inline-flex items-center gap-2 bg-[#0B7F3A] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#065a28] transition-all text-sm">
                    <span className="lang-en">Create Ticket</span>
                    <span className="lang-ne">टिकट बनाउनुहोस्</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

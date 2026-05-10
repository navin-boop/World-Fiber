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
    title: "eSewa",
    subtitle: "Nepal's Leading Digital Wallet",
    iconBg: "bg-green-50",
    iconColor: "text-[#0B7F3A]",
    headerGradient: "from-[#0B7F3A] to-[#065a28]",
    badge: "Most Popular",
    badgeColor: "bg-white text-[#0B7F3A]",
    imageKey: "recharge_esewa_image",
    steps: [
      "Open the eSewa app on your smartphone.",
      'Tap on "Pay" or navigate to "Utility Payment".',
      'Search for or select "World Fiber Net" from the service list.',
      "Enter your Customer ID or registered phone number.",
      "Verify the payment amount and your account details.",
      "Enter your eSewa PIN or use biometric authentication.",
      'Tap "Pay Now" to complete the transaction.',
      "Save or screenshot the payment receipt for your records.",
    ],
    note: "Payments via eSewa are reflected within 1–2 hours during business hours.",
  },
  {
    id: "khalti",
    icon: CreditCard,
    title: "Khalti",
    subtitle: "Fast & Secure Digital Payment",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    headerGradient: "from-purple-600 to-purple-800",
    badge: "Recommended",
    badgeColor: "bg-white text-purple-600",
    imageKey: "recharge_khalti_image",
    steps: [
      "Open the Khalti app or visit khalti.com.",
      'Tap "Pay" and search for "World Fiber Net".',
      "Select the service from the list of operators.",
      "Enter your Customer ID or registered mobile number.",
      "Enter the payment amount as shown on your bill.",
      "Review the transaction details carefully.",
      "Confirm with your Khalti PIN or MPIN.",
      "Collect and save the payment confirmation.",
    ],
    note: "Khalti payments are usually instant. If not reflected within 2 hours, contact support.",
  },
  {
    id: "mobile-banking",
    icon: Building2,
    title: "Mobile Banking",
    subtitle: "Via Any Nepali Bank App",
    iconBg: "bg-sky-50",
    iconColor: "text-[#2298D4]",
    headerGradient: "from-[#2298D4] to-[#1a78a8]",
    badge: "Universal",
    badgeColor: "bg-white text-[#2298D4]",
    imageKey: "recharge_mobile_image",
    steps: [
      "Open your bank's mobile banking app (NIC Asia, Nabil, Rastriya Banijya, etc.).",
      'Navigate to "Fund Transfer" or "Utility Payment" section.',
      'Select "ISP Payment" or "Internet Bill" category.',
      'Search for "World Fiber Net" in the provider list.',
      "Enter your Customer ID or registered contact number.",
      "Enter the exact payment amount from your bill.",
      "Double-check all details before confirming.",
      "Confirm payment and save the transaction reference number.",
    ],
    note: "Mobile banking transfers may take up to 4 hours on weekdays and longer on weekends.",
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
        <div className="container-custom relative z-10 py-16 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <CreditCard size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">Simple &amp; Secure Bill Payment</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Recharge &amp;{" "}
            <span className="text-[#2298D4]">Bill Payment</span>
          </h1>
          <p className="text-blue-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            Pay your World Fiber Net bill quickly and securely using any of our digital payment methods. No queue, no hassle.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {paymentMethods.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-all"
              >
                {m.title}
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
              <p className="text-amber-800 font-semibold text-sm">Important Reminder</p>
              <p className="text-amber-700 text-sm mt-0.5">
                Always include your <strong>Customer ID</strong> or <strong>registered phone number</strong> when making payments. For any payment issues, contact our billing team via WhatsApp or phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-[#25468F] font-bold text-sm uppercase tracking-widest mb-3">Payment Methods</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
              How to Pay Your Bill
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Choose your preferred digital payment method and follow the step-by-step guide below.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10">
            {paymentMethods.map((method) => {
              const imageUrl = settings[method.imageKey as keyof typeof settings];
              return (
                <div
                  key={method.id}
                  id={method.id}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${method.headerGradient} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 ${method.iconBg} rounded-2xl flex items-center justify-center`}>
                          <method.icon size={26} className={method.iconColor} />
                        </div>
                        <div>
                          <h3 className="text-xl font-extrabold text-white">{method.title}</h3>
                          <p className="text-white/70 text-sm">{method.subtitle}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${method.badgeColor}`}>
                        {method.badge}
                      </span>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="p-6 lg:p-8">
                    <h4 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#0B7F3A]" />
                      Step-by-Step Guide
                    </h4>
                    <ol className="space-y-3">
                      {method.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-50 text-[#25468F] text-xs font-bold rounded-full flex items-center justify-center">
                            {i + 1}
                          </span>
                          <span className="text-gray-600 text-sm leading-relaxed pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>

                    {imageUrl && (
                      <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imageUrl}
                          alt={`How to pay via ${method.title}`}
                          className="w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Note */}
                    <div className="mt-5 flex items-start gap-2.5 bg-blue-50 border border-blue-100 rounded-xl p-4">
                      <Info size={15} className="text-[#25468F] flex-shrink-0 mt-0.5" />
                      <p className="text-[#25468F] text-xs leading-relaxed">{method.note}</p>
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
            <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-3">Tips</p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900">Payment Tips &amp; Reminders</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Clock,
                title: "Pay Before Due Date",
                desc: "Avoid service interruption by paying at least 2 days before your billing due date.",
                color: "text-[#25468F]",
                bg: "bg-blue-50",
              },
              {
                icon: CheckCircle2,
                title: "Keep Your Receipt",
                desc: "Always save payment receipts or screenshots as proof of payment for at least 30 days.",
                color: "text-[#0B7F3A]",
                bg: "bg-green-50",
              },
              {
                icon: AlertCircle,
                title: "Correct Customer ID",
                desc: "Always enter your correct Customer ID to ensure your payment is credited to the right account.",
                color: "text-orange-500",
                bg: "bg-orange-50",
              },
              {
                icon: Info,
                title: "Payment Not Reflected?",
                desc: "Contact our billing team with your receipt. Payments are usually updated within 2–4 business hours.",
                color: "text-[#2298D4]",
                bg: "bg-sky-50",
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className={`w-10 h-10 ${tip.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <tip.icon size={18} className={tip.color} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{tip.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{tip.desc}</p>
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
                <h2 className="text-3xl font-extrabold text-white mb-4">Need Billing Support?</h2>
                <p className="text-blue-200 text-base leading-relaxed mb-6">
                  If you have any issues with your payment, billing queries, or need help with your account, our team is ready to assist you.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Call Us", detail: settings.phone || "+977-1-XXXXXXX", sub: settings.office_hours || "Mon–Sat, 9 AM – 7 PM" },
                    { icon: MessageCircle, label: "WhatsApp / Viber", detail: `+977-${settings.whatsapp_number || "98XXXXXXXX"}`, sub: "Quick response guaranteed" },
                    { icon: Ticket, label: "Support Ticket", detail: "Create a billing ticket", sub: "Tracked & resolved within 24 hrs" },
                  ].map((contact) => (
                    <div key={contact.label} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <contact.icon size={18} className="text-[#2298D4]" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{contact.label}: {contact.detail}</p>
                        <p className="text-blue-300 text-xs">{contact.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">Can&apos;t find your Customer ID?</h3>
                  <p className="text-blue-200 text-sm mb-4">Your Customer ID is on your welcome email or installation receipt. Our support team can also help you retrieve it.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm">
                    Contact Support <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">Raise a Billing Ticket</h3>
                  <p className="text-blue-200 text-sm mb-4">For complex billing issues, create a support ticket and our billing team will resolve it within 24 hours.</p>
                  <Link href="/support-ticket" className="inline-flex items-center gap-2 bg-[#0B7F3A] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#065a28] transition-all text-sm">
                    Create Ticket <ArrowRight size={16} />
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

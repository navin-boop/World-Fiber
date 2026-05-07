import Link from "next/link";
import { FileText, ArrowRight, Shield, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | World Fiber Net Pvt. Ltd.",
  description:
    "Read the Terms and Conditions governing your use of World Fiber Net internet and IPTV services in Nepal.",
};

const lastUpdated = "January 1, 2025";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By subscribing to or using any service provided by World Fiber Net Pvt. Ltd. ("World Fiber Net", "we", "us", or "our"), including FTTH fiber internet and IPTV services, you ("Customer", "subscriber", or "you") agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our services.

These Terms and Conditions apply to all residential and commercial customers and shall govern the entire relationship between World Fiber Net and the Customer in connection with the provision of services.`,
  },
  {
    id: "services",
    title: "2. Services Provided",
    content: `World Fiber Net provides the following telecommunications services:

a) FTTH (Fiber to the Home) Internet: Ultra-fast fiber optic broadband internet for residential and commercial use, available at various speed tiers as specified in the subscribed package.

b) Corporate Fiber: Dedicated fiber internet solutions for businesses, with dedicated bandwidth and SLA guarantees as specified in the corporate agreement.

c) IPTV Services: Internet Protocol Television services including Net TV and Sky TV, subject to the terms of the respective IPTV providers and World Fiber Net's service conditions.

d) Internet + IPTV Combo: Bundled packages combining fiber internet and IPTV services.

e) Installation & Support: Professional installation, configuration, and ongoing technical support services.

All services are subject to availability in your area and to the technical feasibility of providing fiber connectivity to your premises.`,
  },
  {
    id: "subscription",
    title: "3. Subscription and Billing",
    content: `3.1 Payment Terms: Subscription fees are due on the same date each month as your service activation date. World Fiber Net will provide reminders via SMS or email before the due date.

3.2 Late Payment: If payment is not received within 7 days of the due date, World Fiber Net reserves the right to suspend or restrict your service without prior notice until outstanding amounts are paid in full.

3.3 Reconnection Fee: A reconnection fee may apply if your service has been suspended due to non-payment. The reconnection fee will be communicated to you at the time of reconnection.

3.4 Price Changes: World Fiber Net reserves the right to change pricing with a minimum of 30 days' written notice. Continued use of the service after the effective date of price changes constitutes acceptance of the new pricing.

3.5 Refunds: Monthly plan fees are generally non-refundable for the current billing period. Annual plan refunds are calculated on a pro-rata basis minus any applicable discounts received. Security deposits are refundable upon termination of service, subject to the condition of equipment returned.

3.6 Acceptable Payment Methods: Payments may be made via eSewa, Khalti, Mobile Banking, or bank transfer as described on our Recharge page.`,
  },
  {
    id: "equipment",
    title: "4. Equipment and Installation",
    content: `4.1 Installation: World Fiber Net will install fiber optic cables and associated equipment (ONT/ONU and router) at your premises. Standard installation is included in your plan; non-standard installations may incur additional charges.

4.2 Equipment Ownership: All equipment provided by World Fiber Net (including ONT, routers, and cables) remains the property of World Fiber Net unless explicitly sold to you. You are responsible for the safekeeping and proper use of this equipment.

4.3 Damage to Equipment: If equipment is damaged due to misuse, negligence, or theft, the Customer will be liable for the cost of replacement or repair.

4.4 Access to Premises: The Customer must provide World Fiber Net technicians with reasonable access to the premises for installation, maintenance, repair, and retrieval of equipment. World Fiber Net will provide reasonable notice for scheduled maintenance.

4.5 Modifications: The Customer must not modify, tamper with, or relocate the fiber equipment without prior written approval from World Fiber Net.`,
  },
  {
    id: "usage",
    title: "5. Acceptable Use Policy",
    content: `5.1 Lawful Use: The services must only be used for lawful purposes. World Fiber Net strictly prohibits the use of its services for:
- Illegal activities under the laws of Nepal
- Distributing malware, viruses, or harmful software
- Unauthorized access to third-party systems or networks
- Transmitting spam, phishing, or other unsolicited communications
- Copyright infringement or piracy
- Activities that disrupt or degrade the network for other users

5.2 Network Integrity: The Customer must not engage in any activity that may disrupt, degrade, or impair the performance of World Fiber Net's network or services.

5.3 No Resale: Residential plans may not be used to resell internet connectivity to third parties without explicit written permission from World Fiber Net. Corporate plans with resale provisions are subject to separate terms.

5.4 Compliance: The Customer is responsible for ensuring that all users accessing the internet through their connection comply with these Terms and Conditions and applicable laws.`,
  },
  {
    id: "iptv-terms",
    title: "6. IPTV-Specific Terms",
    content: `6.1 Third-Party Providers: IPTV services (Net TV and Sky TV) are provided in partnership with third-party IPTV operators. World Fiber Net acts as a distribution partner and is not responsible for the content, availability, or changes made by the respective IPTV providers.

6.2 Content Availability: Channel lineups, on-demand content, and features are subject to change by the IPTV provider without notice. World Fiber Net will endeavor to communicate significant changes but cannot guarantee content availability.

6.3 Device Compatibility: IPTV services are compatible with supported devices as specified by the respective IPTV platforms. World Fiber Net does not guarantee compatibility with all devices.

6.4 IPTV Subscription: IPTV subscriptions are linked to your World Fiber Net account and may not be transferred or shared beyond the number of streams permitted by your plan.

6.5 Misuse: Recording, redistributing, or publicly displaying IPTV content without authorization from the content owners is strictly prohibited and may result in immediate service termination.`,
  },
  {
    id: "service-levels",
    title: "7. Service Levels and Availability",
    content: `7.1 Uptime Commitment: World Fiber Net endeavors to maintain a network uptime of 99.9% on an annual basis, excluding planned maintenance windows.

7.2 Planned Maintenance: World Fiber Net may occasionally perform planned maintenance that requires service interruption. We will provide advance notice of planned maintenance where possible.

7.3 Force Majeure: World Fiber Net shall not be liable for service interruptions caused by events beyond its reasonable control, including but not limited to natural disasters, government actions, power outages, third-party network failures, or acts of god.

7.4 Speed Guarantee: Internet speeds are "up to" the subscribed plan speed and may vary based on network conditions, device capabilities, and other factors. Fiber to the Home (FTTH) technology provides the best possible speeds.

7.5 Support Response: World Fiber Net commits to responding to support tickets within 24 hours and to high/urgent priority issues within 2–4 hours during operational hours.`,
  },
  {
    id: "privacy",
    title: "8. Data Privacy",
    content: `World Fiber Net collects and processes customer data in accordance with our Privacy Policy. By subscribing to our services, you consent to the collection, use, and storage of your personal information as described in the Privacy Policy.

Customer data is used solely for service delivery, billing, and communication purposes. World Fiber Net will not sell, rent, or share your personal data with third parties except as required by law or as necessary to deliver the service.

Please refer to our Privacy Policy for full details on how we handle your data.`,
  },
  {
    id: "termination",
    title: "9. Termination of Service",
    content: `9.1 By Customer: You may terminate your subscription at any time by providing 30 days' written notice to World Fiber Net. Early termination of annual plans may be subject to a termination fee as specified in your plan.

9.2 By World Fiber Net: World Fiber Net reserves the right to suspend or terminate your service without notice in the event of:
- Non-payment of dues
- Violation of the Acceptable Use Policy
- Provision of false information during sign-up
- Activities causing harm to the network or other customers
- Non-compliance with these Terms and Conditions

9.3 Equipment Return: Upon termination of service, the Customer must facilitate the retrieval of World Fiber Net equipment within 14 days. Failure to return equipment in good condition may result in charges.`,
  },
  {
    id: "liability",
    title: "10. Limitation of Liability",
    content: `10.1 World Fiber Net's liability to you in connection with the provision of services shall be limited to the monthly subscription fees paid by you for the affected period.

10.2 World Fiber Net shall not be liable for any indirect, incidental, consequential, or special damages arising from the use or inability to use our services, including but not limited to loss of business, data, or profits.

10.3 World Fiber Net makes no warranties, express or implied, regarding the fitness of the service for any particular purpose.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law and Disputes",
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising from or relating to these Terms and Conditions or the services provided by World Fiber Net shall be subject to the exclusive jurisdiction of the courts of Nepal.

In the event of a dispute, both parties agree to first attempt resolution through good faith negotiation. If resolution cannot be reached, the matter shall be referred to arbitration in accordance with applicable Nepali law.`,
  },
  {
    id: "amendments",
    title: "12. Amendments to Terms",
    content: `World Fiber Net reserves the right to amend these Terms and Conditions at any time. Changes will be communicated to customers via email, SMS, or notice on our website at least 14 days before the effective date. Continued use of the service after the effective date constitutes acceptance of the amended terms.`,
  },
  {
    id: "contact-legal",
    title: "13. Contact for Legal Matters",
    content: `For any legal queries, complaints, or notices relating to these Terms and Conditions, please contact:

World Fiber Net Pvt. Ltd.
Legal Department
Kathmandu, Nepal
Email: legal@worldfibernet.com.np
Phone: +977-1-XXXXXXX

For general support and service enquiries, please visit our Contact page or create a Support Ticket.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[300px] lg:min-h-[360px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] flex items-center">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(ellipse at 20% 50%, #2298D4 0%, transparent 50%)` }} />
        </div>
        <div className="container-custom relative z-10 py-14 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <FileText size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">Legal Document</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Terms &amp; <span className="text-[#2298D4]">Conditions</span>
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            Please read these terms carefully before using World Fiber Net's services. Last updated: {lastUpdated}.
          </p>
        </div>
      </section>

      {/* Notice Bar */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="container-custom py-4">
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm">
              By using our services, you agree to these Terms and Conditions. If you have questions, please{" "}
              <Link href="/contact" className="font-bold underline underline-offset-2">contact us</Link>.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar TOC */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24">
                <h3 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                  <FileText size={14} className="text-[#25468F]" />
                  Table of Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-xs text-gray-500 hover:text-[#25468F] hover:bg-blue-50 px-3 py-2 rounded-lg transition-all"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Shield size={22} className="text-[#25468F]" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-gray-900 text-lg">World Fiber Net Pvt. Ltd.</h2>
                    <p className="text-gray-500 text-xs">Terms and Conditions — Effective: {lastUpdated}</p>
                  </div>
                </div>

                <div className="space-y-10">
                  {sections.map((section) => (
                    <div key={section.id} id={section.id} className="scroll-mt-24">
                      <h2 className="text-lg font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                        {section.title}
                      </h2>
                      <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-gray-400 text-xs text-center">
                    World Fiber Net Pvt. Ltd. — Registered in Nepal. NTA Licensed ISP.
                    <br />
                    These Terms and Conditions were last updated on {lastUpdated}.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-extrabold mb-3">Have Questions About Our Terms?</h3>
                <p className="text-blue-200 text-sm mb-6">
                  Our team is happy to clarify any aspect of these terms. You may also review our Privacy Policy for details on how we handle your data.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-[#25468F] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
                  >
                    Contact Us <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-5 py-3 rounded-xl transition-all text-sm"
                  >
                    Privacy Policy
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

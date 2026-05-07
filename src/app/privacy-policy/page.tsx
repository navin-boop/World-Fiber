import Link from "next/link";
import { Lock, Shield, Eye, Database, UserCheck, AlertCircle, ArrowRight, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | World Fiber Net Pvt. Ltd.",
  description:
    "Read World Fiber Net's Privacy Policy to understand how we collect, use, protect, and manage your personal data.",
};

const lastUpdated = "January 1, 2025";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    icon: Lock,
    content: `World Fiber Net Pvt. Ltd. ("World Fiber Net", "we", "us", or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, store, and protect the personal data of our customers and website visitors in accordance with applicable laws of Nepal.

By subscribing to or using our services, or by visiting our website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.

If you have any questions about this Privacy Policy, please contact us at privacy@worldfibernet.com.np or via our Contact page.`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    icon: Database,
    content: `We collect the following types of information from you:

2.1 Personal Identification Information:
- Full name
- Government-issued ID (Citizenship Certificate, Passport, or Driving License number)
- Home or business address
- Contact phone number(s)
- Email address

2.2 Account and Service Information:
- Customer ID and account details
- Subscribed service plans and package details
- Installation address and technician visit records
- Payment history and billing records
- Support ticket history and correspondence

2.3 Technical and Usage Data:
- IP address assigned to your connection
- Network usage statistics (upload/download volumes)
- Connection logs and session timestamps
- Device information (for IPTV device registration)

2.4 Communication Records:
- Records of calls, emails, or messages made to or from our support team
- WhatsApp or Viber message logs for support interactions

2.5 Website Data:
- Cookies and session data when you visit our website
- Browser type, device type, and referring URL
- Pages visited and duration of visit

We collect only the minimum data necessary to provide our services and meet our legal obligations.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    icon: Eye,
    content: `World Fiber Net uses your personal information for the following purposes:

3.1 Service Delivery: To provision, manage, and maintain your internet and IPTV services, including installations, upgrades, and disconnections.

3.2 Billing and Payments: To process subscription payments, issue invoices, manage billing cycles, and handle refund requests.

3.3 Customer Support: To provide technical support, process support tickets, and resolve service complaints in a timely manner.

3.4 Communication: To send service notifications, maintenance alerts, billing reminders, and important announcements via SMS, email, or phone.

3.5 Identity Verification: To verify your identity during service application, account changes, or sensitive support interactions.

3.6 Legal Compliance: To comply with our obligations under Nepali telecommunications law, regulatory requirements of the Nepal Telecommunications Authority (NTA), and any court orders or lawful government requests.

3.7 Service Improvement: To analyze usage patterns, identify technical issues, and improve the quality of our network and services.

3.8 Marketing: With your consent, to send promotional offers, service updates, and information about new plans. You may opt out of marketing communications at any time.

We will never use your personal data for purposes incompatible with those listed above without your explicit consent.`,
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing and Disclosure",
    icon: UserCheck,
    content: `World Fiber Net does not sell, rent, or trade your personal information to third parties. We may share your data only in the following limited circumstances:

4.1 Service Partners: We may share necessary data with IPTV service providers (Net TV and Sky TV operators) and technology partners strictly for the purpose of delivering the subscribed services.

4.2 Payment Processors: Payment information may be shared with payment gateway operators (such as eSewa or Khalti) for transaction processing. We do not store full payment card details.

4.3 Legal Authorities: We may disclose personal information to government authorities, law enforcement agencies, or regulatory bodies (including the NTA) when required by law, court order, or lawful demand.

4.4 Business Transfers: In the event of a merger, acquisition, or sale of assets, customer data may be transferred to the acquiring entity, subject to the same privacy protections.

4.5 Professional Advisors: We may share data with our legal counsel, auditors, or other professional advisors under strict confidentiality obligations.

In all cases, we limit data sharing to what is necessary for the stated purpose.`,
  },
  {
    id: "data-security",
    title: "5. Data Security",
    icon: Shield,
    content: `World Fiber Net takes the security of your personal information seriously and implements appropriate technical and organizational measures to protect it against unauthorized access, disclosure, alteration, or destruction.

Our security measures include:

- Encrypted storage of sensitive customer data
- Secure, access-controlled internal systems
- Role-based access controls limiting employee data access to what is necessary for their role
- Regular security reviews and updates to our systems
- Network monitoring to detect unauthorized access or anomalies
- Physical security measures at our offices and data infrastructure

While we employ best practices to protect your data, no system is completely impenetrable. In the event of a data breach that may affect your rights, we will notify affected customers and relevant authorities in accordance with applicable law.`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    icon: Database,
    content: `We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including:

- Active Customers: Data is retained throughout the duration of your subscription plus a minimum of 3 years after termination, as required by Nepali law and for audit/dispute resolution purposes.

- Billing Records: Financial transaction records are retained for 7 years in compliance with tax and accounting regulations.

- Support Records: Support ticket records and correspondence are retained for 2 years after the ticket is closed.

- Website Analytics: Anonymized website usage data may be retained indefinitely for trend analysis. Identifiable session data is retained for no more than 90 days.

When data is no longer required, it is securely deleted or anonymized in a manner that prevents re-identification.`,
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    icon: UserCheck,
    content: `As a customer of World Fiber Net, you have the following rights regarding your personal data:

7.1 Right of Access: You may request a copy of the personal information we hold about you at any time.

7.2 Right to Rectification: If any of your personal data is inaccurate or incomplete, you have the right to request that we correct it.

7.3 Right to Erasure: You may request deletion of your personal data, subject to our legal obligations to retain certain records.

7.4 Right to Object: You may object to the processing of your personal data for marketing purposes or where processing is based on legitimate interests.

7.5 Right to Withdraw Consent: Where processing is based on your consent, you may withdraw consent at any time without affecting the lawfulness of prior processing.

7.6 Right to Complain: If you believe your data rights have been violated, you may lodge a complaint with the Nepal Telecommunications Authority (NTA) or other relevant authority.

To exercise any of the above rights, please contact us at privacy@worldfibernet.com.np or through our Contact page. We will respond to your request within 30 days.`,
  },
  {
    id: "cookies",
    title: "8. Cookies and Website Tracking",
    icon: Eye,
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze site usage.

Types of cookies we use:

8.1 Essential Cookies: Necessary for the website to function correctly, such as session cookies and security cookies.

8.2 Analytics Cookies: Help us understand how visitors interact with our website (e.g., pages viewed, time spent) so we can improve the user experience. We use anonymized analytics data only.

8.3 Preference Cookies: Remember your preferences such as language settings or previously viewed content.

You can control cookies through your browser settings. Disabling certain cookies may affect website functionality. Our website does not use third-party advertising cookies or cross-site tracking.`,
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    icon: Shield,
    content: `World Fiber Net's services are not directed at children under the age of 16. We do not knowingly collect personal information from minors. If a parent or guardian believes their child has provided personal information to us, please contact us immediately and we will promptly delete such information.

For family plans and household subscriptions, the account holder must be an adult (18 years or older) who takes responsibility for appropriate use of the service by all household members.`,
  },
  {
    id: "third-party",
    title: "10. Third-Party Services and Links",
    icon: Lock,
    content: `Our website and services may include links to third-party websites or integrate with third-party platforms (such as eSewa, Khalti, Net TV, or Sky TV portals). This Privacy Policy does not apply to those third-party services.

We encourage you to review the privacy policies of any third-party services you interact with. World Fiber Net is not responsible for the privacy practices or content of third-party websites.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    icon: AlertCircle,
    content: `World Fiber Net may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or technology. We will notify customers of significant changes via email, SMS, or a notice on our website at least 14 days before the changes take effect.

We encourage you to review this Privacy Policy periodically. The "Last Updated" date at the top of this page indicates when the policy was most recently revised.

Continued use of our services after the effective date of any changes constitutes your acceptance of the updated Privacy Policy.`,
  },
  {
    id: "contact-privacy",
    title: "12. Contact Us About Privacy",
    icon: Mail,
    content: `If you have any questions, concerns, or requests relating to this Privacy Policy or the handling of your personal data, please contact:

World Fiber Net Pvt. Ltd.
Privacy Officer
Kathmandu, Nepal
Email: privacy@worldfibernet.com.np
Phone: +977-1-XXXXXXX

We are committed to resolving privacy concerns promptly and transparently. For general support, please visit our Contact page or create a Support Ticket.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[300px] lg:min-h-[360px] overflow-hidden bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#0B7F3A] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-15"
            style={{ backgroundImage: `radial-gradient(ellipse at 20% 50%, #2298D4 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, #0B7F3A 0%, transparent 50%)` }}
          />
        </div>
        <div className="container-custom relative z-10 py-14 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Lock size={14} className="text-[#2298D4]" />
            <span className="text-sm font-medium text-blue-100">Your Privacy Matters</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Privacy <span className="text-[#2298D4]">Policy</span>
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            We are committed to protecting your personal information. Learn how World Fiber Net collects, uses, and safeguards your data.
            <br />
            <span className="text-blue-300 text-sm">Last Updated: {lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {[
              { icon: Shield, label: "Data Security", detail: "Encrypted & protected" },
              { icon: Lock, label: "No Data Selling", detail: "Your data stays private" },
              { icon: UserCheck, label: "Your Rights", detail: "Access & control your data" },
              { icon: Eye, label: "Transparency", detail: "Clear, honest practices" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-2">
                  <item.icon size={18} className="text-[#25468F]" />
                </div>
                <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Sidebar TOC */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24">
                <h3 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                  <Lock size={14} className="text-[#25468F]" />
                  Sections
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#25468F] hover:bg-blue-50 px-3 py-2 rounded-lg transition-all"
                    >
                      <section.icon size={12} className="flex-shrink-0" />
                      <span className="leading-snug">{section.title}</span>
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
                    <Lock size={22} className="text-[#25468F]" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-gray-900 text-lg">Privacy Policy</h2>
                    <p className="text-gray-500 text-xs">World Fiber Net Pvt. Ltd. — Effective: {lastUpdated}</p>
                  </div>
                </div>

                <div className="space-y-10">
                  {sections.map((section) => (
                    <div key={section.id} id={section.id} className="scroll-mt-24">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <section.icon size={15} className="text-[#25468F]" />
                        </div>
                        <h2 className="text-lg font-extrabold text-gray-900">{section.title}</h2>
                      </div>
                      <div className="pl-11">
                        <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line border-l-2 border-blue-50 pl-5">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100 text-center">
                  <p className="text-gray-400 text-xs">
                    World Fiber Net Pvt. Ltd. — NTA Licensed ISP, Nepal
                    <br />
                    This Privacy Policy was last reviewed and updated on {lastUpdated}.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-[#25468F] to-[#071A3D] rounded-3xl p-8 text-white">
                <div className="grid sm:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-extrabold mb-3">Privacy Questions?</h3>
                    <p className="text-blue-200 text-sm mb-5">
                      If you have concerns about how we handle your data or wish to exercise your data rights, our team is ready to assist you.
                    </p>
                    <div className="space-y-2">
                      {[
                        "Request a copy of your data",
                        "Correct inaccurate information",
                        "Opt out of marketing communications",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-blue-200">
                          <div className="w-1.5 h-1.5 bg-[#2298D4] rounded-full flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#25468F] font-bold px-5 py-3 rounded-xl hover:bg-blue-50 transition-all text-sm"
                    >
                      Contact Privacy Team <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/terms-and-conditions"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-5 py-3 rounded-xl transition-all text-sm"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

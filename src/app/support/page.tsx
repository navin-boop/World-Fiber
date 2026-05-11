"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MessageCircle,
  Wifi,
  CreditCard,
  User,
  Tv,
  Home,
  ArrowRight,
  Shield,
  Router,
  MapPin,
  FileText,
  HelpCircle,
} from "lucide-react";

interface Section {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: { q: string; a: string }[];
}

const sections: Section[] = [
  {
    id: "new-connection",
    icon: <Home size={20} />,
    title: "New Connection & Sales",
    subtitle: "Getting started with World Fiber Net",
    items: [
      { q: "How do I apply for a new fiber internet connection?", a: "You can apply by visiting our Contact page and filling out the enquiry form, calling us at 01-5970200, or sending a WhatsApp message. Our team will conduct a free site survey within 24–48 hours and schedule your installation at a time that suits you." },
      { q: "Which areas are covered by World Fiber Net?", a: "We currently provide fiber internet in Kathmandu, Lalitpur, Bhaktapur, and surrounding areas. Coverage is expanding regularly. Contact us to check availability at your specific address." },
      { q: "How long does installation take?", a: "Standard installation takes 2–4 hours depending on your location and the complexity of the setup. Our technicians handle everything from fiber cabling to router configuration and Wi-Fi optimization." },
      { q: "What documents are required for a new connection?", a: "You will need a copy of your citizenship card (or passport for foreign nationals) and a recent utility bill or rental agreement showing your address. Business connections may require additional company registration documents." },
      { q: "What is the installation charge?", a: "The one-time installation charge is Rs 2,500, which covers fiber cable laying, ONT/router setup, and Wi-Fi configuration. This fee is included in most of our promotional offers — check our Offers page for the latest deals." },
    ],
  },
  {
    id: "customer-id",
    icon: <User size={20} />,
    title: "Customer ID & Account",
    subtitle: "Managing your World Fiber Net account",
    items: [
      { q: "What is my Customer ID?", a: "Your Customer ID (also called Username) is the unique identifier assigned to your account when your connection is set up. You can find it on your welcome letter, installation receipt, or by calling our support line at 01-5970200." },
      { q: "How do I update my contact details?", a: "To update your registered phone number, email address, or billing address, please call our support team at 01-5970200 or email support@worldfibernet.net.np with your Customer ID and the updated details." },
      { q: "Can I transfer my connection to a new address?", a: "Yes. Service relocation is available subject to coverage at the new address. Contact us at least 3 days before your move. Relocation charges may apply depending on the distance and complexity of the new installation." },
      { q: "How do I request a service suspension?", a: "You can temporarily suspend your service for up to 3 months per year by contacting our support team. Suspension requests must be submitted at least 7 days in advance. Your account and data are preserved during the suspension period." },
    ],
  },
  {
    id: "web-portal",
    icon: <Shield size={20} />,
    title: "Customer Web Portal",
    subtitle: "Manage your account online",
    items: [
      { q: "How do I log in to the customer portal?", a: "Visit support.worldfibernet.net.np and enter your Customer ID and password. If it is your first time logging in, use the default password provided in your welcome letter and change it after logging in." },
      { q: "I forgot my portal password. What do I do?", a: "On the login page, click 'Forgot Password' and enter your registered email address or Customer ID. You will receive a reset link. If you do not receive it within a few minutes, check your spam folder or call 01-5970200 for assistance." },
      { q: "What can I do on the customer portal?", a: "Through the portal you can view your current plan and remaining data, check your usage history, download invoices, renew your subscription, and raise support tickets." },
    ],
  },
  {
    id: "billing",
    icon: <CreditCard size={20} />,
    title: "Bill & Payment",
    subtitle: "Paying your World Fiber Net bill",
    items: [
      { q: "How can I pay my bill?", a: "You can pay via eSewa, Khalti, or ConnectIPS (online). Cash and bank transfer payments are also accepted. Visit our Recharge page for step-by-step guides for each payment method." },
      { q: "When is my bill due?", a: "Bills are generated on your monthly renewal date. Payment is due within 7 days of the bill date. Services may be suspended if payment is not received within 15 days of the due date." },
      { q: "I paid but my internet is still not working. What should I do?", a: "Please allow up to 15 minutes for your payment to be processed and your service to be reactivated. If it is still not working after that, contact us at 01-5970200 or WhatsApp with your payment receipt and Customer ID." },
      { q: "Can I get a printed invoice?", a: "Digital invoices are available to download from the customer portal at any time. If you need a printed invoice for official purposes, please contact our billing team at billing@worldfibernet.net.np." },
      { q: "Are the listed prices VAT inclusive?", a: "Yes. All prices displayed on our website and in our plans are fully inclusive of 13% VAT. There are no hidden charges." },
    ],
  },
  {
    id: "technical",
    icon: <Wifi size={20} />,
    title: "Technical Support",
    subtitle: "Troubleshooting your internet connection",
    items: [
      { q: "My internet is not working. What should I check first?", a: "Start with the basics: (1) Check if the router power light is on. (2) Check if the fiber ONT device has a steady green light. (3) Restart both the ONT and router by unplugging them for 30 seconds, then plugging them back in. (4) Check if other devices on your network are also affected. If the issue persists, call 01-5970200." },
      { q: "My internet speed is slower than expected. Why?", a: "Speed can be affected by: the number of devices connected, the type of connection (Wi-Fi vs wired — wired is always faster), your device's hardware, background downloads, or congestion during peak hours. Run a speed test at fast.com or speedtest.net while connected via LAN cable for the most accurate result." },
      { q: "How do I know if there is a service outage in my area?", a: "You can check for known outages by calling our 24/7 support line at 01-5970200 or messaging us on WhatsApp/Viber. We post maintenance notices on our Facebook page as well." },
      { q: "Can a technician visit my home for support?", a: "Yes, home visits are available. Standard technical visits within our service area are free of charge if the issue is on our network side. If the issue is on your premises (such as damaged internal wiring), additional charges may apply. Call 01-5970200 to book a visit." },
    ],
  },
  {
    id: "router",
    icon: <Router size={20} />,
    title: "Router & Wi-Fi Help",
    subtitle: "Getting the best from your Wi-Fi",
    items: [
      { q: "What is the default Wi-Fi password for my router?", a: "The default Wi-Fi name (SSID) and password are printed on the sticker on the bottom or back of your router. If you have changed it and forgotten it, you can reset the router to factory defaults by holding the reset button for 10 seconds — but this will clear all your custom settings." },
      { q: "How do I change my Wi-Fi name and password?", a: "Open a browser on a device connected to your Wi-Fi and go to 192.168.1.1 (or 192.168.0.1). Log in with the admin credentials on your router sticker. Navigate to Wireless Settings to update the SSID and password. Contact support if you need help." },
      { q: "My Wi-Fi signal is weak in some rooms. What can I do?", a: "Try repositioning your router to a central, elevated, open location. Avoid placing it near walls, microwaves, or other electronics. For larger homes or offices, we recommend a mesh Wi-Fi system or Wi-Fi extenders. Contact us for a site assessment." },
      { q: "Can I use my own router?", a: "Yes. You can connect your own router to the fiber ONT provided by World Fiber Net. You will need to configure PPPOE settings with your username and password (found in your welcome letter). Our technicians can assist during installation or via a support call." },
    ],
  },
  {
    id: "iptv",
    icon: <Tv size={20} />,
    title: "IPTV Support",
    subtitle: "Help with your IPTV service",
    items: [
      { q: "Which plans include IPTV?", a: "IPTV is included in our Home Plus 100 (Rs 1,050/mo), Home Premium 150 (Rs 1,243/mo), and Hotel 200 (Rs 1,650/mo) plans. You can also visit our IPTV page to see dedicated IPTV add-on options." },
      { q: "My IPTV channels are not loading or buffering. What should I do?", a: "First, restart your IPTV set-top box by unplugging it for 30 seconds. Also restart your router. Ensure your internet plan supports IPTV and that your connection is stable. If the issue continues, call 01-5970200 and have your Customer ID ready." },
      { q: "Can I watch IPTV on my phone or laptop?", a: "Yes, our IPTV service supports viewing on smartphones, tablets, and computers in addition to your TV. Please contact our support team for the app download link and setup instructions." },
      { q: "How many channels are available on IPTV?", a: "Our IPTV service includes 200+ channels covering Nepali, Hindi, English, and sports channels. The full channel list is available on our IPTV page." },
    ],
  },
  {
    id: "fup",
    icon: <FileText size={20} />,
    title: "Fair Usage Policy (FUP)",
    subtitle: "Understanding your data usage",
    items: [
      { q: "What is FUP (Fair Usage Policy)?", a: "FUP is a data management policy that ensures all customers get a fair share of network resources during peak hours. After your monthly FUP data limit is reached, your speed may be reduced for the remainder of that billing cycle." },
      { q: "What is the FUP limit for my plan?", a: "FUP limits vary by plan. Please check your plan details on the Packages page or contact our support team for the specific limit applicable to your subscription." },
      { q: "How do I check my remaining FUP data?", a: "You can check your current usage and remaining FUP data by logging in to the customer portal at support.worldfibernet.net.np or by calling 01-5970200." },
      { q: "Can I purchase additional data once my FUP limit is reached?", a: "Yes. Top-up data packs are available. Contact our billing team at 01-5970200 or billing@worldfibernet.net.np to purchase additional data for your account." },
    ],
  },
  {
    id: "relocation",
    icon: <MapPin size={20} />,
    title: "Service Relocation",
    subtitle: "Moving your connection to a new address",
    items: [
      { q: "Can I shift my fiber connection to a new house or office?", a: "Yes, relocation is available subject to coverage at the new address. Please contact us at least 3 days before your planned moving date. A relocation charge may apply depending on the distance and new setup requirements." },
      { q: "Will I lose my account or billing history during relocation?", a: "No. Your Customer ID, account history, and billing records remain unchanged. Only the physical installation address changes." },
      { q: "How do I request a relocation?", a: "Call us at 01-5970200 or email support@worldfibernet.net.np with your Customer ID, current address, and new address. Our team will confirm coverage and schedule the relocation." },
    ],
  },
  {
    id: "terms",
    icon: <HelpCircle size={20} />,
    title: "Terms of Service",
    subtitle: "Important policies and conditions",
    items: [
      { q: "Where can I find the full Terms & Conditions?", a: "Our full Terms of Service are provided when you sign up for a connection and are available on request by calling 01-5970200 or emailing support@worldfibernet.net.np." },
      { q: "What is the contract period for home fiber plans?", a: "Our plans are on a monthly rolling contract with no long-term lock-in. You can cancel or change your plan at any time by giving 7 days' notice before your next billing date." },
      { q: "What happens if I cancel my subscription?", a: "To cancel, contact us at 01-5970200 or email support@worldfibernet.net.np at least 7 days before your renewal date. Please note that the ONT (fiber modem) provided by World Fiber Net remains our property and must be returned upon cancellation. Installation charges are non-refundable." },
    ],
  },
];

function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between text-left px-5 py-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-800 text-sm pr-4">{item.q}</span>
            {open === i ? <ChevronUp size={16} className="flex-shrink-0 text-[#25468F]" /> : <ChevronDown size={16} className="flex-shrink-0 text-gray-400" />}
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function SupportPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <section className="bg-gradient-to-br from-[#071A3D] via-[#25468F] to-[#071A3D] py-20">
        <div className="container-custom text-center text-white">
          <p className="text-[#2298D4] font-bold text-sm uppercase tracking-widest mb-3">Help Center</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="lang-en">World Fiber Net Support</span>
            <span className="lang-ne">विश्व फाइबर नेट सहायता केन्द्र</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            <span className="lang-en">Find answers to common questions or get in touch with our support team.</span>
            <span className="lang-ne">सामान्य प्रश्नहरूको जवाफ खोज्नुहोस् वा हाम्रो सहायता टोलीसँग सम्पर्क गर्नुहोस्।</span>
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <a href="tel:015970200" className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#25468F] hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#25468F] transition-colors">
                <Phone size={18} className="text-[#25468F] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Call Us</div>
                <div className="font-bold text-gray-800 text-sm">01-5970200</div>
              </div>
            </a>
            <a href="https://wa.me/9779801234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-green-500 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                <MessageCircle size={18} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">WhatsApp</div>
                <div className="font-bold text-gray-800 text-sm">Chat with us</div>
              </div>
            </a>
            <a href="mailto:support@worldfibernet.net.np" className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#0B7F3A] hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center group-hover:bg-[#0B7F3A] transition-colors">
                <Mail size={18} className="text-[#0B7F3A] group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide">Email</div>
                <div className="font-bold text-gray-800 text-sm">support@worldfibernet.net.np</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F8FA]">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {sections.map((section) => {
              const isOpen = activeSection === section.id;
              return (
                <div key={section.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    onClick={() => setActiveSection(isOpen ? null : section.id)}
                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? "bg-[#25468F] text-white" : "bg-blue-50 text-[#25468F]"}`}>
                        {section.icon}
                      </div>
                      <div>
                        <div className="font-bold text-gray-800">{section.title}</div>
                        <div className="text-sm text-gray-400">{section.subtitle}</div>
                      </div>
                    </div>
                    {isOpen ? <ChevronUp size={20} className="flex-shrink-0 text-[#25468F]" /> : <ChevronDown size={20} className="flex-shrink-0 text-gray-300" />}
                  </button>
                  {isOpen && (
                    <div className="border-t border-gray-100">
                      <Accordion items={section.items} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white">
        <div className="container-custom max-w-3xl">
          <div className="bg-gradient-to-r from-[#25468F] to-[#071A3D] rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-extrabold mb-2">Still need help?</h2>
            <p className="text-blue-200 mb-6">Our support team is available Sunday – Friday, 6:00 AM – 10:00 PM.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="px-6 py-3 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </Link>
              <a href="https://support.worldfibernet.net.np/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
                Customer Portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

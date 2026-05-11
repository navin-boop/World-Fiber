import { Users, MapPin, Wifi, Headphones } from "lucide-react";

const stats = [
  { icon: Users,      value: "10,000+", en: "Happy Customers",  ne: "खुसी ग्राहकहरू" },
  { icon: MapPin,     value: "5+",      en: "Districts",         ne: "जिल्लाहरू" },
  { icon: Wifi,       value: "99.9%",   en: "Uptime",            ne: "अपटाइम" },
  { icon: Headphones, value: "24/7",    en: "Support",           ne: "सहायता" },
];

export default function StatsStrip() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container-custom py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.en} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-[#25468F]" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#25468F] leading-none">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">
                    <span className="lang-en">{stat.en}</span>
                    <span className="lang-ne">{stat.ne}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

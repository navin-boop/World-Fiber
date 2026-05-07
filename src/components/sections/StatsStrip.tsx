import { Users, MapPin, Wifi, Headphones } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: MapPin, value: "5+", label: "Districts" },
  { icon: Wifi, value: "99.9%", label: "Uptime" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

export default function StatsStrip() {
  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container-custom py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-[#25468F]" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#25468F] leading-none">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

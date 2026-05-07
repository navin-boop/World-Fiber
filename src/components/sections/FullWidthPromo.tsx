import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface FullWidthPromoProps {
  title?: string;
  highlight?: string;
  description?: string;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
}

export default function FullWidthPromo({
  title = "Experience Nepal's Fastest",
  highlight = "Fiber Internet",
  description = "Built on 100% Fiber to the Home (FTTH) network for ultra-fast speed, unlimited data and unmatched reliability.",
  cta1Text = "Get 1 Month FREE",
  cta1Link = "/contact#new-connection",
  cta2Text = "View Plans",
  cta2Link = "/packages",
}: FullWidthPromoProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#0e2a5a] to-[#25468F]">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 80% 50%, #2298D4 0%, transparent 60%),
                              radial-gradient(ellipse at 10% 80%, #0B7F3A 0%, transparent 50%)`,
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice">
          <path d="M0,100 Q200,50 400,120 T800,100 T1200,80" stroke="#2298D4" strokeWidth="2" fill="none" />
          <path d="M0,250 Q300,180 600,280 T1200,220" stroke="#0B7F3A" strokeWidth="1.5" fill="none" />
          <path d="M0,380 Q400,320 700,400 T1200,360" stroke="#2298D4" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0B7F3A] animate-pulse"></div>
              <span className="text-sm font-medium text-blue-100">100% Fiber to the Home</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              {title}{" "}
              <span className="text-[#2298D4]">{highlight}</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={cta1Link}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0B7F3A] hover:bg-[#065a28] text-white font-bold rounded-xl transition-all shadow-lg"
              >
                {cta1Text}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={cta2Link}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#25468F] font-bold rounded-xl hover:bg-blue-50 transition-all shadow-lg"
              >
                {cta2Text}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="text-white grid grid-cols-2 gap-4">
            {[
              { label: "Unlimited Data", desc: "No data caps, no hidden charges" },
              { label: "Ultra-Fast Speed", desc: "Up to 200 Mbps for all plans" },
              { label: "99.9% Uptime", desc: "Reliable fiber infrastructure" },
              { label: "24/7 Support", desc: "Local team always available" },
            ].map((feature) => (
              <div key={feature.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
                <CheckCircle2 size={24} className="text-[#0B7F3A] mb-3" />
                <div className="font-bold text-base mb-1">{feature.label}</div>
                <div className="text-blue-200 text-sm">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/utils";
import PackageTermsModal from "@/components/ui/PackageTermsModal";

async function getFeaturedPackages() {
  try {
    const packages = await prisma.package.findMany({
      where: { isActive: true, category: { in: ["HOME_FIBER", "IPTV_COMBO"] } },
      orderBy: [{ sortOrder: "asc" }],
      take: 3,
    });
    return packages;
  } catch {
    return [];
  }
}

export default async function PackagesPreview() {
  const packages = await getFeaturedPackages();

  // Fallback packages if no data
  const displayPackages = packages.length > 0 ? packages : [
    {
      id: "1", name: "Starter Fiber", speed: "25 Mbps", price: 699,
      billingCycle: "monthly", isPopular: false,
      features: JSON.stringify(["Unlimited Data", "High Speed Internet", "24/7 Support"]),
      description: "Ideal for browsing & streaming",
      termsTitle: "Terms & Conditions", termsContent: "Standard terms apply.",
      category: "HOME_FIBER", slug: "starter-fiber", imageUrl: "", isActive: true, sortOrder: 1,
      createdAt: new Date(), updatedAt: new Date(),
    },
    {
      id: "2", name: "Home Fiber 100", speed: "100 Mbps", price: 1299,
      billingCycle: "monthly", isPopular: true,
      features: JSON.stringify(["Unlimited Data", "High Speed Internet", "24/7 Support"]),
      description: "Ideal for streaming & working",
      termsTitle: "Terms & Conditions", termsContent: "Standard terms apply.",
      category: "HOME_FIBER", slug: "home-fiber-100", imageUrl: "", isActive: true, sortOrder: 2,
      createdAt: new Date(), updatedAt: new Date(),
    },
    {
      id: "3", name: "Internet + IPTV Combo", speed: "100 Mbps + IPTV", price: 1799,
      billingCycle: "monthly", isPopular: false,
      features: JSON.stringify(["100 Mbps Fiber Internet", "Net TV + Sky TV", "Unlimited Data", "24/7 Support"]),
      description: "Internet with Net TV & Sky TV",
      termsTitle: "Terms & Conditions", termsContent: "Standard terms apply.",
      category: "IPTV_COMBO", slug: "internet-iptv-combo-100", imageUrl: "", isActive: true, sortOrder: 4,
      createdAt: new Date(), updatedAt: new Date(),
    },
  ];

  return (
    <section className="section-padding bg-[#F7F8FA]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-2">
            <span className="lang-en">Pricing</span>
            <span className="lang-ne">मूल्य निर्धारण</span>
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#171717] mb-4">
            <span className="lang-en">Simple, Transparent Pricing</span>
            <span className="lang-ne">सरल, पारदर्शी मूल्य निर्धारण</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            <span className="lang-en">Choose the perfect plan for your home or business. No hidden fees.</span>
            <span className="lang-ne">तपाईंको घर वा व्यवसायका लागि उत्तम प्लान छान्नुहोस्। कुनै लुकेको शुल्क छैन।</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {displayPackages.map((pkg) => {
            const features = JSON.parse(pkg.features) as string[];
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl flex flex-col overflow-hidden transition-all duration-200 ${
                  pkg.isPopular
                    ? "border-2 border-[#25468F] shadow-2xl scale-105 bg-white"
                    : "border border-gray-200 shadow-sm bg-white hover:shadow-md"
                }`}
              >
                {pkg.isPopular && (
                  <div className="bg-[#25468F] text-white text-xs font-bold text-center py-2 tracking-widest uppercase">
                    <span className="lang-en">Most Popular</span>
                    <span className="lang-ne">सबैभन्दा लोकप्रिय</span>
                  </div>
                )}
                <div className="p-7 flex-1 flex flex-col">
                  {/* Category */}
                  <p className="text-xs font-semibold text-[#0B7F3A] uppercase tracking-widest mb-1">
                    {pkg.category === "IPTV_COMBO" ? (
                      <>
                        <span className="lang-en">Internet + IPTV Combo</span>
                        <span className="lang-ne">इन्टरनेट + IPTV कम्बो</span>
                      </>
                    ) : (
                      <>
                        <span className="lang-en">Home Fiber</span>
                        <span className="lang-ne">होम फाइबर</span>
                      </>
                    )}
                  </p>
                  <h3 className="font-extrabold text-xl text-gray-800 mb-1">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mb-5">{pkg.description}</p>

                  {/* Speed */}
                  <div className="mb-2">
                    <span className="text-4xl font-extrabold text-[#25468F]">{pkg.speed.split(" ")[0]}</span>
                    <span className="text-gray-400 font-semibold ml-1 text-base">
                      {pkg.speed.includes("IPTV") ? " Mbps + IPTV" : " Mbps"}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-extrabold text-gray-800">{formatPrice(pkg.price)}</span>
                    <span className="text-gray-400 text-sm">/{pkg.billingCycle}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-[#0B7F3A] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={`/packages#${pkg.slug}`}
                    className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? "bg-[#25468F] hover:bg-[#071A3D] text-white shadow-lg"
                        : "border-2 border-[#25468F] text-[#25468F] hover:bg-[#25468F] hover:text-white"
                    }`}
                  >
                    <span className="lang-en">Choose Plan</span>
                    <span className="lang-ne">प्लान छान्नुहोस्</span>
                    <ArrowRight size={16} />
                  </Link>

                  {/* Terms */}
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xs text-gray-400">
                      <span className="lang-en">Terms &amp; Conditions apply</span>
                      <span className="lang-ne">नियम र शर्तहरू लागू हुन्छ</span>
                    </p>
                    <PackageTermsModal
                      title={pkg.termsTitle}
                      content={pkg.termsContent}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#25468F] text-[#25468F] font-bold rounded-xl hover:bg-[#25468F] hover:text-white transition-all"
          >
            <span className="lang-en">View All Plans</span>
            <span className="lang-ne">सबै प्लान हेर्नुहोस्</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

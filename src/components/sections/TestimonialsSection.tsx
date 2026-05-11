import { Star } from "lucide-react";
import { prisma } from "@/lib/prisma";

async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { sortOrder: "asc" },
      take: 3,
    });
  } catch {
    return [];
  }
}

export default async function TestimonialsSection() {
  const testimonials = await getTestimonials();

  const displayTestimonials = testimonials.length > 0 ? testimonials : [
    { id: "1", name: "Rajesh Shrestha", location: "Kathmandu", rating: 5, text: "World Fiber Net has completely transformed my work-from-home experience. The speeds are incredibly consistent and the support team is always responsive. Best ISP in Kathmandu!", photo: "", isActive: true, sortOrder: 1, createdAt: new Date(), updatedAt: new Date() },
    { id: "2", name: "Priya Maharjan", location: "Lalitpur", rating: 5, text: "I've been using World Fiber Net for over a year now. The IPTV with Net TV and Sky TV is fantastic — crystal clear picture quality and no buffering. Highly recommended!", photo: "", isActive: true, sortOrder: 2, createdAt: new Date(), updatedAt: new Date() },
    { id: "3", name: "Sanjay Adhikari", location: "Bhaktapur", rating: 5, text: "Switched from a cable provider to World Fiber Net 6 months ago. The difference in speed and reliability is night and day. Streaming, gaming, video calls — everything works perfectly.", photo: "", isActive: true, sortOrder: 3, createdAt: new Date(), updatedAt: new Date() },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-[#0B7F3A] font-bold text-sm uppercase tracking-widest mb-2">
            <span className="lang-en">Testimonials</span>
            <span className="lang-ne">प्रशंसापत्रहरू</span>
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#171717] mb-4">
            <span className="lang-en">What Our Customers Say</span>
            <span className="lang-ne">हाम्रा ग्राहकहरू के भन्छन्</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            <span className="lang-en">Trusted by 10,000+ happy customers across Nepal.</span>
            <span className="lang-ne">नेपालभरि १०,०००+ खुसी ग्राहकहरूको विश्वास।</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F7F8FA] rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25468F] to-[#2298D4] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-800">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // Admin user
  const hashedPassword = await bcrypt.hash("ChangeMe123!", 12);
  await prisma.user.upsert({
    where: { email: "admin@worldfibernet.net.np" },
    update: {},
    create: {
      email: "admin@worldfibernet.net.np",
      password: hashedPassword,
      name: "Super Admin",
      role: "SUPER_ADMIN",
    },
  });

  // Site Settings
  const settings = [
    { key: "company_name", value: "World Fiber Net Pvt. Ltd." },
    { key: "phone", value: "01-5970200" },
    { key: "phone2", value: "9801234567" },
    { key: "email", value: "support@worldfibernet.net.np" },
    { key: "billing_email", value: "billing@worldfibernet.net.np" },
    { key: "address", value: "Kathmandu, Nepal" },
    { key: "office_hours", value: "Sun - Fri: 6:00 AM - 10:00 PM" },
    { key: "whatsapp_number", value: "9801234567" },
    { key: "viber_number", value: "9801234567" },
    { key: "messenger_link", value: "https://m.me/worldfibernet" },
    { key: "facebook_url", value: "https://facebook.com/worldfibernet" },
    { key: "instagram_url", value: "https://instagram.com/worldfibernet" },
    { key: "youtube_url", value: "https://youtube.com/@worldfibernet" },
    { key: "linkedin_url", value: "https://linkedin.com/company/worldfibernet" },
    { key: "support_portal_url", value: "https://support.worldfibernet.net.np/" },
    { key: "coverage_areas", value: "Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan & More" },
    { key: "footer_text", value: "Connecting Nepal with Fiber-Fast Internet & IPTV. Built for today, ready for tomorrow." },
    { key: "map_embed", value: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31289528559!2d85.29111!3d27.70169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb978921fec10240!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1625000000000" },
    { key: "chat_active", value: "true" },
    { key: "chat_popup_text", value: "Chat with us! We are here to help." },
    { key: "hero_title", value: "Connect Nepal with Fiber-Fast Internet & IPTV" },
    { key: "hero_subtitle", value: "Experience ultra-fast and reliable connectivity with FTTH Home Fiber, Corporate Fiber, and IPTV including Net TV and Sky TV, built for every lifestyle." },
    { key: "hero_cta1_text", value: "New Connection" },
    { key: "hero_cta1_link", value: "/contact#new-connection" },
    { key: "hero_cta2_text", value: "View Packages" },
    { key: "hero_cta2_link", value: "/packages" },
    { key: "stats_customers", value: "10,000+" },
    { key: "stats_districts", value: "5+" },
    { key: "stats_uptime", value: "99.9%" },
    { key: "stats_support", value: "24/7" },
    { key: "meta_title", value: "World Fiber Net - Fiber Internet & IPTV in Nepal" },
    { key: "meta_description", value: "Experience ultra-fast FTTH fiber internet and IPTV services in Nepal. Get connected with World Fiber Net Pvt. Ltd. today." },
  ];

  for (const setting of settings) {
    await prisma.siteSettings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: { key: setting.key, value: setting.value },
    });
  }

  // Services
  const services = [
    {
      name: "FTTH Home Fiber",
      slug: "ftth-home-fiber",
      description: "Super-fast and stable fiber internet for seamless browsing, streaming & gaming.",
      icon: "home",
      ctaText: "Learn More",
      ctaLink: "/services#ftth-home-fiber",
      sortOrder: 1,
    },
    {
      name: "Corporate Fiber",
      slug: "corporate-fiber",
      description: "Dedicated, reliable internet for businesses with unmatched performance.",
      icon: "building",
      ctaText: "Learn More",
      ctaLink: "/services#corporate-fiber",
      sortOrder: 2,
    },
    {
      name: "IPTV",
      slug: "iptv",
      description: "Enjoy a wide range of live TV channels and on-demand content in crystal clear quality.",
      icon: "tv",
      ctaText: "Explore IPTV",
      ctaLink: "/iptv",
      sortOrder: 3,
    },
    {
      name: "Net TV",
      slug: "net-tv",
      description: "Nepal & international channels with news, movies, sports and entertainment.",
      icon: "nettv",
      ctaText: "View Channels",
      ctaLink: "/iptv#net-tv",
      sortOrder: 4,
    },
    {
      name: "Sky TV",
      slug: "sky-tv",
      description: "Premium global channels, sports, movies & lifestyle entertainment.",
      icon: "skytv",
      ctaText: "View Channels",
      ctaLink: "/iptv#sky-tv",
      sortOrder: 5,
    },
    {
      name: "Internet + IPTV Combo",
      slug: "internet-iptv-combo",
      description: "Best Internet. Best Entertainment. Better Together.",
      icon: "combo",
      ctaText: "View Combo Plans",
      ctaLink: "/packages#iptv-combo",
      sortOrder: 6,
    },
    {
      name: "Local Installation & Support",
      slug: "installation-support",
      description: "Quick installation by our local team with 24/7 support you can trust.",
      icon: "support",
      ctaText: "Learn More",
      ctaLink: "/services#installation-support",
      sortOrder: 7,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    });
  }

  // Packages
  const packages = [
    {
      name: "Starter Fiber",
      slug: "starter-fiber",
      category: "HOME_FIBER",
      speed: "25 Mbps",
      price: 699,
      billingCycle: "monthly",
      description: "Ideal for browsing & streaming",
      features: JSON.stringify(["Unlimited Data", "High Speed Internet", "24/7 Support"]),
      isPopular: false,
      sortOrder: 1,
      termsContent: "• Plans are subject to Fair Usage Policy (FUP).\n• Monthly billing cycle starts from connection date.\n• Installation charges may apply.\n• Price is inclusive of applicable taxes.\n• Service subject to availability in your area.\n• World Fiber Net reserves the right to modify plans with prior notice.",
    },
    {
      name: "Home Fiber 100",
      slug: "home-fiber-100",
      category: "HOME_FIBER",
      speed: "100 Mbps",
      price: 1299,
      billingCycle: "monthly",
      description: "Ideal for streaming & working",
      features: JSON.stringify(["Unlimited Data", "High Speed Internet", "24/7 Support"]),
      isPopular: true,
      sortOrder: 2,
      termsContent: "• Plans are subject to Fair Usage Policy (FUP).\n• Monthly billing cycle starts from connection date.\n• Installation charges may apply.\n• Price is inclusive of applicable taxes.\n• Service subject to availability in your area.\n• World Fiber Net reserves the right to modify plans with prior notice.",
    },
    {
      name: "Home Fiber 200",
      slug: "home-fiber-200",
      category: "HOME_FIBER",
      speed: "200 Mbps",
      price: 1899,
      billingCycle: "monthly",
      description: "For power users & large families",
      features: JSON.stringify(["Unlimited Data", "Ultra High Speed", "Priority Support", "Free Router"]),
      isPopular: false,
      sortOrder: 3,
      termsContent: "• Plans are subject to Fair Usage Policy (FUP).\n• Monthly billing cycle starts from connection date.\n• Installation charges may apply.\n• Price is inclusive of applicable taxes.\n• Service subject to availability in your area.\n• World Fiber Net reserves the right to modify plans with prior notice.",
    },
    {
      name: "Internet + IPTV Combo",
      slug: "internet-iptv-combo-100",
      category: "IPTV_COMBO",
      speed: "100 Mbps + IPTV",
      price: 1799,
      billingCycle: "monthly",
      description: "Internet with Net TV & Sky TV",
      features: JSON.stringify(["100 Mbps Fiber Internet", "Net TV + Sky TV", "Unlimited Data", "24/7 Support"]),
      isPopular: false,
      sortOrder: 4,
      termsContent: "• IPTV service requires compatible set-top box.\n• Internet + IPTV combo billed together.\n• Plans are subject to Fair Usage Policy (FUP).\n• IPTV channel lineup subject to change.\n• Installation charges may apply.\n• Price is inclusive of applicable taxes.",
    },
    {
      name: "Corporate Fiber 50",
      slug: "corporate-fiber-50",
      category: "CORPORATE_FIBER",
      speed: "50 Mbps Dedicated",
      price: 4999,
      billingCycle: "monthly",
      description: "For small to medium businesses",
      features: JSON.stringify(["Dedicated Bandwidth", "99.9% SLA Uptime", "Priority Support", "Static IP Available"]),
      isPopular: false,
      sortOrder: 5,
      termsContent: "• Corporate plans include dedicated bandwidth.\n• Service Level Agreement (SLA) applies.\n• Setup and installation fees apply separately.\n• Contract minimum 6 months.\n• Price is exclusive of applicable taxes for corporate clients.",
    },
    {
      name: "Corporate Fiber 100",
      slug: "corporate-fiber-100",
      category: "CORPORATE_FIBER",
      speed: "100 Mbps Dedicated",
      price: 8999,
      billingCycle: "monthly",
      description: "For growing enterprises",
      features: JSON.stringify(["Dedicated Bandwidth", "99.9% SLA Uptime", "24/7 Priority Support", "Static IP", "Free Router"]),
      isPopular: true,
      sortOrder: 6,
      termsContent: "• Corporate plans include dedicated bandwidth.\n• Service Level Agreement (SLA) applies.\n• Setup and installation fees apply separately.\n• Contract minimum 6 months.\n• Price is exclusive of applicable taxes for corporate clients.",
    },
  ];

  for (const pkg of packages) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: {},
      create: pkg,
    });
  }

  // FAQs
  const faqs = [
    { question: "How do I apply for a new connection?", answer: "You can apply by calling us at 01-5970200, filling the contact form on our website, or visiting our nearest office. Our team will contact you to verify availability in your area.", category: "Getting Started", sortOrder: 1 },
    { question: "How long does installation take?", answer: "Once your area is verified for coverage, installation is typically completed within 1-3 business days.", category: "Getting Started", sortOrder: 2 },
    { question: "What is FTTH?", answer: "FTTH stands for Fiber To The Home. It means the fiber optic cable is connected directly to your home, giving you the fastest and most reliable internet speeds available.", category: "Getting Started", sortOrder: 3 },
    { question: "What IPTV options are available?", answer: "We offer Net TV and Sky TV as IPTV options. Net TV provides Nepal & international channels while Sky TV offers premium global channels including sports, movies, and lifestyle content.", category: "IPTV", sortOrder: 4 },
    { question: "How do I pay my internet bill?", answer: "You can pay via eSewa, Khalti, mobile banking, or bank transfer. Visit our Recharge page for detailed payment instructions.", category: "Billing", sortOrder: 5 },
    { question: "What should I do if my internet is slow?", answer: "First, try restarting your router. If the issue persists, run a speed test and contact our 24/7 support at 01-5970200 or create a support ticket.", category: "Technical", sortOrder: 6 },
    { question: "Do you cover my area?", answer: "We currently cover Kathmandu, Lalitpur, Bhaktapur, Pokhara, Chitwan and more districts. Contact us to check availability in your specific area.", category: "Coverage", sortOrder: 7 },
    { question: "Is the data truly unlimited?", answer: "Yes, all our home fiber plans come with unlimited data. There are no data caps or hidden limits.", category: "Plans", sortOrder: 8 },
    { question: "What is the uptime guarantee?", answer: "We guarantee 99.9% network uptime. Our infrastructure is built on 100% fiber to ensure maximum reliability.", category: "Technical", sortOrder: 9 },
    { question: "Can I upgrade my plan?", answer: "Yes, you can upgrade your plan at any time. Contact our support team and we'll process the upgrade, with the new plan effective from the next billing cycle.", category: "Plans", sortOrder: 10 },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq }).catch(() => {});
  }

  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Shrestha",
      location: "Kathmandu",
      rating: 5,
      text: "World Fiber Net has completely transformed my work-from-home experience. The speeds are incredibly consistent and the support team is always responsive. Best ISP in Kathmandu!",
      sortOrder: 1,
    },
    {
      name: "Priya Maharjan",
      location: "Lalitpur",
      rating: 5,
      text: "I've been using World Fiber Net for over a year now. The IPTV with Net TV and Sky TV is fantastic — crystal clear picture quality and no buffering. Highly recommended!",
      sortOrder: 2,
    },
    {
      name: "Sanjay Adhikari",
      location: "Bhaktapur",
      rating: 5,
      text: "Switched from a cable provider to World Fiber Net 6 months ago. The difference in speed and reliability is night and day. Streaming, gaming, video calls — everything works perfectly.",
      sortOrder: 3,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({ data: testimonial }).catch(() => {});
  }

  // Offers
  await prisma.offer.create({
    data: {
      title: "Get 1 Month FREE on All Plans",
      description: "New connections get 1 month free internet on all home fiber plans. Limited time offer. Apply now!",
      ctaText: "Claim Now",
      ctaLink: "/contact#new-connection",
      isActive: true,
      sortOrder: 1,
    },
  }).catch(() => {});

  // Banners
  const banners = [
    {
      title: "Connect Nepal with Fiber-Fast Internet & IPTV",
      subtitle: "Experience ultra-fast and reliable connectivity with FTTH Home Fiber, Corporate Fiber, and IPTV built for every lifestyle.",
      ctaText: "New Connection",
      ctaLink: "/contact#new-connection",
      placement: "HOMEPAGE_HERO",
      isActive: true,
      sortOrder: 1,
      altText: "World Fiber Net - Nepal Fiber Internet",
    },
    {
      title: "Experience Nepal's Fastest Fiber Internet",
      subtitle: "Built on 100% Fiber to the Home network for ultra-fast speed, unlimited data, and unmatched reliability.",
      ctaText: "Get 1 Month FREE",
      ctaLink: "/contact#new-connection",
      placement: "HOMEPAGE_FULLWIDTH",
      isActive: true,
      sortOrder: 1,
      altText: "Nepal Fastest Fiber Internet",
    },
    {
      title: "Get 1 Month FREE",
      subtitle: "New Connection Offer on All Plans",
      ctaText: "Claim Now",
      ctaLink: "/contact#new-connection",
      placement: "HOMEPAGE_PROMO",
      isActive: true,
      sortOrder: 1,
      altText: "1 Month Free Offer",
    },
    {
      title: "IPTV with Net TV & Sky TV",
      subtitle: "100+ Live Channels. Nepal & International.",
      ctaText: "Explore IPTV",
      ctaLink: "/iptv",
      placement: "HOMEPAGE_PROMO",
      isActive: true,
      sortOrder: 2,
      altText: "IPTV Net TV Sky TV",
    },
    {
      title: "Internet + IPTV Combo",
      subtitle: "Best Internet. Best Entertainment. Better Together.",
      ctaText: "View Combo Plans",
      ctaLink: "/packages#iptv-combo",
      placement: "HOMEPAGE_PROMO",
      isActive: true,
      sortOrder: 3,
      altText: "Internet IPTV Combo Plan",
    },
    {
      title: "Recharge Online",
      subtitle: "Quick, secure and hassle-free recharge via eSewa, Khalti and more.",
      ctaText: "Recharge Now",
      ctaLink: "/recharge",
      placement: "HOMEPAGE_PROMO",
      isActive: true,
      sortOrder: 4,
      altText: "Online Recharge",
    },
  ];

  for (const banner of banners) {
    await prisma.banner.create({ data: banner }).catch(() => {});
  }

  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

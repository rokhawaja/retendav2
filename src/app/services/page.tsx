"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { Card, Badge, AuditModal } from "@/components/ui";
import {
  Mail,
  Palette,
  Calendar,
  Shield,
  UserPlus,
  BarChart3,
  Target,
  Search,
  MessageSquare,
  MousePointerClick,
  ArrowRight,
  Check,
  Sparkles,
  FileText,
} from "lucide-react";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/ahmedkhawaja-assets/30min";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const emailServices = [
  {
    icon: Mail,
    title: "Email Strategy & Automation",
    description:
      "We build comprehensive email strategies with automated flows that nurture leads, recover abandoned carts, and maximize customer lifetime value through personalized journeys.",
    features: [
      "Welcome Series & Onboarding Flows",
      "Abandoned Cart Recovery",
      "Post-Purchase Sequences",
      "Win-back Campaigns",
      "Browse Abandonment",
      "VIP & Loyalty Programs",
    ],
    color: "sky",
  },
  {
    icon: Palette,
    title: "Email Design & Creative",
    description:
      "Stunning, conversion-optimized email designs that reflect your brand identity and drive engagement. Every template is mobile-responsive and tested across all major email clients.",
    features: [
      "Custom Template Design",
      "Brand-Aligned Creatives",
      "Mobile-First Approach",
      "A/B Testing Variants",
      "Dark Mode Optimization",
      "Interactive Elements",
    ],
    color: "violet",
  },
  {
    icon: Calendar,
    title: "Campaign Management",
    description:
      "Strategic campaign planning and execution that aligns with your business goals. We handle everything from content calendars to send optimization and performance analysis.",
    features: [
      "Monthly Campaign Calendar",
      "Promotional Campaigns",
      "Product Launch Sequences",
      "Seasonal Campaigns",
      "Send Time Optimization",
      "Performance Reporting",
    ],
    color: "emerald",
  },
  {
    icon: Shield,
    title: "Deliverability & Infrastructure",
    description:
      "Protect your sender reputation and ensure maximum inbox placement. We monitor, maintain, and optimize your email infrastructure for consistent deliverability.",
    features: [
      "Domain Authentication (SPF/DKIM/DMARC)",
      "IP Warmup & Management",
      "Blacklist Monitoring",
      "Inbox Placement Testing",
      "List Hygiene & Cleaning",
      "Reputation Management",
    ],
    color: "amber",
  },
  {
    icon: UserPlus,
    title: "Signup & Growth Systems",
    description:
      "Grow your email list with high-converting opt-in strategies. We design and implement signup forms, popups, and lead magnets that capture quality subscribers.",
    features: [
      "Exit-Intent Popups",
      "Embedded Signup Forms",
      "Lead Magnet Funnels",
      "Spin-to-Win Wheels",
      "Quiz-Based Signups",
      "Landing Page Optimization",
    ],
    color: "rose",
  },
  {
    icon: BarChart3,
    title: "Reporting & Optimization",
    description:
      "Data-driven insights and continuous optimization to improve your email performance. We track key metrics and provide actionable recommendations for growth.",
    features: [
      "Weekly Performance Reports",
      "Revenue Attribution",
      "Cohort Analysis",
      "Engagement Metrics",
      "A/B Test Analysis",
      "Growth Recommendations",
    ],
    color: "cyan",
  },
];

const additionalServices = [
  {
    icon: Target,
    title: "Meta Ads (Paid Social)",
    description:
      "Strategic paid social campaigns on Meta platforms that drive qualified traffic and conversions. We handle creative, targeting, and optimization for maximum ROAS.",
    features: [
      "Campaign Strategy & Setup",
      "Audience Research & Targeting",
      "Creative Development",
      "Retargeting Campaigns",
      "Lookalike Audiences",
      "Performance Optimization",
    ],
    color: "blue",
  },
  {
    icon: Search,
    title: "SEO (Organic Growth)",
    description:
      "Comprehensive SEO strategies that improve your organic visibility and drive sustainable traffic growth. We focus on technical SEO, content optimization, and authority building.",
    features: [
      "Technical SEO Audits",
      "On-Page Optimization",
      "Keyword Research",
      "Content Strategy",
      "Link Building",
      "Local SEO",
    ],
    color: "green",
  },
  {
    icon: MessageSquare,
    title: "SMS Marketing",
    description:
      "High-impact SMS campaigns that complement your email strategy. We create timely, personalized text messages that drive immediate action and revenue.",
    features: [
      "SMS Flow Automation",
      "Promotional Campaigns",
      "Transactional Messages",
      "Two-Way Conversations",
      "Segmented Messaging",
      "Compliance Management",
    ],
    color: "purple",
  },
  {
    icon: MousePointerClick,
    title: "CRO & Landing Pages",
    description:
      "Conversion rate optimization that turns more visitors into customers. We analyze, test, and optimize your landing pages for maximum conversion performance.",
    features: [
      "Landing Page Design",
      "A/B & Multivariate Testing",
      "Heatmap Analysis",
      "User Journey Optimization",
      "Form Optimization",
      "Page Speed Optimization",
    ],
    color: "orange",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  sky: { bg: "bg-sky-500/20", text: "text-sky-400", border: "border-sky-500/30" },
  violet: { bg: "bg-violet-500/20", text: "text-violet-400", border: "border-violet-500/30" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
  amber: { bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30" },
  rose: { bg: "bg-rose-500/20", text: "text-rose-400", border: "border-rose-500/30" },
  cyan: { bg: "bg-cyan-500/20", text: "text-cyan-400", border: "border-cyan-500/30" },
  blue: { bg: "bg-blue-500/20", text: "text-blue-400", border: "border-blue-500/30" },
  green: { bg: "bg-green-500/20", text: "text-green-400", border: "border-green-500/30" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
  orange: { bg: "bg-orange-500/20", text: "text-orange-400", border: "border-orange-500/30" },
};

export default function ServicesPage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-persian-blue/10 rounded-full blur-[200px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge variant="primary" className="mb-6">
                <Sparkles className="w-3 h-3 mr-1.5" />
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                A Complete Lifecycle System
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
                Designed to increase LTV, repeat purchases, and predictable monthly revenue. 
                From strategy to execution — we turn ideas into performance, and performance into results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Email Marketing Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-xs tracking-[0.25em] text-persian-blue uppercase font-medium mb-4">
                Core Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Email Marketing
              </h2>
              <p className="text-lg text-white/50 max-w-2xl">
                Our flagship offering — comprehensive email marketing that drives sustainable revenue growth.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {emailServices.map((service) => {
                const colors = colorClasses[service.color];
                return (
                  <motion.div key={service.title} variants={itemVariants}>
                    <Card
                      variant="glass"
                      className="p-6 h-full hover:border-white/20 transition-all duration-300 group"
                      whileHover={{ y: -4 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}
                      >
                        <service.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>

                      <p className="text-white/50 text-sm mb-5 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <Check className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                            <span className="text-white/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-xs tracking-[0.25em] text-amber-400 uppercase font-medium mb-4">
                Growth Add-ons
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Additional Growth Services
              </h2>
              <p className="text-lg text-white/50 max-w-2xl">
                Extend your retention strategy with multi-channel marketing solutions.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {additionalServices.map((service) => {
                const colors = colorClasses[service.color];
                return (
                  <motion.div key={service.title} variants={itemVariants}>
                    <Card
                      variant="glass"
                      className="p-8 h-full hover:border-white/20 transition-all duration-300 group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-start gap-5">
                        <div
                          className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}
                        >
                          <service.icon className={`w-7 h-7 ${colors.text}`} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-3">
                            {service.title}
                          </h3>

                          <p className="text-white/50 text-sm mb-5 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center gap-2 text-sm">
                                <Check className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                                <span className="text-white/70">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Retention?
              </h2>
              <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
                Book a free audit call and discover how Retenda can help you build predictable, 
                recurring revenue through strategic lifecycle marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-persian-blue text-white font-semibold rounded-xl hover:bg-persian-blue/90 transition-all shadow-lg shadow-persian-blue/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book a Meeting
                </motion.a>
                <motion.button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText className="w-5 h-5" />
                  Request Free Audit
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Audit Modal */}
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </>
  );
}

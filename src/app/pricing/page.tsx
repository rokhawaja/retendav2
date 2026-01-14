"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { Badge, AuditModal } from "@/components/ui";
import { Check, Sparkles, ArrowRight, X, HelpCircle, Calendar, FileText } from "lucide-react";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/ahmedkhawaja-assets/30min";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const plans = [
  {
    name: "Basic",
    price: "$2,000",
    period: "/mo",
    description: "Retention Foundation Setup",
    subtitle: "Perfect for brands starting their retention journey",
    features: {
      email: [
        { name: "Email Flows (5 Core Flows)", included: true },
        { name: "Campaign Management (4/month)", included: true },
        { name: "Email Design & Creative", included: true },
        { name: "Core Segmentation", included: true },
        { name: "Monthly Reporting", included: true },
        { name: "Deliverability Monitoring", included: true },
      ],
      growth: [
        { name: "Meta Ads Management", included: false },
        { name: "SEO Support", included: false },
        { name: "SMS Marketing", included: false },
        { name: "CRO & Landing Pages", included: false },
      ],
      support: [
        { name: "Email Support", included: true },
        { name: "Weekly Strategy Calls", included: false },
        { name: "Dedicated Account Lead", included: false },
        { name: "Priority Support", included: false },
      ],
    },
    popular: false,
  },
  {
    name: "Premium",
    price: "$3,500",
    period: "/mo",
    description: "Full Retention + Growth",
    subtitle: "For scaling brands ready to dominate their market",
    features: {
      email: [
        { name: "Email Flows (Unlimited)", included: true },
        { name: "Campaign Management (8/month)", included: true },
        { name: "Email Design & Creative", included: true },
        { name: "Advanced Segmentation", included: true },
        { name: "Weekly Reporting", included: true },
        { name: "Deliverability Optimization", included: true },
      ],
      growth: [
        { name: "Meta Ads Management", included: true },
        { name: "SEO Support (Technical + On-Page)", included: true },
        { name: "SMS Marketing", included: false },
        { name: "CRO & Landing Pages", included: false },
      ],
      support: [
        { name: "Email & Slack Support", included: true },
        { name: "Weekly Strategy Calls", included: true },
        { name: "Dedicated Account Lead", included: false },
        { name: "Priority Support", included: true },
      ],
    },
    popular: true,
  },
  {
    name: "Extended",
    price: "$5,000",
    period: "/mo",
    description: "Complete Growth Partnership",
    subtitle: "Enterprise-level support for ambitious brands",
    features: {
      email: [
        { name: "Email Flows (Unlimited + Custom)", included: true },
        { name: "Campaign Management (Unlimited)", included: true },
        { name: "Premium Email Design", included: true },
        { name: "Advanced Segmentation + AI", included: true },
        { name: "Real-time Reporting Dashboard", included: true },
        { name: "Full Deliverability Management", included: true },
      ],
      growth: [
        { name: "Meta Ads Scaling", included: true },
        { name: "Advanced SEO Strategy", included: true },
        { name: "SMS Marketing (Full)", included: true },
        { name: "CRO & Landing Pages", included: true },
      ],
      support: [
        { name: "24/7 Support", included: true },
        { name: "Bi-weekly Strategy Calls", included: true },
        { name: "Dedicated Account Lead", included: true },
        { name: "Priority Support", included: true },
      ],
    },
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in the onboarding process?",
    answer:
      "Our onboarding includes a comprehensive audit of your current email program, competitor analysis, strategy development, ESP setup/migration assistance, and the creation of your foundational email flows. This typically takes 2-3 weeks.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "What ESP platforms do you work with?",
    answer:
      "We work with all major ESPs including Klaviyo, Mailchimp, Omnisend, Drip, and others. Klaviyo is our recommended platform for DTC brands due to its powerful segmentation and automation capabilities.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer:
      "Absolutely. For brands with specific needs or larger volumes, we offer custom packages. Contact us to discuss your requirements and we'll create a tailored solution.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "While results vary by brand, our clients typically see a 30-50% increase in email-attributed revenue within the first 90 days, along with improved deliverability rates and higher engagement metrics.",
  },
  {
    question: "Is there a minimum contract term?",
    answer:
      "We recommend a minimum 3-month commitment to see meaningful results, but we offer month-to-month options after the initial period. Custom terms are available for enterprise clients.",
  },
];

export default function PricingPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
                Investment
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto">
                No hidden fees, no surprises. Choose the plan that fits your brand's growth stage 
                and scale as you grow. Every plan includes our commitment to your success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {plans.map((plan, index) => {
                const isHovered = hoveredIndex === index;
                const isPopular = plan.popular;

                return (
                  <motion.div
                    key={plan.name}
                    variants={cardVariants}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="h-full"
                  >
                    <motion.div
                      className={`p-8 h-full relative flex flex-col rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                        isHovered
                          ? "bg-white/10 border-persian-blue/50 shadow-lg shadow-persian-blue/20"
                          : isPopular
                          ? "bg-white/5 border-persian-blue/30"
                          : "bg-white/5 border-white/10"
                      }`}
                      animate={{
                        scale: isHovered ? 1.02 : 1,
                        y: isHovered ? -8 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Popular Badge */}
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <Badge variant="primary" className="flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" />
                            Most Popular
                          </Badge>
                        </div>
                      )}

                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-lg font-medium text-white/70 mb-2">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline gap-1 mb-2">
                          <span className="text-4xl md:text-5xl font-bold text-white">
                            {plan.price}
                          </span>
                          <span className="text-white/40">{plan.period}</span>
                        </div>
                        <p className="text-white/70 font-medium">{plan.description}</p>
                        <p className="text-white/40 text-sm mt-1">{plan.subtitle}</p>
                      </div>

                      <div className="h-px bg-white/10 mb-6" />

                      {/* Features */}
                      <div className="flex-1 space-y-6">
                        {/* Email Features */}
                        <div>
                          <p className="text-xs tracking-[0.15em] text-persian-blue uppercase font-medium mb-3">
                            Email Marketing
                          </p>
                          <ul className="space-y-2">
                            {plan.features.email.map((feature) => (
                              <li key={feature.name} className="flex items-center gap-2 text-sm">
                                {feature.included ? (
                                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                ) : (
                                  <X className="w-4 h-4 text-white/20 flex-shrink-0" />
                                )}
                                <span className={feature.included ? "text-white/70" : "text-white/30"}>
                                  {feature.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Growth Features */}
                        <div>
                          <p className="text-xs tracking-[0.15em] text-amber-400 uppercase font-medium mb-3">
                            Growth Add-ons
                          </p>
                          <ul className="space-y-2">
                            {plan.features.growth.map((feature) => (
                              <li key={feature.name} className="flex items-center gap-2 text-sm">
                                {feature.included ? (
                                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                ) : (
                                  <X className="w-4 h-4 text-white/20 flex-shrink-0" />
                                )}
                                <span className={feature.included ? "text-white/70" : "text-white/30"}>
                                  {feature.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Support Features */}
                        <div>
                          <p className="text-xs tracking-[0.15em] text-violet-400 uppercase font-medium mb-3">
                            Support
                          </p>
                          <ul className="space-y-2">
                            {plan.features.support.map((feature) => (
                              <li key={feature.name} className="flex items-center gap-2 text-sm">
                                {feature.included ? (
                                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                ) : (
                                  <X className="w-4 h-4 text-white/20 flex-shrink-0" />
                                )}
                                <span className={feature.included ? "text-white/70" : "text-white/30"}>
                                  {feature.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className={`w-full mt-8 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                          isHovered || isPopular
                            ? "bg-persian-blue text-white shadow-lg shadow-persian-blue/25"
                            : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Started
                      </motion.button>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Custom Plan CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-white/40">
                Need a custom solution?{" "}
                <a
                  href="#"
                  className="text-persian-blue hover:text-persian-blue/80 underline underline-offset-4"
                >
                  Let&apos;s talk
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What&apos;s Included in Every Plan
              </h2>
              <p className="text-lg text-white/50 max-w-2xl mx-auto">
                Regardless of which plan you choose, you&apos;ll get these foundational benefits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  title: "Strategic Onboarding",
                  description: "Comprehensive audit and strategy development tailored to your brand",
                },
                {
                  title: "ESP Setup & Migration",
                  description: "Seamless setup or migration to your email platform of choice",
                },
                {
                  title: "Performance Tracking",
                  description: "Regular reporting with actionable insights and recommendations",
                },
                {
                  title: "Dedicated Support",
                  description: "Direct access to your account team for questions and strategy",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-persian-blue/20 flex items-center justify-center mb-4">
                    <Check className="w-5 h-5 text-persian-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-white/50">
                Everything you need to know about our pricing and services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <HelpCircle
                      className={`w-5 h-5 text-white/40 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-white/60">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
                Book a free 30-minute strategy call to discuss your brand&apos;s retention potential 
                and find the perfect plan for your growth goals.
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

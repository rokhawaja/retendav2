"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "$2,000",
    period: "/mo",
    description: "Retention Foundation Setup",
    features: [
      "Email Marketing (Flows + Campaigns)",
      "Core Segmentation",
      "Monthly Reporting",
      "Deliverability Monitoring",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$3,500",
    period: "/mo",
    description: "Full Retention + Growth",
    features: [
      "Email Marketing (Full Management)",
      "SEO Support (Technical + On-Page)",
      "Meta Ads Management",
      "Weekly Strategy Calls",
    ],
    popular: true,
  },
  {
    name: "Extended",
    price: "$5,000",
    period: "/mo",
    description: "Complete Growth Partnership",
    features: [
      "Full Email + SMS + Retention System",
      "Advanced SEO",
      "Meta Ads Scaling",
      "Dedicated Account Lead",
      "Priority Support",
    ],
    popular: false,
  },
];

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

export function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-persian-blue/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-persian-blue uppercase font-medium mb-4">
            Investment
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Our Prices
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Transparent pricing designed to grow with your brand. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
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

                  <div className="flex-1 flex flex-col">
                    {/* Plan Name */}
                    <h3 className="text-lg font-medium text-white/70 mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-4xl md:text-5xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-white/40">{plan.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 mb-8">{plan.description}</p>

                    {/* Divider */}
                    <div className="h-px bg-white/10 mb-8" />

                    {/* Features */}
                    <ul className="space-y-4 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-persian-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-persian-blue" />
                          </div>
                          <span className="text-white/70 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

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
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom Plan CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/40 mt-12"
        >
          Need a custom solution?{" "}
          <a href="#" className="text-persian-blue hover:text-persian-blue/80 underline underline-offset-4">
            Let&apos;s talk
          </a>
        </motion.p>
      </div>
    </section>
  );
}

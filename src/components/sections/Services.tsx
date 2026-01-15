"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { Mail, ShieldCheck, TrendingUp, Monitor } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Email Strategy & Automation",
    description:
      "Flows, Campaigns, Segmentation — all designed to convert and retain.",
    features: [
      { label: "Flows", color: "text-sky-400 border-sky-400/30" },
      { label: "Campaigns", color: "text-sky-400 border-sky-400/30" },
      { label: "Segmentation", color: "text-sky-400 border-sky-400/30" },
    ],
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    icon: ShieldCheck,
    title: "Deliverability & Infrastructure",
    description:
      "Maximizing inbox placement through technical excellence and monitoring.",
    features: [
      { label: "Domain Health", color: "text-emerald-400 border-emerald-400/30" },
      { label: "Warm-up", color: "text-emerald-400 border-emerald-400/30" },
    ],
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: TrendingUp,
    title: "Growth Add-ons",
    description:
      "Meta Ads, SEO, and SMS Marketing to fuel your multi-channel growth.",
    features: [
      { label: "Meta Ads", color: "text-violet-400 border-violet-400/30" },
      { label: "SEO", color: "text-violet-400 border-violet-400/30" },
      { label: "SMS", color: "text-violet-400 border-violet-400/30" },
    ],
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Monitor,
    title: "CRO",
    description:
      "Landing page optimization for higher conversions and better ROI.",
    features: [
      { label: "A/B Testing", color: "text-amber-400 border-amber-400/30" },
      { label: "UX Audits", color: "text-amber-400 border-amber-400/30" },
    ],
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
];


export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-persian-blue uppercase font-medium mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            A Complete Lifecycle System
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            End-to-end solutions designed to maximize your customer lifetime value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Card
                  variant="glass"
                  className="p-6 sm:p-8 h-full relative group"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                      </div>

                      <div className="flex-1">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-5">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature.label}
                              className={`text-xs px-3 py-1.5 rounded-full bg-transparent border ${feature.color}`}
                            >
                              {feature.label}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

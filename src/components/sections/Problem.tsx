"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { Mail, Search, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Mail,
    title: "The Acquisition Trap",
    subtitle: "Rising Meta CPAs",
    description:
      "Scaling is impossible when creative fatigue hits and CPAs rise. You're outbidding yourself for the same traffic.",
    subtext: "Export to Sheets",
    iconBg: "bg-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: Search,
    title: "The Data Black Box",
    subtitle: "Zero Attribution",
    description:
      "iOS updates made tracking a \"black box.\" If you don't own your data via Email/SMS, you're flying blind.",
    subtext: "",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "The Profit Drain",
    subtitle: "The \"One-Time\" Buyer",
    description:
      "70% of DTC shoppers never return. Without a retention engine, you are leaving 6-7 figures on the table every year.",
    subtext: "",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Problem() {
  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-amber-500 uppercase font-medium mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The DTC Growth Trap
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto italic mb-2">
            Revamping your existing cards to be more aggressive:
          </p>
          <p className="text-base text-white/50 max-w-2xl mx-auto">
            Most brands hit a ceiling because of these three critical bottlenecks.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div 
                key={problem.title}
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
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${problem.iconBg} flex items-center justify-center mb-6`}>
                      <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${problem.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-white/70 mb-4">
                      {problem.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-3">
                      {problem.description}
                    </p>
                    {problem.subtext && (
                      <p className="text-xs sm:text-sm text-white/40 italic">
                        {problem.subtext}
                      </p>
                    )}
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

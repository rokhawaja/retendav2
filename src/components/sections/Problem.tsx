"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { Mail, Search, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Mail,
    title: "Email Revenue Leakage",
    description:
      "Deliverability issues and domain health problems cause a 20–30% revenue drop. Poor lifecycle structure results in abandoned revenue.",
    iconBg: "bg-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: Search,
    title: "SEO Stagnation",
    description:
      "Organic growth stalls because SEO is treated reactively. Brands pay more for acquisition because organic channels aren't contributing.",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: TrendingUp,
    title: "Meta Ads Volatility",
    description:
      "Scaling becomes expensive when creative fatigue hits. Lack of consistent testing leads to rising CPAs and unstable ROAS.",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
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

export function Problem() {
  return (
    <section id="process" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-amber-500 uppercase font-medium mb-4">
            The Challenge
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The DTC Growth Trap
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Most brands hit a ceiling because of these three critical bottlenecks.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.div key={problem.title} variants={cardVariants}>
                <Card
                  variant="glass"
                  className="p-8 h-full relative group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${problem.iconBg} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${problem.iconColor}`} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

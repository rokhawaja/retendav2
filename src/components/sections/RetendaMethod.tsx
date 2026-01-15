"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { Search, Cog, Users } from "lucide-react";

const methods = [
  {
    icon: Search,
    title: "Audit the Leak",
    description: "We identify where customers are dropping off in your lifecycle.",
  },
  {
    icon: Cog,
    title: "Deploy the Engine",
    description: "We build automated flows that trigger based on behavior, not just \"time passed.\"",
  },
  {
    icon: Users,
    title: "Own the Relationship",
    description: "We move your revenue off Meta's rented land and onto your owned channels (Email/SMS).",
  },
];


export function RetendaMethod() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-persian-blue uppercase font-medium mb-4">
            How We Fix It
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The &quot;Retenda Method&quot;
          </h2>
        </motion.div>

        {/* Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div 
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <Card
                  variant="glass"
                  className="p-6 sm:p-8 h-full relative group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="relative z-10">
                    {/* Step Number */}
                    <div className="text-4xl sm:text-5xl font-bold text-white/10 mb-4">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-persian-blue/20 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-persian-blue" />
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                      {method.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                      {method.description}
                    </p>
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

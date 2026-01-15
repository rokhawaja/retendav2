"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { AlertTriangle, TrendingDown } from "lucide-react";


export function InvisibleLeak() {
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The Invisible Leak
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto italic">
            This section explains exactly why their current marketing spend is failing.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* iOS 14.5 Tax */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card
              variant="glass"
              className="p-6 sm:p-8 h-full"
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    The iOS 14.5 Tax is Real
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                Since the tracking updates, Meta&apos;s algorithm is working harder for fewer results. If you are paying $40 to acquire a customer who only spends $45 once, you are losing money after COGS and shipping.
              </p>
            </Card>
          </motion.div>

          {/* Email Revenue Leak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card
              variant="glass"
              className="p-6 sm:p-8 h-full"
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Don&apos;t Fill a Leaky Bucket
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                Most brands try to fix revenue drops by increasing top-of-funnel spend. That&apos;s a death spiral. We plug the &quot;Email Revenue Leak&quot; and maximize the value of every single click you&apos;ve already paid for.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

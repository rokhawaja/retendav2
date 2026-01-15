"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";

const phases = [
  { number: "1.", title: "Product Curation" },
  { number: "2.", title: "Strategic Teasing" },
  { number: "3.", title: "The Reveal" },
  { number: "4.", title: "Hype Generation" },
  { number: "5.", title: "Early Access" },
  { number: "6.", title: "The Drop" },
];


export function DropProtocol() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <div className="absolute top-1/2 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-persian-blue/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            The Science of the Sell-Out: <br />
            <span className="gradient-text">Multiple 6-Figure &quot;Drop Days&quot;</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto mb-8">
            Ever wonder how brands like Supreme, Nike, and Stanley sell out their entire stock in minutes?
          </p>
          <p className="text-base text-white/50 max-w-3xl mx-auto mb-4">
            It&apos;s not luck. It&apos;s a calculated, psychological process. Most brands just &quot;send a blast&quot; when they have new stock. We engineer <strong className="text-white/70">events</strong>.
          </p>
          <p className="text-base text-white/50 max-w-3xl mx-auto">
            We have successfully launched multiple 6-figure days for our clients, clearing out months of inventory in a matter of hours. This isn&apos;t just about sending an email; it&apos;s about our <strong className="text-white/70">&quot;Secret Hype-Building Sauce&quot;</strong>—a precise sequence of scarcity, anticipation, and multi-channel &quot;sieges&quot; that force customers to keep their credit cards ready.
          </p>
        </motion.div>

        {/* The Drop Protocol */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              The Drop Protocol
            </h3>
            <p className="text-sm sm:text-base text-white/60">
              Engineered for 6-Figure Minutes.
            </p>
            <p className="text-sm sm:text-base text-white/50 mt-4">
              Most brands launch products. We create cultural moments. This is the exact framework I used to scale my own brand and sell out inventory in hours. It is a precise, high-tension method designed to turn interest into frenzy.
            </p>
          </motion.div>

          {/* The Stages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mb-12"
          >
            <h4 className="text-lg sm:text-xl font-bold text-white mb-6 text-center">
              The Stages
            </h4>
            
            <Card variant="glass" className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-persian-blue flex-shrink-0">
                      {phase.number}
                    </span>
                    <span className="text-sm sm:text-base text-white/80 pt-1">
                      {phase.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* The Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Card 
              variant="glass" 
              className="p-6 sm:p-8 text-center border-persian-blue/30"
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                The Result
              </h4>
              <p className="text-sm sm:text-base text-white/60 mb-4">
                <span className="italic">[Insert Shopify &quot;Live View&quot; / Sales Spike Screenshot Here]</span> <span className="italic">[Insert &quot;Sold Out&quot; Shopify Dashboard Here]</span>
              </p>
              <p className="text-xl sm:text-2xl font-bold text-persian-blue">
                $100k+ in under 60 minutes isn&apos;t luck. It&apos;s the protocol.
              </p>
            </Card>
          </motion.div>

          {/* Not for Everyone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="mt-12 text-center"
          >
            <h4 className="text-xl font-bold text-white mb-4">
              It&apos;s not for everyone.
            </h4>
            <p className="text-white/60 max-w-3xl mx-auto">
              Generating this level of hype requires every part of your brand to be in the right place—from your creative to your lifecycle structure. If even one gear is off, the engine stalls.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

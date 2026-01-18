"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { Button } from "@/components/ui";
import { Calendar } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/ahmedkhawaja-assets/30min";

export function MeetFounder() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <div className="absolute top-1/2 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-persian-blue/5 rounded-full blur-[200px]" />
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
          <p className="text-xs tracking-[0.25em] text-persian-blue uppercase font-medium mb-4">
            Meet Our Founder
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Think your brand is ready for the Sauce?
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Apply for a Hype Audit
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <Card
            variant="glass"
            className="p-6 sm:p-8 lg:p-12"
            whileHover={{ scale: 1.01, y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="text-center max-w-3xl mx-auto">
              {/* Founder Info */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Ahmed Khawaja
              </h3>
              <p className="text-base sm:text-lg text-persian-blue mb-6">
                Founder & Retention Strategist
              </p>
              <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8">
                With years of experience in DTC retention marketing, I&apos;ve helped brands generate millions in revenue through strategic email automation, deliverability optimization, and behavioral-driven campaigns. My approach combines psychology, data, and creative execution to turn one-time buyers into lifetime customers.
              </p>
              
              {/* CTA Button */}
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="lg" className="group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Strategy Call
                </Button>
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

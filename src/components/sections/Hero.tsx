"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/ahmedkhawaja-assets/30min";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,63,203,0.15)_0%,_transparent_70%)]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            willChange: 'transform',
          }}
        />

        {/* Glow orbs - optimized for mobile */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-persian-blue/20 rounded-full blur-[120px] animate-pulse" style={{ willChange: 'opacity' }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-persian-blue/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s', willChange: 'opacity' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm tracking-[0.3em] text-persian-blue font-medium mb-6 uppercase"
          >
            Retention is the profitability engine
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            for your{" "}
            <span className="gradient-text">DTC ecommerce</span>{" "}
            brand
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            At Retenda, we focus on retention, which is your only way to profitability. We transform leaky funnels into structured revenue-producing systems by combining strategy, creative and deliverability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/pricing">
              <Button variant="primary" size="lg" className="group">
                View Growth Plans
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book a Meeting
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xl mx-auto"
          >
            {[
              { value: "$10M+", label: "Generated" },
              { value: "45%", label: "Avg. Repeat Purchase Rate" },
              { value: "2.5x", label: "Increase in LTV" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center py-4 sm:py-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm sm:text-base text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

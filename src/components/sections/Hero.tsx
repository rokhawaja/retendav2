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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(10,63,203,0.15)_0%,_transparent_70%)]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-persian-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-persian-blue/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            From First Click to Forever
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8"
          >
            Your Retention Engine for{" "}
            <span className="gradient-text">DTC Ecommerce</span>{" "}
            Brands.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Retenda is a retention-first growth partner. We transform fragmented email programs 
            into structured, revenue-producing systems by combining strategy, creative, and deliverability.
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
            className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
          >
            {[
              { value: "40%", label: "Avg Revenue Lift" },
              { value: "98%", label: "Deliverability" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

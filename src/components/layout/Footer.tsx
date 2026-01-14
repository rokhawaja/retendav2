"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <h3 className="text-2xl font-bold text-white mb-4">Retenda</h3>
          
          {/* Tagline */}
          <p className="text-white/60 max-w-md mb-8">
            Crafting digital growth built for real impact.
          </p>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-sm text-white/40">
            ©2025 Retenda. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-persian-blue/50 to-transparent" />
    </footer>
  );
}

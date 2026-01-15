"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="relative mb-4">
            <Image
              src="/retenda-logo-white.png"
              alt="Retenda"
              width={180}
              height={50}
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-sm sm:text-base text-white/60 max-w-md mb-6 sm:mb-8">
            Crafting digital growth built for real impact.
          </p>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6 sm:mb-8" />

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-white/40">
            ©2025 Retenda. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-persian-blue/50 to-transparent" />
    </footer>
  );
}

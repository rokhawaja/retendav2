"use client";

import { motion } from "framer-motion";

const clients = [
  "Buffalo Whey Protein",
  "Windy City Cigars",
  "Greyhaze",
  "Smith Watches",
  "Commonplace",
  "Bambino House",
];

export function Clients() {
  return (
    <section className="py-24 overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs tracking-[0.25em] text-white/40 uppercase font-medium"
        >
          Esteemed Clientele
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-oxford-blue to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-oxford-blue to-transparent z-10" />

        {/* Marquee Track */}
        <motion.div
          className="flex gap-16"
          animate={{
            x: [0, -1440],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Double the items for seamless loop */}
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-8 py-4"
            >
              <div className="flex items-center gap-4 group">
                {/* Logo placeholder - stylized rectangle */}
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-white/30">{client.charAt(0)}</span>
                </div>
                <span className="text-lg font-medium text-white/40 whitespace-nowrap group-hover:text-white/60 transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

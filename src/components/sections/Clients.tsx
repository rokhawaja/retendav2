"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logoFiles = [
  "1-1.png",
  "1-2.png",
  "1-3.png",
  "1-4.png",
  "1-5.png",
  "1-6.png",
  "1-7.png",
  "1-8.png",
  "1-9.png",
  "1-10.png",
  "1-11.png",
  "1-13.png",
  "1-14.png",
  "1-15.png",
];

export function Clients() {
  return (
    <section className="py-8 sm:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center text-xs tracking-[0.25em] text-white/40 uppercase font-medium"
        >
          Esteemed Clientele
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-oxford-blue to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-oxford-blue to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <motion.div
          className="flex gap-8 sm:gap-12 items-center"
          animate={{
            x: [0, -1440],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {/* Triple the items for seamless loop */}
          {[...logoFiles, ...logoFiles, ...logoFiles].map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative w-48 h-24 sm:w-64 sm:h-32 md:w-80 md:h-40 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-300">
                <Image
                  src={`/logos/${logo}`}
                  alt="Client logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

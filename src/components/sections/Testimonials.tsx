"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Amazing work. They work day and night to make sure the designs are sharp and consistently go far beyond any expectations I've had. I would hire them again.",
    author: "Bambino House",
    role: "Founder",
  },
  {
    quote:
      "Amazing teammates. They delivered exactly what we needed: flows, scripts, designs, and full implementation. We are now on a fixed monthly retainer.",
    author: "Buffalo Whey Protein",
    role: "Marketing Director",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-persian-blue/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-persian-blue uppercase font-medium mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Partners Say
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what brands have experienced working with Retenda.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                variant="glass"
                className="p-8 lg:p-10 h-full relative group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                  <Quote className="w-10 h-10 text-persian-blue/20" />
                </div>

                <div className="relative z-10">
                  {/* Quote */}
                  <blockquote className="text-lg lg:text-xl text-white/80 leading-relaxed mb-8 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-persian-blue/40 to-persian-blue/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-white/70">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-persian-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

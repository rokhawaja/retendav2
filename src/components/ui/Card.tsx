"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "glass" | "glow";
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default:
        "bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl",
      glass:
        "bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl",
      glow:
        "bg-white/5 border border-persian-blue/30 backdrop-blur-xl rounded-2xl glow-subtle",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };

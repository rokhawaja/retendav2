"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer will-change-transform";

    const variants = {
      primary:
        "bg-persian-blue text-white hover:bg-persian-blue/90 shadow-lg shadow-persian-blue/25 hover:shadow-xl hover:shadow-persian-blue/30",
      secondary:
        "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20",
      outline:
        "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5",
      ghost: "bg-transparent text-white/80 hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };

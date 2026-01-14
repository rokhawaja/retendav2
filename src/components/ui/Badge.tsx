import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white/80 border-white/10",
    primary: "bg-persian-blue/20 text-persian-blue border-persian-blue/30",
    outline: "bg-transparent text-white/70 border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

"use client";

import { cn } from "@/lib/utils";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "white";
  className?: string;
}

export default function Spinner({
  size = "md",
  color = "primary",
  className = "",
}: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  const colorClasses = {
    primary: "border-primary/30 border-t-primary",
    secondary: "border-secondary/30 border-t-secondary",
    white: "border-white/30 border-t-white",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
}

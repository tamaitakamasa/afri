"use client";

import { cn } from "@/lib/utils";
import Spinner from "./spinner";
import { motion } from "motion/react";

interface LoadingOverlayProps {
  isLoading: boolean;
  className?: string;
  spinnerSize?: "sm" | "md" | "lg";
  spinnerColor?: "primary" | "secondary" | "white";
}

export default function LoadingOverlay({
  isLoading,
  className = "",
  spinnerSize = "md",
  spinnerColor = "primary",
}: LoadingOverlayProps) {
  if (!isLoading) return null;

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Spinner size={spinnerSize} color={spinnerColor} />
    </motion.div>
  );
}

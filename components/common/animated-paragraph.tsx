"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedParagraphProps {
  children: ReactNode;
  className?: string;
  delay?: number; // アニメーション遅延（秒）
  duration?: number; // アニメーション時間（秒）
  once?: boolean; // 一度だけアニメーションするか
  margin?: string; // ビューポートマージン
}

export default function AnimatedParagraph({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  once = true,
  margin = "-100px",
}: AnimatedParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once, margin }}
      className={cn(className)}
    >
      {children}
    </motion.p>
  );
}

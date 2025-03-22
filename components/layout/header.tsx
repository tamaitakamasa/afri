"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ThemeLogo } from "../common/theme-logo";
import { useRef } from "react";

export default function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const menuOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.85],
    [0, 0, 1],
  );

  return (
    <>
      <motion.header
        style={{ opacity: menuOpacity }}
        className="fixed top-8 z-20 w-full"
      >
        <div className="container mx-auto px-4 flex flex-row items-center justify-between">
          <h1 className="">
            <span className="sr-only">
              Awaji Food Research Institute
            </span>
            <ThemeLogo />
          </h1>
          <div>menu</div>
        </div>
      </motion.header>
      <div
        className="absolute inset-0 z-0 h-screen w-full pointer-events-none"
        ref={containerRef}
      />
    </>
  );
}

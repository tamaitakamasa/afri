"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ThemeLogo } from "../common/theme-logo";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import NavDrawer from "../common/drawer";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <motion.header
        style={isHomePage ? { opacity: menuOpacity } : { opacity: 1 }}
        className="fixed top-8 z-20 w-full"
      >
        <div className="container mx-auto flex flex-row items-center justify-between px-4">
          <h1 className="">
            <span className="sr-only">
              Awaji Food Research Institute
            </span>
            <Link href="/">
              <ThemeLogo />
            </Link>
          </h1>
          <div className="flex flex-row items-center gap-8">
            <Link
              href="/contact"
              className="font-en border-1 rounded-full border-zinc-800 px-6 py-2 text-sm font-bold uppercase backdrop-blur-sm dark:border-zinc-100"
            >
              Contact
            </Link>
            <div
              onClick={toggleDrawer}
              className="flex cursor-pointer flex-col items-center justify-center gap-0 text-current hover:bg-transparent"
              aria-label="メニューを開く"
            >
              <Menu size={36} strokeWidth={1} />
              <span className="font-en text-[10px] font-bold uppercase">
                menu
              </span>
            </div>
          </div>
        </div>
      </motion.header>
      {isHomePage && (
        <div
          className="pointer-events-none absolute inset-0 z-0 h-screen w-full"
          ref={containerRef}
        />
      )}
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}

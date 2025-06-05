"use client";

import { ThemeLogo } from "../common/theme-logo";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import NavDrawer from "../common/drawer";
import { cn } from "../../lib/utils";
import { ThemeToggleButton } from "../ui/theme-toggle-button";
import { useScrollDirection } from "../../hooks/use-scroll-direction";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // opacity制御用のstate（Tailwindクラス用）
  const [isOpaque, setIsOpaque] = useState(true);

  const headerRef = useRef<HTMLElement>(null);

  // カスタムフックでスクロール方向検知
  const { isVisible } = useScrollDirection({
    scrollBuffer: 100,
    scrollTimeout: 150,
    initialVisible: true, // headerは初期状態で表示
  });

  // パスが変更されたときにopacity状態をリセット
  useLayoutEffect(() => {
    // opacityの初期状態をstateで管理
    if (isHomePage) {
      setIsOpaque(false);
      console.log("🏠 Home page: opacity state set to false");
    } else {
      setIsOpaque(true);
      console.log("📄 Other page: opacity state set to true");
    }
  }, [pathname, isHomePage]);

  // スクロール位置によるopacity制御（ホームページのみ）
  useEffect(() => {
    if (!isHomePage) return;

    const handleScrollOpacity = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.8; // 80%の位置

      if (currentScrollY > triggerPoint) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false);
      }
    };

    // 初期状態を設定
    handleScrollOpacity();

    window.addEventListener("scroll", handleScrollOpacity, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScrollOpacity);
    };
  }, [isHomePage]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 z-20 w-full pt-6 transition-all duration-300 ease-in-out md:block md:pt-8",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isOpaque ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="container mx-auto flex flex-row items-center justify-between px-4">
          <h1 className="">
            <span className="sr-only">
              Awaji Food Research Institute
            </span>
            <Link
              href="/"
              className="transition-opacity hover:opacity-70"
            >
              <ThemeLogo className="w-[150px] md:w-[200px]" />
            </Link>
          </h1>
          <div className="flex flex-row items-center gap-6">
            <Link
              href="/contact"
              className="font-en border-1 hidden rounded-full border-zinc-800 px-6 py-2 text-sm font-bold uppercase backdrop-blur-sm transition-opacity hover:opacity-70 md:block dark:border-zinc-100"
            >
              Contact
            </Link>
            <ThemeToggleButton className="hidden border border-zinc-800 backdrop-blur-sm dark:border-zinc-100 md:flex" />
            <div
              onClick={toggleDrawer}
              className="flex cursor-pointer flex-col items-center justify-center gap-0 text-current transition-opacity hover:bg-transparent hover:opacity-70"
              aria-label="メニューを開く"
            >
              <Menu
                strokeWidth={1}
                className="h-7 w-7 md:h-9 md:w-9"
              />
              <span className="font-en text-[8px] font-bold uppercase md:text-[10px]">
                menu
              </span>
            </div>
          </div>
        </div>
      </header>
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}

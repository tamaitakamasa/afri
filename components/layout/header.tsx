"use client";

import { ThemeLogo } from "../common/theme-logo";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import NavDrawer from "../common/drawer";
import { cn } from "../../lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // ページ遷移時に確実にリセットされるように初期化
  const [isVisible, setIsVisible] = useState(true);
  // opacity制御用のstate（Tailwindクラス用）
  const [isOpaque, setIsOpaque] = useState(true);

  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const scrollBuffer = 100; // スクロール判定のバッファ値（ピクセル）
  const lastScrollTime = useRef(Date.now());
  const scrollTimeout = 150; // スクロール判定のタイムアウト（ミリ秒）

  // ページ遷移時に状態を即座にリセット
  useEffect(() => {
    // 表示状態を強制的にリセット
    setIsVisible(true);
    // opacity状態も適切に設定
    setIsOpaque(!isHomePage);
    // スクロール関連の状態もリセット
    lastScrollY.current = 0;
    lastScrollTime.current = Date.now();
  }, [pathname, isHomePage]);

  // パスが変更されたときに状態をリセット
  useLayoutEffect(() => {
    // opacityの初期状態をstateで管理
    if (isHomePage) {
      setIsOpaque(false);
      console.log('🏠 Home page: opacity state set to false');
    } else {
      setIsOpaque(true);
      console.log('📄 Other page: opacity state set to true');
    }
  }, [pathname, isHomePage]);

  // スクロール方向による表示・非表示制御
  useEffect(() => {
    // ページ遷移時はスクロール制御を一時的に無効化
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTime.current;

      // スクロールの差分を計算
      const scrollDifference = currentScrollY - lastScrollY.current;

      // スクロール方向を判定（バッファとタイムアウトを考慮）
      if (Math.abs(scrollDifference) > scrollBuffer && timeSinceLastScroll > scrollTimeout) {
        if (scrollDifference > 0 && currentScrollY > scrollBuffer) {
          // 下スクロール（かつ一定以上スクロールされている場合）
          setIsVisible(false);
        } else if (scrollDifference < 0) {
          // 上スクロール
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
        lastScrollTime.current = currentTime;
      }
    };

    // ページ遷移後少し遅らせてスクロールイベントを登録
    timeoutId = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }, 100);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // pathnameが変更されるたびにイベントリスナーを再登録

  // スクロール位置によるopacity制御（ホームページのみ）
  useEffect(() => {
    if (!isHomePage) return;

    const handleScrollOpacity = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.8; // 80%の位置

      if (scrollY > triggerPoint) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false);
      }
    };

    // 初期状態を設定
    handleScrollOpacity();

    window.addEventListener("scroll", handleScrollOpacity, { passive: true });

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
          "fixed top-0 z-20 w-full pt-6 md:pt-8 md:block transition-all duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isOpaque ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto flex flex-row items-center justify-between px-4">
          <h1 className="">
            <span className="sr-only">
              Awaji Food Research Institute
            </span>
            <Link href="/" className="hover:opacity-70 transition-opacity">
              <ThemeLogo className="w-[150px] md:w-[200px]" />
            </Link>
          </h1>
          <div className="flex flex-row items-center gap-8">
            <Link
              href="/contact"
              className="hidden font-en border-1 rounded-full border-zinc-800 px-6 py-2 text-sm font-bold uppercase backdrop-blur-sm dark:border-zinc-100 md:block hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
            <div
              onClick={toggleDrawer}
              className="flex cursor-pointer flex-col items-center justify-center gap-0 text-current hover:bg-transparent hover:opacity-70 transition-opacity"
              aria-label="メニューを開く"
            >
              <Menu strokeWidth={1} className="w-7 h-7 md:w-9 md:h-9" />
              <span className="font-en text-[8px] md:text-[10px] font-bold uppercase">
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

"use client";

import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface UseScrollDirectionOptions {
  scrollBuffer?: number;
  scrollTimeout?: number;
  initialVisible?: boolean;
}

interface UseScrollDirectionReturn {
  isVisible: boolean;
  scrollY: number;
  scrollDirection: "up" | "down" | null;
}

export function useScrollDirection({
  scrollBuffer = 100,
  scrollTimeout = 150,
  initialVisible = true,
}: UseScrollDirectionOptions = {}): UseScrollDirectionReturn {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());

  // ページ遷移時に状態をリセット
  useEffect(() => {
    setIsVisible(initialVisible);
    setScrollY(0);
    setScrollDirection(null);
    lastScrollY.current = 0;
    lastScrollTime.current = Date.now();
  }, [pathname, initialVisible]);

  // スクロール方向による表示・非表示制御
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTime.current;

      // 現在のスクロール位置を更新
      setScrollY(currentScrollY);

      // スクロールの差分を計算
      const scrollDifference = currentScrollY - lastScrollY.current;

      // スクロール方向を判定（バッファとタイムアウトを考慮）
      if (
        Math.abs(scrollDifference) > scrollBuffer &&
        timeSinceLastScroll > scrollTimeout
      ) {
        if (scrollDifference > 0 && currentScrollY > scrollBuffer) {
          // 下スクロール（かつ一定以上スクロールされている場合）
          setIsVisible(false);
          setScrollDirection("down");
        } else if (scrollDifference < 0) {
          // 上スクロール
          setIsVisible(true);
          setScrollDirection("up");
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
  }, [pathname, scrollBuffer, scrollTimeout]);

  return {
    isVisible,
    scrollY,
    scrollDirection,
  };
}

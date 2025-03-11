"use client";

import { useEffect, useRef } from "react";
import VideoPlayer from "@/components/common/video-player";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // アニメーションシーケンスを設定
    const runAnimation = async () => {
      // 初期状態を確保
      container.style.clipPath = "circle(5% at 50% 90%)";

      // 少し待機
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // 1. 小さな正円がページの下から中央に移動
      container.style.transition = "clip-path 2s ease-out";
      container.style.clipPath = "circle(10% at 50% 50%)";

      // アニメーション完了を待機
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 2. 正円が正方形に変形しながら拡大
      container.style.transition = "clip-path 1.8s ease-in-out";
      container.style.clipPath =
        "polygon(40% 40%, 60% 40%, 60% 60%, 40% 60%)";

      // アニメーション完了を待機
      await new Promise((resolve) => setTimeout(resolve, 1800));

      // 3. 画面全域までマスクが拡大
      container.style.transition = "clip-path 1s ease-in-out";
      container.style.clipPath =
        "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    };

    // アニメーションを実行
    runAnimation();

    // クリーンアップ関数
    return () => {
      // アニメーションのクリーンアップが必要な場合はここに記述
    };
  }, []);

  return (
    <div className="fixed inset-0 h-screen w-full">
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{
          clipPath: "circle(5% at 50% 90%)", // 初期状態：ページ下部の小さな円
        }}
      >
        <VideoPlayer url="https://www.youtube.com/watch?v=9bZkp7q19f0" />
      </div>
    </div>
  );
}

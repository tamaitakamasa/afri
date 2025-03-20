"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import mainVisual from "@/public/images/mv.webp";
import Image from "next/image";

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [typingCompleted, setTypingCompleted] = useState(false);

  // 画像がロードされたことを追跡
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // タイプライターアニメーションが完了したことを追跡
  const handleTypingComplete = (el: HTMLElement) => {
    setTypingCompleted(true);
    el.classList.add("opacity-0");
  };

  // アニメーションシーケンスを実行する関数
  const runAnimation = useCallback(async () => {
    if (!containerRef.current || animationStarted) return;

    setAnimationStarted(true);
    const container = containerRef.current;

    // 初期状態の設定を明示的に行う
    container.style.clipPath = "circle(5% at 50% 120%)";
    container.style.opacity = "1"; // 確実に表示する

    // スタイルの適用を確実にするための小さな遅延
    await new Promise((resolve) => setTimeout(resolve, 50));

    // 少し待機して視聴者が準備できるようにする
    await new Promise((resolve) => setTimeout(resolve, 400));

    // 1. 小さな正円がページの下（画面外）からページの中央に移動
    container.style.transition =
      "clip-path 1.6s cubic-bezier(0.22, 1, 0.36, 1)";
    container.style.clipPath = "circle(8% at 50% 50%)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1600));

    // 2. 正円が拡大
    container.style.transition =
      "clip-path 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)";
    container.style.clipPath = "circle(30% at 50% 50%)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // 3. 画面全域までマスクが滑らかに拡大
    container.style.transition =
      "clip-path 1.5s cubic-bezier(0.22, 1, 0.36, 1)";
    container.style.clipPath = "circle(150% at 50% 50%)";
  }, [animationStarted]);

  // タイピングが完了し、画像がロードされたらアニメーションを開始
  useEffect(() => {
    if (typingCompleted && imageLoaded) {
      runAnimation();
    }
  }, [typingCompleted, imageLoaded, runAnimation]);

  // コンポーネントマウント時に初期スタイルを設定
  useEffect(() => {
    if (containerRef.current) {
      // 初期状態では非表示に設定（アニメーション開始前に画面が白くならないように）
      containerRef.current.style.opacity = "0";
      containerRef.current.style.clipPath = "circle(5% at 50% 120%)";
    }
  }, []);

  // コンポーネントのアンマウント時のクリーンアップ
  useEffect(() => {
    const currentContainer = containerRef.current;
    return () => {
      if (currentContainer) {
        currentContainer.style.transition = "";
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <TypeAnimation
          sequence={[
            "awaji",
            800,
            "awaji food research",
            800,
            "awaji food research institute",
            800,
            (element: HTMLElement | null) => {
              if (element) {
                handleTypingComplete(element);
              }
            },
          ]}
          wrapper="span"
          speed={50}
          repeat={0}
          className="font-en text-3xl font-bold uppercase transition duration-700 ease-in-out"
        />
      </div>
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{
          clipPath: "circle(5% at 50% 120%)",
          opacity: "0", // 初期状態では非表示
        }}
      >
        <div className="pointer-events-none h-screen w-full relative">
          <Image
            src={mainVisual}
            alt="main visual"
            fill
            className="object-cover"
            onLoadingComplete={handleImageLoad}
            priority
          />
        </div>
      </div>
    </div>
  );
}

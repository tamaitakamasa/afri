"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  // 動画が準備完了したら状態を更新する
  const handleVideoReady = () => {
    setVideoReady(true);
  };

  // アニメーションシーケンスを実行する関数
  const runAnimation = async () => {
    if (!containerRef.current || animationStarted) return;

    setAnimationStarted(true);
    const container = containerRef.current;

    // 初期状態: 画面外の小さな円
    container.style.clipPath = "circle(5% at 50% 120%)";

    // 少し待機して視聴者が準備できるようにする
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 1. 小さな正円がページの下（画面外）からページの中央に移動
    container.style.transition = "clip-path 1.8s cubic-bezier(0.22, 1, 0.36, 1)";
    container.style.clipPath = "circle(8% at 50% 50%)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1800));

    // 2. 正円が拡大
    container.style.transition = "clip-path 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)";
    container.style.clipPath = "circle(30% at 50% 50%)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // 3. 画面全域までマスクが滑らかに拡大
    container.style.transition = "clip-path 1.5s cubic-bezier(0.22, 1, 0.36, 1)";
    container.style.clipPath = "circle(150% at 50% 50%)";
  };

  // 動画の準備ができたらアニメーションを開始
  useEffect(() => {
    if (videoReady) {
      runAnimation();
    }
  }, [videoReady]);

  // コンポーネントのアンマウント時のクリーンアップ
  useEffect(() => {
    return () => {
      if (containerRef.current) {
        containerRef.current.style.transition = "";
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 h-screen w-full">
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{
          clipPath: "circle(5% at 50% 120%)", // 初期状態：画面外の小さな円
        }}
      >
        <div className="aspect-video h-screen w-full">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9bZkp7q19f0"
            width="100%"
            height="100%"
            muted={true}
            controls={false}
            playing={true}
            playsinline={true}
            loop={true}
            onReady={handleVideoReady}
          />
        </div>
      </div>
    </div>
  );
}

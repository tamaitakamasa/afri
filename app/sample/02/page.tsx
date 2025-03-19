// app/sample/02/page.tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const runAnimation = useCallback(async () => {
    if (!containerRef.current || animationStarted) return;

    setAnimationStarted(true);
    const container = containerRef.current;

    // 初期状態：画面外の横長の角丸長方形
    container.style.clipPath = "inset(100% 20% 0% 20% round 16px)";

    // コンテナを表示
    container.style.opacity = "1";

    // 少し待機
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 1. 横長の角丸長方形がページの下から中央に移動
    container.style.transition =
      "clip-path 1.6s cubic-bezier(0.33, 1, 0.68, 1)";
    container.style.clipPath = "inset(40% 20% 40% 20% round 16px)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1600));

    // 2. 中央で長方形が拡大
    container.style.transition =
      "clip-path 1s cubic-bezier(0.65, 0, 0.35, 1)";
    container.style.clipPath = "inset(25% 10% 25% 10% round 24px)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 3. さらに拡大して画面の大部分を覆う
    container.style.transition =
      "clip-path 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)";
    container.style.clipPath = "inset(10% 5% 10% 5% round 32px)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // 4. 最終的に画面全体を覆う
    container.style.transition =
      "clip-path 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
    container.style.clipPath = "inset(0% 0% 0% 0% round 0px)";
  }, [animationStarted]);

  // 動画の準備ができたらアニメーションを開始
  useEffect(() => {
    if (videoReady) {
      runAnimation();
    }
  }, [videoReady, runAnimation]);

  // コンポーネントのアンマウント時のクリーンアップ
  useEffect(() => {
    // ref の現在の値をローカル変数にコピー
    const currentContainer = containerRef.current;

    return () => {
      // クリーンアップ関数ではローカル変数を使用
      if (currentContainer) {
        currentContainer.style.transition = "";
      }
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 h-screen w-full bg-white">
      <div
        ref={containerRef}
        className="h-full w-full opacity-0"
        style={{
          clipPath: "inset(100% 20% 0% 20% round 16px)", // 初期状態：画面外の横長角丸長方形
        }}
      >
        <div className="aspect-video h-screen w-full">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=TbViczxCFNI"
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

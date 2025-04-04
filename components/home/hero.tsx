"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { TypeAnimation } from "react-type-animation";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [typingCompleted, setTypingCompleted] = useState(false);

  // 動画が準備完了したら状態を更新する
  const handleVideoReady = () => {
    setVideoReady(true);
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

    // 初期状態: 画面外の小さな円
    container.style.clipPath = "circle(5% at 50% 120%)";

    // 少し待機して視聴者が準備できるようにする
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 1. 小さな正円がページの下（画面外）からページの中央に移動
    container.style.transition =
      "clip-path 1.8s cubic-bezier(0.22, 1, 0.36, 1)";
    container.style.clipPath = "circle(8% at 50% 50%)";

    // アニメーション完了を待機
    await new Promise((resolve) => setTimeout(resolve, 1800));

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

  // 動画の準備ができ、タイピングが完了したらアニメーションを開始
  useEffect(() => {
    if (videoReady && typingCompleted) {
      runAnimation();
    }
  }, [videoReady, typingCompleted, runAnimation]);

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
            // タイピングが完了したときに実行するコールバック
            (element: HTMLElement | null) => {
              if (element) {
                handleTypingComplete(element);
              }
            },
          ]}
          wrapper="span"
          speed={50}
          repeat={0} // 1回だけ実行（繰り返しなし）
          className="text-4xl font-bold uppercase transition duration-700 ease-in-out"
        />
      </div>
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{
          clipPath: "circle(5% at 50% 120%)", // 初期状態：画面外の小さな円
        }}
      >
        <div className="pointer-events-none aspect-video h-screen w-full">
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

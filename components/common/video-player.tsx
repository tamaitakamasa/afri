"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface VideoPlayerProps {
  url: string;
}

// クリップパスの定義
const clipPaths = {
  start: "polygon(50% 0%, 0% 100%, 100% 100%)", // 三角形
  middle: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // 長方形（全画面）
  end: "circle(50% at 50% 50%)", // 円形
};

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // コンポーネントがマウントされた後にスクロールイベントを設定
    if (!videoContainerRef.current) return;

    const container = videoContainerRef.current;

    // スクロールイベントハンドラ
    const handleScroll = () => {
      // ページの高さを取得
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      // 現在のスクロール位置
      const scrollPosition = window.scrollY;
      // スクロール進捗率（0から1）
      const progress = Math.min(scrollPosition / pageHeight, 1);

      // 最初の遷移（三角形から長方形へ）: 0-0.3のスクロール範囲
      if (progress < 0.3) {
        const normalizedProgress = progress / 0.3; // 0から1の範囲に正規化
        container.style.clipPath = normalizedProgress < 0.01
          ? clipPaths.start
          : `polygon(
              ${50 - 50 * normalizedProgress}% ${0 + 0 * normalizedProgress}%,
              ${100 - 0 * normalizedProgress}% ${0 + 0 * normalizedProgress}%,
              ${100 - 0 * normalizedProgress}% ${100 - 0 * normalizedProgress}%,
              ${0 + 0 * normalizedProgress}% ${100 - 0 * normalizedProgress}%
            )`;
      }
      // 二番目の遷移（長方形から円形へ）: 0.3-0.6のスクロール範囲
      else if (progress < 0.6) {
        const normalizedProgress = (progress - 0.3) / 0.3; // 0から1の範囲に正規化
        const radius = 50 * normalizedProgress;
        container.style.clipPath = `circle(${radius}% at 50% 50%)`;
      }
      // 最終形状（円形）: 0.6-1.0のスクロール範囲
      else {
        container.style.clipPath = clipPaths.end;
      }
    };

    // 初期状態を設定
    handleScroll();

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={videoContainerRef}
        className="aspect-video h-screen w-full"
        style={{ clipPath: clipPaths.start }} // 初期状態
      >
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          muted={true}
          controls={false}
          playing={true}
          playsinline={true}
          loop={true}
        />
      </div>
    </>
  );
}

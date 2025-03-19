// app/sample/01/page.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface VideoPlayerProps {
  url: string;
}

function VideoPlayer({ url }: VideoPlayerProps) {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoContainerRef.current) return;
    const container = videoContainerRef.current;

    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = Math.min(scrollPosition / pageHeight, 1);

      // 第1段階: 小さな円から大きな円へ (0-0.33のスクロール範囲)
      if (progress < 0.33) {
        const normalizedProgress = progress / 0.33;
        const radius = 25 + normalizedProgress * 15; // 25%から40%へ
        container.style.clipPath = `circle(${radius}% at 50% 50%)`;
      }
      // 第2段階: 円から角丸正方形へ (0.33-0.66のスクロール範囲)
      else if (progress < 0.66) {
        const normalizedProgress = (progress - 0.33) / 0.33;

        // 新しいアプローチ: 多角形を使用して円から正方形への変形を制御
        // ここでは8つの点で作る八角形を使って円と正方形の中間形状を作る

        if (normalizedProgress <= 0.5) {
          // 円からスムーズに八角形へ
          const circleRadius = 40 + (normalizedProgress * 2) * 10; // 40%から50%へ
          container.style.clipPath = `circle(${circleRadius}% at 50% 50%)`;
        } else {
          // 八角形から角丸正方形へ
          // 正規化された進行度（0.5-1.0を0-1に）
          const p = (normalizedProgress - 0.5) * 2;

          // 角丸の設定 (徐々に小さくなる)
          const cornerSize = Math.max(20 * (1 - p) + 10, 10); // 20%から10%へ

          // インセット値を計算（徐々に小さくなる）
          const insetSize = Math.max(20 * (1 - p) + 5, 5); // 20%から5%へ

          // 角丸正方形へ直接変形（横長になるのを防ぐ）
          container.style.clipPath = `inset(${insetSize}% ${insetSize}% ${insetSize}% ${insetSize}% round ${cornerSize}px)`;
        }
      }
      // 第3段階: 角丸正方形から完全な正方形へ (0.66-1.0のスクロール範囲)
      else {
        const normalizedProgress = (progress - 0.66) / 0.34;
        // 初期値を小さく設定して、正方形に近づけるところから始める
        const insetValue = 5 * (1 - normalizedProgress); // 5%から0%へ
        const cornerSize = 10 * (1 - normalizedProgress); // 10pxから0pxへ

        container.style.clipPath = `inset(${insetValue}% ${insetValue}% ${insetValue}% ${insetValue}% round ${cornerSize}px)`;
      }
    };

    // 初期状態を設定
    container.style.clipPath = "circle(25% at 50% 50%)";
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
        style={{
          clipPath: "circle(25% at 50% 50%)",
          transition: "clip-path 0.1s ease-out" // より短い遷移時間で滑らかさを保つ
        }}
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

export default function Home() {
  return (
    <div className="relative min-h-[300vh]">
      {/* 固定位置の動画プレーヤー */}
      <div className="fixed inset-0 h-screen w-full">
        <VideoPlayer url="https://www.youtube.com/watch?v=TbViczxCFNI" />
      </div>

      {/* スクロール用のコンテンツ */}
      <div className="relative z-10 mt-screen pt-[100vh]">
        <div className="mx-auto max-w-4xl space-y-32 p-8">
          <section className="rounded-lg bg-white/80 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold">シンプルな形状変化</h2>
            <p className="text-lg">
              スクロールに応じて、視聴エリアが円から正方形へと変化します。
              シンプルなデザインながら、効果的な視覚体験を提供します。
            </p>
          </section>

          <section className="rounded-lg bg-white/80 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold">段階的な変化</h2>
            <p className="text-lg">
              最初は小さな円から始まり、大きな円に拡大。
              その後、角丸のある正方形へと変化し、最終的には
              画面全体を覆う完全な正方形へと変わります。
            </p>
          </section>

          <section className="rounded-lg bg-white/80 p-8 backdrop-blur-sm">
            <h2 className="mb-4 text-3xl font-bold">デザインの洗練</h2>
            <p className="text-lg">
              シンプルな形状の変化だからこそ、洗練された印象を与えます。
              ミニマルなアプローチがモダンなウェブデザインにマッチし、
              コンテンツの魅力を引き立てます。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface VideoPlayerProps {
  url: string;
}

// クリップパスの定義 - シンプルな円と正方形のバリエーション
const clipPaths = {
  // 初期状態: 小さな円
  start: "circle(25% at 50% 50%)",
  // 中間状態1: 大きな円
  midOne: "circle(40% at 50% 50%)",
  // 中間状態2: 角丸の正方形
  midTwo: "inset(20% 20% 20% 20% round 25%)",
  // 最終状態: 完全な正方形
  end: "inset(0% 0% 0% 0%)"
};

function VideoPlayer({ url }: VideoPlayerProps) {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // コンポーネントがマウントされた後にスクロールイベントを設定
    if (!videoContainerRef.current) return;

    const container = videoContainerRef.current;

    // スクロールイベントハンドラ
    const handleScroll = () => {
      // ページの高さを取得
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // 現在のスクロール位置
      const scrollPosition = window.scrollY;
      // スクロール進捗率（0から1）
      const progress = Math.min(scrollPosition / pageHeight, 1);

      // 第1段階: 小さな円から大きな円へ (0-0.33のスクロール範囲)
      if (progress < 0.33) {
        const normalizedProgress = progress / 0.33; // 0から1の範囲に正規化
        const radius = 25 + normalizedProgress * 15; // 25%から40%へ
        container.style.clipPath = `circle(${radius}% at 50% 50%)`;
      }
      // 第2段階: 円から角丸正方形へ (0.33-0.66のスクロール範囲)
      else if (progress < 0.66) {
        const normalizedProgress = (progress - 0.33) / 0.33; // 0から1の範囲に正規化

        if (normalizedProgress < 0.5) {
          // 前半: 円のまま最大サイズまで大きくなる
          const radius = 40 + normalizedProgress * 10;
          container.style.clipPath = `circle(${radius}% at 50% 50%)`;
        } else {
          // 後半: 円から角丸正方形へ変形（正しい変形を実装）
          const adjustedProgress = (normalizedProgress - 0.5) * 2; // 0-1に調整

          // 角丸正方形に直接変化する（中間に楕円を挟まない）
          const cornerRadius = Math.max(50 - adjustedProgress * 25, 25); // 50%から25%へ

          // 指定された比率の角丸正方形（最初は円に近い大きな角丸、徐々に角丸正方形へ）
          const insetValue = Math.max(30 - adjustedProgress * 10, 20); // 30%から20%へ
          container.style.clipPath = `inset(${insetValue}% ${insetValue}% ${insetValue}% ${insetValue}% round ${cornerRadius}%)`;
        }
      }
      // 第3段階: 角丸正方形から完全な正方形へ (0.66-1.0のスクロール範囲)
      else {
        const normalizedProgress = (progress - 0.66) / 0.34; // 0から1の範囲に正規化
        const insetValue = 20 * (1 - normalizedProgress); // 20%から0%へ
        const roundValue = 25 * (1 - normalizedProgress); // 25%から0%へ
        container.style.clipPath = `inset(${insetValue}% ${insetValue}% ${insetValue}% ${insetValue}% round ${roundValue}%)`;
      }
    };

    // 初期状態を設定
    container.style.clipPath = clipPaths.start;
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
          clipPath: clipPaths.start,
          transition: "clip-path 0.2s ease-out" // スムーズなスクロール感のための短い遷移
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
        <VideoPlayer url="https://www.youtube.com/watch?v=4MgLFWefpbk" />
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

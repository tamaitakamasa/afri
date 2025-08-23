"use client";

import { useRef, useState } from "react";
// import mainVisual from "@/public/images/mv.webp";
import logo from "@/public/images/logo.svg";
import logoLight from "@/public/images/logo_light.svg";
import Image from "next/image";
// import { motion, useScroll, useTransform } from "motion/react";
import { StreamPlayerOfficial } from "../features/video/stream-player-official";
import { cn } from "@/lib/utils";

export default function HomeVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end start"],
  // });

  // // 背景画像のパララックス効果
  // const backgroundY = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   // ["-20dvh", "20dvh"],
  //   ["0", "0"],
  // );

  // // ロゴのトランスフォーメーション
  // const logoWidth = useTransform(
  //   scrollYProgress,
  //   [0, 0.75], // 80%のスクロールで変形完了
  //   ["500px", "200px"],
  // );

  // // ロゴの垂直位置（上からの距離）- 中央から下部へ
  // const logoBottom = useTransform(
  //   scrollYProgress,
  //   [0, 0.75],
  //   ["50%", "10%"],
  // );

  // // ロゴの垂直方向の変形基準点を調整
  // const logoTransformY = useTransform(
  //   scrollYProgress,
  //   [0, 0.75],
  //   ["50%", "0%"],
  // );

  // // ロゴの不透明度 - 変形完了後にフェードアウト
  // const logoOpacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.8, 0.85], // 0-80%は表示、80%-でフェードアウト
  //   [1, 1, 0],
  // );

  // // 画像がロードされたことを追跡
  // // const handleImageLoad = () => {
  // //   setImageLoaded(true);
  // // };

  return (
    <div
      className="relative aspect-[16/9.55] h-auto w-full max-h-[100dvh] overflow-clip"
      ref={containerRef}
    >
      <StreamPlayerOfficial
        src="b22c341a502f035d293631992607519e"
        autoplay={true}
        muted={true}
        loop={true}
        controls={false}
        responsive={false}
        width="100%"
        height="100%"
        // streamRef={streamRef}
        className="absolute inset-0"
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      {/* ロゴ */}
      <div className="container mx-auto px-4">
        <div className="absolute bottom-1/2 z-10 w-[clamp(200px,43vw,550px)] translate-y-1/2">
          <Image
            src={logo}
            alt="logo"
            width={550}
            height={199}
            className="h-auto w-full"
          />
        </div>
      </div>
      {/* ローディング */}
      <div
        className={cn(
          "bg-white fixed inset-0 z-20 flex items-center justify-center transition-opacity duration-1000",
          isVideoLoaded
            ? "pointer-events-none opacity-0"
            : "opacity-100",
        )}
      >
        {/* <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-white"></div> */}
        <div className="relative aspect-square w-[clamp(100px,20vw,200px)]">
          <Image
            src={logo}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

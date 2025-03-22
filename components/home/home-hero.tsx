"use client";

import { useRef, useState } from "react";
import mainVisual from "@/public/images/mv.webp";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setImageLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 背景画像のパララックス効果
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20dvh", "20dvh"],
  );

  // ロゴのトランスフォーメーション
  const logoWidth = useTransform(
    scrollYProgress,
    [0, 0.75], // 80%のスクロールで変形完了
    ["500px", "200px"],
  );

  // ロゴの垂直位置（上からの距離）- 中央から下部へ
  const logoBottom = useTransform(
    scrollYProgress,
    [0, 0.75],
    ["50%", "10%"],
  );

  // ロゴの垂直方向の変形基準点を調整
  const logoTransformY = useTransform(
    scrollYProgress,
    [0, 0.75],
    ["50%", "0%"],
  );

  // ロゴの不透明度 - 変形完了後にフェードアウト
  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 0.8, 0.85], // 0-80%は表示、80%-でフェードアウト
    [1, 1, 0],
  );

  // 画像がロードされたことを追跡
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      ref={containerRef}
    >
      <div className="h-full w-full">
        <div className="pointer-events-none relative h-screen w-full">
          {/* 背景画像 */}
          <motion.figure
            className="absolute inset-0 -my-[20dvh]"
            style={{ y: backgroundY }}
          >
            <Image
              src={mainVisual}
              alt="main visual"
              fill
              className="object-cover"
              onLoadingComplete={handleImageLoad}
              priority
            />
          </motion.figure>
        </div>
      </div>
      {/* ロゴ */}
      <div className="container mx-auto px-4">
        <motion.div
          className="absolute z-10"
          style={{
            width: logoWidth,
            bottom: logoBottom,
            y: logoTransformY,
            opacity: logoOpacity,
          }}
        >
          <Image src={logo} alt="logo" width={550} height={199} />
        </motion.div>
      </div>
    </div>
  );
}

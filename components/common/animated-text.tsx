// components/common/animated-text.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

// TypeAnimationの型定義を取得
type TypeAnimationProps = React.ComponentProps<typeof TypeAnimation>;

interface AnimatedTextProps {
  children: string; // テキスト内容
  className?: string;
  delay?: number; // アニメーション開始前の遅延（ミリ秒）
  speed?: TypeAnimationProps['speed']; // タイプ速度
  startOnView?: boolean; // 画面に入ったときに開始するかどうか
  wrapper?: TypeAnimationProps['wrapper']; // HTMLタグの種類（span, p, h1など）
  once?: boolean; // 一度だけアニメーションを実行するか
  cursor?: boolean; // カーソルを表示するか
  onComplete?: () => void; // アニメーション完了時のコールバック
}

export default function AnimatedText({
  children,
  className = "",
  delay = 300,
  speed = 50,
  startOnView = true,
  wrapper = "span",
  once = true,
  cursor = false,
  onComplete,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const [startAnimation, setStartAnimation] = useState(!startOnView);

  // 要素が画面に入ったとき、遅延後にアニメーションを開始
  useEffect(() => {
    if (isInView && startOnView) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay, startOnView]);

  const handleAnimationComplete = () => {
    if (onComplete) {
      onComplete();
    }
  };

  // wrapperに適用されるクラス
  const wrapperClass = cn(className);

  return (
    <div ref={ref} className={cn("relative", wrapperClass)}>
      {/* コンテンツの高さと幅を確保するプレースホルダー */}
      <div className="invisible whitespace-pre-wrap" aria-hidden="true">
        {children}
      </div>

      {/* アニメーションテキスト */}
      <div className="absolute inset-0 flex items-center justify-center">
        {startAnimation ? (
          <TypeAnimation
            sequence={[
              children,
              1000, // 完了後の待機時間
              () => handleAnimationComplete()
            ]}
            wrapper={wrapper}
            speed={speed}
            repeat={0}
            cursor={cursor}
            className="text-center" // テキスト中央寄せの追加
          />
        ) : (
          <span className="opacity-0">{children}</span>
        )}
      </div>
    </div>
  );
}

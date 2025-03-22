// components/common/animated-heading.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useInView } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

// TypeAnimationの型定義を取得
type TypeAnimationProps = React.ComponentProps<typeof TypeAnimation>;

interface AnimatedHeadingProps {
  title: string;
  className?: string;
  delay?: number; // アニメーション開始前の遅延（ミリ秒）
  speed?: TypeAnimationProps['speed']; // 正しい型を使用
  startOnView?: boolean; // 画面に入ったときに開始するかどうか
}

export default function AnimatedHeading({
  title,
  className,
  delay = 500, // デフォルトの遅延
  speed = 50, // デフォルトの速度
  startOnView = true, // デフォルトで画面に入ったときに開始
}: AnimatedHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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

  return (
    <h2
      ref={ref}
      className={cn(
        className,
        "font-en text-3xl font-bold uppercase tracking-widest relative"
      )}
    >
      {/* 見えないテキスト（スペース確保用） */}
      <span className="invisible" aria-hidden="true">
        {title}
      </span>

      {/* アニメーションテキスト（同じ位置に絶対配置） */}
      <span className="absolute left-0 top-0">
        {startAnimation ? (
          <TypeAnimation
            sequence={[title]}
            wrapper="span"
            speed={speed}
            repeat={0}
            cursor={false}
          />
        ) : (
          <span className="opacity-0">{title}</span>
        )}
      </span>
    </h2>
  );
}

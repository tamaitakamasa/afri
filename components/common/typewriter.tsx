"use client";

import React from "react";
import { TypeAnimation } from 'react-type-animation';

// TypeAnimationの型定義を取得
type TypeAnimationProps = React.ComponentProps<typeof TypeAnimation>;

interface TypewriterProps {
  sequences: (string | number)[];
  className?: string;
  speed?: TypeAnimationProps['speed'];
  wrapper?: TypeAnimationProps['wrapper'];
}

export default function Typewriter({
  sequences,
  className = "",
  speed = 50,
  wrapper = 'span'
}: TypewriterProps) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper={wrapper}
      speed={speed}
      className={className}
      repeat={Infinity}
    />
  );
}

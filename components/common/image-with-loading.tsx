"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Spinner from "./spinner";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  style?: React.CSSProperties;
}

export default function ImageWithLoading({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  sizes,
  priority = false,
  quality,
  style,
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
          <Spinner size="md" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        priority={priority}
        quality={quality}
        style={style}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}

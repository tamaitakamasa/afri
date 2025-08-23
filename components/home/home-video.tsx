"use client";

import { useRef, useState } from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import { StreamPlayerOfficial } from "../features/video/stream-player-official";
import { cn } from "@/lib/utils";

export default function HomeVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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

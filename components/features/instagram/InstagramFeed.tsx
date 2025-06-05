"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    elfsight?: {
      initialize: () => void;
    };
  }
}

interface InstagramFeedProps {
  className?: string;
}

export default function InstagramFeed({
  className,
}: InstagramFeedProps) {
  useEffect(() => {
    window.elfsight?.initialize();
  }, []);

  return (
    <div className={cn(className)}>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.elfsight?.initialize();
        }}
      />
      <div
        className="elfsight-app-157ddbf7-4acb-4bd7-a984-bfb30fc22e4f"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

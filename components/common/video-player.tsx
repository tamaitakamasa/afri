"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={videoContainerRef}
        className="aspect-video h-screen w-full"
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

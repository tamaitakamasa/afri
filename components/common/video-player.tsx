"use client";

// import { div } from "motion/react-client";
import dynamic from "next/dynamic";
import React from "react";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <>
      <div className="aspect-video w-full" style={{clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"}}>
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          muted={true}
          controls={false}
          playing={true}
          playsinline={true}
          light={true} // サムネイルを表示し、クリックでロード
        />
        <div className="absolute top-0 border-4 bg-indigo-500 bg-clip-border p-3"></div>
      </div>
    </>
  );
}

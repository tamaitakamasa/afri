"use client";

import dynamic from "next/dynamic";
import React from "react";
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className="aspect-video w-full">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
				muted={true}
        controls={false}
        playing={true}
        light={true} // サムネイルを表示し、クリックでロード
      />
    </div>
  );
}

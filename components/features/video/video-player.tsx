'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface VideoPlayerProps {
  videoId: string;
	className?: string;
}

export default function VideoPlayer({ videoId, className }: VideoPlayerProps) {
  // const videoId = extractVideoID(videoUrl);
  const youtubeUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : '';

  return (
    <div className={cn(`w-full h-full`, className)}>

        <ReactPlayer
          url={youtubeUrl}
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted={true}
          playsinline={true}
          config={{
            youtube: {
              playerVars: {
                controls: 0,
                rel: 0,
                showinfo: 0,
                modestbranding: 1,
                iv_load_policy: 3,
              },
            },
          }}
        />

    </div>
  );
}

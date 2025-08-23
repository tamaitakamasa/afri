'use client';

import React, { useRef, MutableRefObject } from 'react';
import { Stream, StreamProps, StreamPlayerApi } from '@cloudflare/stream-react';
import { cn } from '@/lib/utils';

// Extend StreamProps to include all possible props
interface ExtendedStreamProps extends StreamProps {
  height?: string;
  width?: string;
  currentTime?: number;
  primaryColor?: string;
  poster?: string;
  letterboxColor?: string;
  onAbort?: () => void;
  onCanPlay?: () => void;
  onCanPlayThrough?: () => void;
  onDurationChange?: () => void;
  onEnded?: () => void;
  onError?: () => void;
  onLoadedData?: () => void;
  onLoadedMetaData?: () => void;
  onLoadStart?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  onPlaying?: () => void;
  onProgress?: () => void;
  onRateChange?: () => void;
  onSeeked?: () => void;
  onSeeking?: () => void;
  onStalled?: () => void;
  onSuspend?: () => void;
  onTimeUpdate?: () => void;
  onVolumeChange?: () => void;
  onWaiting?: () => void;
  onStreamAdStart?: () => void;
  onStreamAdEnd?: () => void;
  onStreamAdTimeout?: () => void;
}

interface StreamPlayerOfficialProps {
  src: string; // Video ID or signed token
  className?: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: 'auto' | 'metadata' | 'none';
  height?: string;
  width?: string;
  responsive?: boolean;
  volume?: number;
  currentTime?: number;
  primaryColor?: string;
  poster?: string;
  letterboxColor?: string;
  streamRef?: MutableRefObject<StreamPlayerApi | undefined>;
  onAbort?: () => void;
  onCanPlay?: () => void;
  onCanPlayThrough?: () => void;
  onDurationChange?: () => void;
  onEnded?: () => void;
  onError?: () => void;
  onLoadedData?: () => void;
  onLoadedMetaData?: () => void;
  onLoadStart?: () => void;
  onPause?: () => void;
  onPlay?: () => void;
  onPlaying?: () => void;
  onProgress?: () => void;
  onRateChange?: () => void;
  onSeeked?: () => void;
  onSeeking?: () => void;
  onStalled?: () => void;
  onSuspend?: () => void;
  onTimeUpdate?: () => void;
  onVolumeChange?: () => void;
  onWaiting?: () => void;
  onStreamAdStart?: () => void;
  onStreamAdEnd?: () => void;
  onStreamAdTimeout?: () => void;
}

export function StreamPlayerOfficial({
  src,
  className,
  controls = false,
  autoplay = true,
  muted = true,
  loop = true,
  preload = 'auto',
  height,
  width,
  responsive = true,
  volume = 1,
  currentTime,
  primaryColor,
  poster,
  letterboxColor,
  streamRef,
  ...eventHandlers
}: StreamPlayerOfficialProps) {
  const internalRef = useRef<StreamPlayerApi | undefined>(undefined);
  const playerRef = streamRef || internalRef;

  // Build configuration object
  const streamProps: ExtendedStreamProps = {
    src,
    controls,
    autoplay,
    muted,
    loop,
    preload,
    volume,
    streamRef: playerRef,
  };

  // Add optional props if provided
  if (height) streamProps.height = height;
  if (width) streamProps.width = width;
  if (currentTime !== undefined) streamProps.currentTime = currentTime;
  if (primaryColor) streamProps.primaryColor = primaryColor;
  if (poster) streamProps.poster = poster;
  if (letterboxColor) streamProps.letterboxColor = letterboxColor;

  // Add all event handlers
  Object.keys(eventHandlers).forEach((key) => {
    const eventKey = key as keyof typeof eventHandlers;
    (streamProps as ExtendedStreamProps)[eventKey] = eventHandlers[eventKey];
  });

  if (responsive) {
    return (
      <div className={cn('relative w-full', className)}>
        <div className="absolute top-0 left-0 w-full h-full">
          <Stream {...streamProps} />
        </div>
      </div>
    );
  }

  return (
    <div className={cn('w-full h-full', className)}>
      <Stream {...streamProps} />
    </div>
  );
}

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface HlsVideoProps {
  src: string;
  className?: string;
  poster?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  filter?: string;
}

export default function HlsVideo({
  src,
  className = '',
  poster = '',
  muted = true,
  autoPlay = true,
  loop = true,
  playsInline = true,
  filter = '',
}: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native support (Safari)
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={filter ? { filter } : {}}
      poster={poster}
      muted={muted}
      autoPlay={autoPlay}
      loop={loop}
      playsInline={playsInline}
    />
  );
}

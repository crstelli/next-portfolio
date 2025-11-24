"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function ClickSound() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/click.wav");
    audioRef.current.volume = 0.5;
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  }, [pathname]);

  return null;
}

export { ClickSound };

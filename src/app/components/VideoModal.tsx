"use client";

import { useEffect } from "react";
import YouTube from "react-youtube";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  videoId: string; // YouTube video ID
}

export default function VideoModal({ isOpen, onClose, videoId }: Props) {
  if (!isOpen) return null;

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-lg overflow-hidden max-w-3xl w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative pb-[56.25%] h-0">
          <YouTube
            videoId={videoId}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: { autoplay: 1 },
            }}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-3xl"
        >
          ×
        </button>
      </div>
    </div>
  );
}

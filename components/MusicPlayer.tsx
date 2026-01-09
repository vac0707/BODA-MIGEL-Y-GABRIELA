
import React, { useState, useRef } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Using a soft classical wedding track since direct YouTube audio extraction is not possible via HTML audio tag.
  // The provided YT link is a piano cover of "A Thousand Years" style.
  const audioUrl = "https://www.bensound.com/bensound-music/bensound-love.mp3"; 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Autoplay blocked or link error", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src={audioUrl} />
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-[#D4AF37] flex items-center justify-center text-[#B8860B] transition-all hover:scale-110 active:scale-95"
        aria-label="Reproducir música"
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        {/* Pulsing effect if playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-40"></span>
        )}
      </button>
    </>
  );
};

export default MusicPlayer;

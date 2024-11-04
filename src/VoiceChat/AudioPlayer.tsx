import React, { useEffect, useRef } from 'react';

interface AudioPlayerProps {
  stream: MediaStream;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ stream }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.srcObject = stream;
    }
  }, [stream]);

  return <audio ref={audioRef} autoPlay />;
};
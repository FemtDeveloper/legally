import { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";
import { PlayIcon } from "../Icons";

interface AudioMessageProps {
  url: string;
}

export const AudioMessage = ({ url }: AudioMessageProps) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [duration, setDuration] = useState("0");

  useEffect(() => {
    if (waveformRef.current) {
      (wavesurferRef.current = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#aa0000",
        progressColor: "#ffffff",
        height: 12,
        barWidth: 4,
        normalize: true,
        url,
      })),
        wavesurferRef.current.on("ready", () => {
          const duration = wavesurferRef.current
            ? wavesurferRef.current.getDuration()
            : 0;
          setDuration(formatDuration(duration));
        });
    }

    return () => wavesurferRef.current?.destroy();
  }, [url]);
  const formatDuration = (duration: number): string => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlayPause = () => {
    wavesurferRef.current?.playPause();
  };

  return (
    <div className="flex items-center justify-between bg-primaryRed py-2 px-4 rounded-full gap-1">
      <button onClick={handlePlayPause}>
        <PlayIcon color="#fff" size={20} />
      </button>
      <div id="waveform" ref={waveformRef} className="grow min-w-16" />
      <p className="text-white">{duration}</p>
    </div>
  );
};

export default AudioMessage;

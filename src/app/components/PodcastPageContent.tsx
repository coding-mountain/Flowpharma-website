import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronRight,
  X,
  Play,
  Pause,
  Share2,
  Volume2,
  VolumeX,
} from "lucide-react";

interface PodcastPageContentProps {
  onClose: () => void;
  autoPlay?: boolean;
}

interface Episode {
  id: number;
  number: string;
  title: string;
  role: string;
  date: string;
  duration: string;
  audioSrc?: string;
}

const episodes: Episode[] = [
  {
    id: 2,
    number: "#002",
    title: "BioFlo Episode 2 President's Vision",
    role: "",
    date: "Thu, June 25 2026",
    duration: "37 min",
    audioSrc:
      "https://ace-bucket-231.s3.us-east-2.amazonaws.com/BioFlo%20Episode%202%20President%27s%20Vision.mp3",
  },
  {
    id: 1,
    number: "#001",
    title: "BioFlo Episode 1 Meet The Founders",
    role: "",
    date: "Tue, June 23 2026",
    duration: "39 min",
    audioSrc:
      "https://ace-bucket-231.s3.us-east-2.amazonaws.com/BiFlo%20Episode%201%20Meet%20The%20Founders.mp3",
  },
];

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0)
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function PodcastPageContent({
  onClose,
  autoPlay,
}: PodcastPageContentProps) {
  const [playingId, setPlayingId] = useState<number | null>(
    autoPlay ? episodes[0].id : null,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState("0:00");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentEpisode = episodes.find((e) => e.id === playingId) ?? null;

  const attachListeners = useCallback((audio: HTMLAudioElement) => {
    const onTimeUpdate = () => {
      if (audio.duration)
        setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(formatTime(audio.currentTime));
    };
    const onLoadedMetadata = () => setTotalTime(formatTime(audio.duration));
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime("0:00");
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  // Load + play when playingId changes
  useEffect(() => {
    if (playingId === null) {
      audioRef.current?.pause();
      return;
    }
    const episode = episodes.find((e) => e.id === playingId);
    if (!episode?.audioSrc) return;

    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current;
    audio.src = episode.audioSrc;
    audio.volume = volume;
    audio.muted = isMuted;
    audio.load();
    setProgress(0);
    setCurrentTime("0:00");
    setTotalTime("0:00");

    const detach = attachListeners(audio);
    audio.play().catch(() => {});
    return detach;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingId]);

  // Sync volume / mute to audio element
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted;
  }, [isMuted]);

  // Pause on unmount
  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const handlePlay = (episode: Episode) => {
    if (!episode.audioSrc) return;
    if (playingId === episode.id) {
      isPlaying
        ? audioRef.current?.pause()
        : audioRef.current?.play().catch(() => {});
    } else {
      setPlayingId(episode.id);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio?.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
    setProgress(pct * 100);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setVolume(pct);
    setIsMuted(pct === 0);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "The BioFlow Podcast: Building Biotech In Real Time",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans w-full pb-32">
      <div className="w-full px-6 py-8 md:px-12 md:py-12">
        {/* Breadcrumbs and Close Button */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-2 text-[13px] text-gray-500">
            <span
              className="cursor-pointer hover:text-gray-900 transition-colors"
              onClick={onClose}
            >
              Home
            </span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-medium">Podcast</span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300 flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-10">
          <p className="text-[14px] text-gray-500 uppercase tracking-widest mb-3 font-medium">
            Podcast
          </p>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.15] tracking-tight mb-4">
            The BioFlow Podcast: Building Biotech In Real Time
          </h1>
          <p className="text-[15px] sm:text-[17px] text-gray-600 font-light leading-relaxed max-w-3xl mb-6">
            Follow Flo Pharma's journey to bring safe stable solutions to those
            who need them
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const first = episodes.find((e) => e.audioSrc);
                if (first) handlePlay(first);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Play className="w-4 h-4" />
              Play
            </button>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Episodes Section */}
        <div>
          <h2 className="text-4xl md:text-5xl  font-medium text-gray-900 mb-6 tracking-tight">
            Podcast Episodes ({String(episodes.length).padStart(3, "0")})
          </h2>

          <div className="divide-y divide-gray-100">
            {episodes.map((episode) => {
              const hasAudio = !!episode.audioSrc;
              const isThisPlaying = playingId === episode.id && isPlaying;
              return (
                <div
                  key={episode.id}
                  className="py-6 flex items-start justify-between group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] text-gray-400 mb-1.5">
                      {episode.date}
                    </p>
                    <h3 className="text-[28px] font-medium text-gray-900 mb-1 leading-snug">
                      {episode.number} {episode.title}
                    </h3>
                    <p className="text-[16px] text-gray-500 mb-4">
                      {episode.role}
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handlePlay(episode)}
                        disabled={!hasAudio}
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors flex-shrink-0 ${
                          hasAudio
                            ? "border-blue-500 text-blue-500 hover:bg-blue-50 cursor-pointer"
                            : "border-gray-300 text-gray-300 cursor-not-allowed"
                        }`}
                        aria-label={isThisPlaying ? "Pause" : "Play episode"}
                      >
                        {isThisPlaying ? (
                          <Pause className="w-3.5 h-3.5" />
                        ) : (
                          <Play className="w-3.5 h-3.5 ml-0.5" />
                        )}
                      </button>
                      <span className="text-[16px] text-[#1C6A92] ">
                        {episode.duration}
                      </span>
                      {!hasAudio && (
                        <span className="text-[14px] text-gray-300 uppercase tracking-wide">
                          Coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Player */}
      {playingId !== null && currentEpisode && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#111827] text-white z-50 shadow-2xl">
          {/* Mobile: compact single-column layout */}
          <div className="flex flex-col md:hidden px-4 py-3 gap-2">
            {/* Top row: episode info + play button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  isPlaying
                    ? audioRef.current?.pause()
                    : audioRef.current?.play().catch(() => {});
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-500 hover:border-white transition-colors flex-shrink-0"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-semibold truncate leading-tight">
                  {currentEpisode.number} {currentEpisode.title}
                </p>
                <p className="text-[11px] text-gray-400 truncate">
                  {currentEpisode.role}
                </p>
              </div>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
            </div>
            {/* Bottom row: progress bar + time */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 tabular-nums whitespace-nowrap">
                {currentTime}
              </span>
              <div
                className="flex-1 h-1 bg-gray-600 rounded-full cursor-pointer relative"
                onClick={handleProgressClick}
              >
                <div
                  className="absolute left-0 top-0 h-full bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400 tabular-nums whitespace-nowrap">
                {totalTime}
              </span>
            </div>
          </div>

          {/* Desktop: original two-column layout */}
          <div className="hidden md:grid grid-cols-[25%_75%] items-center gap-5 px-10 py-3.5">
            {/* Episode Info */}
            <div className="min-w-0">
              <p className="text-[28px] font-semibold truncate leading-tight">
                {currentEpisode.number} {currentEpisode.title}
              </p>
              <p className="text-[16px] text-gray-400 truncate mt-0.5">
                {currentEpisode.role}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-5 bg-[#F1F3F4] text-gray-900 rounded-full px-3 py-1">
              {/* Play / Pause */}
              <button
                onClick={() => {
                  isPlaying
                    ? audioRef.current?.pause()
                    : audioRef.current?.play().catch(() => {});
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-600 transition-colors flex-shrink-0"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>

              {/* Time */}
              <span className="text-[12px] text-gray-500 flex-shrink-0 tabular-nums whitespace-nowrap">
                {currentTime} / {totalTime}
              </span>

              {/* Progress Bar */}
              <div
                className="flex-1 h-1 bg-gray-200 rounded-full cursor-pointer relative"
                onClick={handleProgressClick}
              >
                <div
                  className="absolute left-0 top-0 h-full bg-gray-900 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Volume */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-900 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Volume Bar */}
              <div
                className="w-16 h-1 bg-gray-200 rounded-full cursor-pointer relative flex-shrink-0"
                onClick={handleVolumeClick}
              >
                <div
                  className="absolute left-0 top-0 h-full bg-gray-900 rounded-full"
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { Play } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface FloatingPodcastButtonProps {
  isPodcastOpen: boolean;
  onOpen: () => void;
}

export function FloatingPodcastButton({
  isPodcastOpen,
  onOpen,
}: FloatingPodcastButtonProps) {
  return (
    <AnimatePresence>
      {!isPodcastOpen && (
        <motion.button
          key="floating-play"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={onOpen}
          className="fixed bottom-[4%] right-[4%] z-50 flex items-center gap-3 group active:scale-95 transition-transform"
          aria-label="Open podcast"
        >
          <span className="text-[22px] font-normal capitalize align-middle text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.25)] opacity-0 translate-x-4 group-hover:opacity-90 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            Our Podcast
          </span>
          <span className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-1 border-[#0A253A] group-hover:bg-[#0A253A] shadow-lg transition-colors flex-shrink-0">
            <Play className="w-6 h-6 text-[#0A253A] group-hover:text-white transition-colors ml-0.5" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

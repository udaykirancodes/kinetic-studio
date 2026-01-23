import { FrameFormValues } from "@/components/studio/frame-schema";
import { create } from "zustand";
import { BLAST_AUDIO, BLAST_FRAMES } from "./constants";
import { FrameData } from "./types";

type VideoStore = {
  frames: FrameData[];
  info: {
    audio: string;
    height: number;
    width: number;
  };
  updateFrames: (newData: FrameData[]) => void;
  updateInfo: (newInfo: VideoStore["info"]) => void;
  toggleSelect: (index: number) => void;
  updateText: (index: number, newText: string) => void;
  updateSelectedFrame: (newFrame: FrameFormValues) => void;
};

export const useVideoStore = create<VideoStore>((set) => ({
  frames: BLAST_FRAMES,
  info: {
    audio: BLAST_AUDIO,
    height: 1080,
    width: 1920,
  },
  updateFrames: (newFrames: FrameData[]) => set({ frames: newFrames }),
  updateSelectedFrame: (newFrame: FrameFormValues) =>
    set((state) => {
      const newFrames = state.frames.map((frame) => {
        if (frame.selected) {
          return {
            wordCount: frame.text.trim().split(" ").length,
            backgroundColor: newFrame.backgroundColor,
            textColor: newFrame.textColor,
            selected: true,
            text: newFrame.text,
            time: newFrame.time,
          };
        } else {
          return { ...frame, selected: false };
        }
      });
      return { frames: newFrames };
    }),
  updateInfo: (newInfo: VideoStore["info"]) => set({ info: newInfo }),
  toggleSelect: (index: number) =>
    set((state) => {
      const newData = state.frames.map((item, i) => {
        if (i === index) {
          // Toggle the current item's selected state and ensure it's the only one selected
          return { ...item, selected: !item.selected };
        } else {
          // Make sure all other items are not selected
          return { ...item, selected: false };
        }
      });
      return { frames: newData };
    }),
  updateText: (index: number, newText: string) =>
    set((state) => {
      const newData = state.frames.map((item, i) => {
        if (i === index) {
          const text = newText?.trim() || "";
          return {
            ...item,
            text: text,
            wordCount: text.length,
          };
        }
        return item;
      });
      return { ...state, frames: newData };
    }),
}));

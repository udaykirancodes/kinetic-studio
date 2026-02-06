import { FrameFormValues } from "@/components/studio/frame-schema";
import { create } from "zustand";
import {
  BLAST_AUDIO,
  BLAST_FRAMES,
  BRAND_AUDIO,
  BRAND_FRAMES,
} from "./constants";
import { FrameData } from "./types";

type VideoStore = {
  frames: FrameData[];
  info: {
    audio: string;
    height: number;
    width: number;
    fps: number;
  };
  updateFrames: (newData: FrameData[]) => void;
  addFrameAtEnd: () => void;
  updateInfo: (newInfo: VideoStore["info"]) => void;
  toggleSelect: (index: number) => void;
  deleteFrame: (index: number) => void;
  updateText: (index: number, newText: string) => void;
  updateSelectedFrame: (newFrame: FrameFormValues) => void;
};

export const useVideoStore = create<VideoStore>((set) => ({
  frames: BRAND_FRAMES,
  info: {
    audio: BRAND_AUDIO,
    height: 720,
    width: 520,
    fps: 30,
  },
  updateFrames: (newFrames: FrameData[]) => set({ frames: newFrames }),
  addFrameAtEnd: () =>
    set((state) => {
      const newFrames = [
        ...state.frames,
        {
          text: "",
          wordCount: 0,
          time: 0.3,
          selected: false,
          backgroundColor: "black",
          textColor: "white",
        },
      ];
      return { frames: newFrames };
    }),
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
      return { ...state, frames: newFrames };
    }),
  updateText: (index: number, newText: string) =>
    set((state) => {
      const newFrames = state.frames.map((item, i) => {
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
      return { ...state, frames: newFrames };
    }),
  updateInfo: (newInfo: VideoStore["info"]) => set({ info: newInfo }),
  toggleSelect: (index: number) =>
    set((state) => {
      const newData = state.frames.map((item, i) => {
        if (i === index) {
          // check if already selected, do not toggle
          if (item.selected) {
            return { ...item, selected: true };
          }
          // Toggle the current item's selected state and ensure it's the only one selected
          return { ...item, selected: !item.selected };
        } else {
          // Make sure all other items are not selected
          return { ...item, selected: false };
        }
      });
      return { frames: newData };
    }),
  deleteFrame: (index: number) =>
    set((state) => {
      const newFrames = state.frames.filter((_, i) => i !== index);
      return { frames: newFrames };
    }),
}));

export type AppStore = {
  templates: {
    frames: FrameData[];
    name: string;
    info: {
      audio: string;
      height: number;
      width: number;
      fps: number;
    };
  }[];
};

export const useAppStore = create<AppStore>(() => ({
  templates: [
    {
      frames: BLAST_FRAMES,
      name: "Blast",
      info: {
        audio: BLAST_AUDIO,
        height: 720,
        width: 520,
        fps: 30,
      },
    },
    {
      frames: BLAST_FRAMES,
      name: "Brand",
      info: {
        audio: BRAND_AUDIO,
        height: 720,
        width: 520,
        fps: 30,
      },
    },
  ],
}));

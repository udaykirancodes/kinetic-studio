import type { FrameAnimationType, FrameData } from "./types";

const splitWords = (text: string) => text.trim().split(/\s+/).filter(Boolean);

export const inferFrameTypeFromText = (text: string): FrameAnimationType => {
  const words = splitWords(text);
  return words.length <= 1 ? "reveal-word" : "reveal-word-by-word";
};

export const normalizeFrame = (frame: FrameData): FrameData => {
  return {
    ...frame,
    type: frame.type ?? inferFrameTypeFromText(frame.text),
  };
};

export const normalizeFrames = (frames: FrameData[]): FrameData[] =>
  frames.map(normalizeFrame);

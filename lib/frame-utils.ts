import type { FrameAnimationType, FrameData } from "./types";

const getWordCount = (text: string) =>
  text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

export const inferFrameTypeFromText = (text: string): FrameAnimationType =>
  getWordCount(text) > 1 ? "text-multiple" : "text-one";

export const normalizeFrame = (frame: FrameData): FrameData => {
  const raw = frame.type ?? inferFrameTypeFromText(frame.text ?? "");
  const type: FrameAnimationType =
    raw === "text-multiple" ? "text-multiple" : "text-one";
  return {
    ...frame,
    type,
  };
};

export const normalizeFrames = (frames: FrameData[]): FrameData[] =>
  frames.map(normalizeFrame);

import type { FrameAnimationType, FrameData } from "./types";

export const inferFrameTypeFromText = (): FrameAnimationType => "text-one";

export const normalizeFrame = (frame: FrameData): FrameData => {
  const raw = frame.type ?? inferFrameTypeFromText();
  const type: FrameAnimationType =
    raw === "text-multiple" ? "text-multiple" : "text-one";
  return {
    ...frame,
    type,
  };
};

export const normalizeFrames = (frames: FrameData[]): FrameData[] =>
  frames.map(normalizeFrame);

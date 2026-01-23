"use client";

import { useVideoStore } from "@/lib/store";

export const FrameSettings = () => {
  const { frames } = useVideoStore();
  const selectedFrame = frames.find((frame) => frame.selected);
  return <div>{JSON.stringify(selectedFrame)}</div>;
};

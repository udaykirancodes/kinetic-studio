"use client";

import { useVideoStore } from "@/lib/store";

export const VideoSettings = () => {
  const { info } = useVideoStore();
  return <pre>{JSON.stringify(info, null, 2)}</pre>;
};

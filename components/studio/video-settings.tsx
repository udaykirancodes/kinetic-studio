"use client";

import { useVideoStore } from "@/lib/store";

export const VideoSettings = () => {
  const { info } = useVideoStore();
  return <div>{JSON.stringify(info)}</div>;
};

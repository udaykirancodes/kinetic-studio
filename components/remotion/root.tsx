"use client";

import "@/app/globals.css";
import { useVideoStore } from "@/lib/store";
import { Composition } from "remotion";
import { AppComposition } from "./composition";

export const RemotionRoot: React.FC = () => {
  const height = useVideoStore((state) => state.info.height);
  const width = useVideoStore((state) => state.info.width);
  const fps = useVideoStore((state) => state.info.fps);
  const totalDuration = Math.ceil(useVideoStore((state) => state.frames.reduce((acc, frame) => acc + frame.time, 0)));
  return (
    <>
      <Composition
        component={AppComposition}
        durationInFrames={totalDuration * fps}
        width={width}
        height={height}
        fps={fps}
        id="video-render"
        defaultProps={{
          fps: fps,
          durationInFrames: totalDuration * fps,
        }}
      />
    </>
  );
};

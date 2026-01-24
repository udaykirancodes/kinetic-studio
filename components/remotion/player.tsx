"use client";

import { useVideoStore } from "@/lib/store";
import { Player } from "@remotion/player";
import { AppComposition } from "./composition";
export const AppPlayer = () => {
  const { height, width, fps } = useVideoStore((state) => state.info);
  const frames = useVideoStore((state) => state.frames);
  const totalFrames =
    Math.ceil(frames.reduce((acc, frame) => acc + frame.time, 0)) || fps;
  return (
    <div className="flex h-full w-full items-start justify-center p-4">
      <div className="relative h-full w-full">
        <Player
          className="rounded-lg border border-slate-300"
          component={AppComposition}
          durationInFrames={fps * totalFrames}
          fps={fps}
          compositionWidth={width}
          compositionHeight={height}
          controls
          // autoPlay
          clickToPlay
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

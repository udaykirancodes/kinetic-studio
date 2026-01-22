"use client";

import { Player } from "@remotion/player";
import { AppComposition } from "./composition";
export const AppPlayer = () => {
  return (
    <div className="flex h-full w-full items-start justify-center p-4">
      <div className="relative h-full w-full">
        <Player
          className="rounded-lg border border-slate-300 bg-white"
          component={AppComposition}
          durationInFrames={60 * 10}
          fps={30}
          compositionWidth={720}
          compositionHeight={720}
          controls
          autoPlay
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

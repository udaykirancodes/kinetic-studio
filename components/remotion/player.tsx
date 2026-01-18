"use client";

import { Player } from "@remotion/player";
import { AppComposition } from "./composition";
export const AppPlayer = () => {
  return (
    <div className="flex h-full items-start p-4 justify-center w-full bg-red-300">
      <div className="relative h-125 w-125">
        <Player
          className="border-slate-300 bg-white rounded-lg border"
          component={AppComposition}
          durationInFrames={60 * 10}
          fps={30}
          compositionWidth={720}
          compositionHeight={720}
          controls
          autoPlay
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

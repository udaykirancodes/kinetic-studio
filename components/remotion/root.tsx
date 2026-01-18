"use client";

import { Composition } from "remotion";
import { AppComposition } from "./composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        component={AppComposition}
        durationInFrames={120}
        width={1920}
        height={1080}
        fps={30}
        id="video-render"
        defaultProps={{
          fps: 30,
          durationInFrames: 120,
        }}
      />
    </>
  );
};

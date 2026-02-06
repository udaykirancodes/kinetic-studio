"use client";

import { inferFrameTypeFromText } from "@/lib/frame-utils";
import { useVideoStore } from "@/lib/store";
import {
  AbsoluteFill,
  Html5Audio,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { FrameText } from "./render";

export const AppComposition = () => {
  const frames = useVideoStore((state) => state.frames);
  const audio = useVideoStore((state) => state.info.audio);

  const { fps } = useVideoConfig();

  const frameLengthInSeconds = frames.map((frame) => frame.time);

  const frameDurations = frameLengthInSeconds.map((seconds) =>
    Math.floor(seconds * fps)
  );
  const startFrames = frameDurations.reduce<number[]>((acc, current, index) => {
    const lastFrame =
      index > 0 ? (acc[index - 1] || 0) + (frameDurations[index - 1] || 0) : 0;

    acc.push(lastFrame);
    return acc;
  }, []);

  return (
    <AbsoluteFill>
      {frames.map((item, index) => {
        return (
          <Sequence
            key={index}
            from={startFrames[index] || 0}
            durationInFrames={frameDurations[index]}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                backgroundColor: item.backgroundColor || "white",
                color: item.textColor || "black",
              }}
            >
              <FrameText
                text={item.text}
                type={item.type ?? inferFrameTypeFromText(item.text)}
                durationInFrames={frameDurations[index] || 0}
                fontSize={item.fontSize}
              />
            </div>
          </Sequence>
        );
      })}
      <Html5Audio pauseWhenBuffering src={staticFile(audio)} />
    </AbsoluteFill>
  );
};

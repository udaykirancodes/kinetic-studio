"use client";

import { useVideoStore } from "@/lib/store";
import {
  AbsoluteFill,
  Html5Audio,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { TextMultiple } from "./render/text-multiple";
import TextOne from "./render/text-one";

export const AppComposition = () => {
  const frames = useVideoStore((state) => state.frames);

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
              {item.wordCount === 1 ? (
                <TextOne textcolor={item.textColor}>{item.text}</TextOne>
              ) : (
                <TextMultiple
                  textcolor={item.textColor}
                  words={item.text.split(" ")}
                  durationInFrames={frameDurations[index] || 0}
                />
              )}
            </div>
          </Sequence>
        );
      })}
      <Html5Audio pauseWhenBuffering src={staticFile("blast.mp3")} />
    </AbsoluteFill>
  );
};

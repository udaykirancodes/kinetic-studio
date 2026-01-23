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

const colorPalettes = [
  ["#ffffff", "#ffffff", "#000000", "#000000"],
  ["E6FF94", "9DDE8B", "40A578", "006769"],
  ["F9F7F7", "DBE2EF", "3F72AF", "112D4E"],
  ["F67280", "C06C84", "6C5B7B", "355C7D"],
  ["F4EEFF", "DCD6F7", "A6B1E1", "424874"],
];
export const time = () => {
  return [
    0.53, 0.25, 0.25, 0.24, 0.27, 0.51, 0.75, 0.25, 0.24, 0.77, 0.25, 0.25,
    0.74, 0.77, 0.25, 0.25, 0.25, 0.76, 0.59, 0.22, 0.2, 0.24, 0.25, 0.24, 0.27,
    0.97, 0.29, 0.25, 0.51, 0.24, 0.27, 0.75, 0.25, 0.5, 0.5, 1.01, 0.24, 0.52,
    0.45, 0.2, 0.35, 0.25, 0.24, 0.26, 0.51, 0.25, 0.21, 0.29, 0.76, 0.24, 0.73,
    0.78, 0.53, 0.25, 0.46, 0.29, 0.25, 0.24, 0.24, 1.33, 0.28, 0.25, 0.25,
    0.49,
  ];
};

export const AppComposition = () => {
  const data = useVideoStore((state) => state.frames);

  const colorPalette = colorPalettes[Number(1) - 1];
  const { fps } = useVideoConfig();

  const frameLengthInSeconds = time();

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
      {data.map((text, index) => {
        const { bgColor, textColor } = {
          bgColor: "white",
          textColor: "black",
        };
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
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              {text.num === 1 ? (
                <TextOne textcolor={textColor}>{text.text}</TextOne>
              ) : (
                <TextMultiple
                  textcolor={textColor}
                  words={text.text.split(" ")}
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

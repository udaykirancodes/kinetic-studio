import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const TextMultiple = ({
  words,
  durationInFrames,
  style,
}: {
  words: string[];
  durationInFrames: number;
  style?: React.CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const numWords = words.length;
  const timePerWord = durationInFrames / numWords; // duration allocated to each word

  const wordElements = words.map((word, index) => {
    const startFrame = index * timePerWord;
    const opacity = interpolate(frame, [startFrame, startFrame + 5], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    return (
      <div
        key={index}
        style={{
          opacity,
          display: "inline-block",
          margin: "0 8px", // adds spacing between words
          transform: `translateY(${(1 - opacity) * -10}px)`, // subtle rise effect as words fade in
        }}
      >
        {word}
      </div>
    );
  });

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
        <div
          className={`p-6 text-center text-6xl font-semibold drop-shadow-xl`}
          style={style}
        >
          {wordElements}
        </div>
      </div>
    </div>
  );
};

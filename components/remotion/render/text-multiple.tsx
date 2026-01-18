import { interpolate, useCurrentFrame } from "remotion";

export const TextMultiple = ({
  words,
  durationInFrames,
  textcolor,
}: {
  words: string[];
  durationInFrames: number;
  textcolor: string;
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
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <div
          className={`text-6xl p-6 text-center font-semibold drop-shadow-xl `}
        >
          {wordElements}
        </div>
      </div>
    </div>
  );
};

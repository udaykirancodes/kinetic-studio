import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const TextOpacity = ({ children }: { children: React.ReactElement }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [fps / 2, fps], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div
          className={`text-6xl p-6 text-center font-semibold drop-shadow-xl text-white`}
          style={{ opacity: opacity }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default TextOpacity;

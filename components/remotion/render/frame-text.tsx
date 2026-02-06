import type { FrameAnimationType } from "@/lib/types";
import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { TextMultiple } from "./text-multiple";
import { TextOne } from "./text-one";

export const FrameText = ({
  text,
  type,
  durationInFrames,
  fontSize,
}: {
  text: string;
  type: FrameAnimationType;
  durationInFrames: number;
  fontSize?: number;
}) => {
  const safeText = text ?? "";
  const words = safeText.trim().length ? safeText.trim().split(/\s+/) : [];

  const style: React.CSSProperties | undefined = fontSize
    ? { fontSize: `${fontSize}px`, lineHeight: 1.05 }
    : undefined;

  if (type === "reveal-word-by-word") {
    return (
      <TextMultiple
        words={words.length ? words : [""]}
        durationInFrames={durationInFrames}
        style={style}
      />
    );
  }

  if (type === "fade-in") {
    return <FadeInText text={safeText} style={style || {}} />;
  }

  if (type === "reveal-word") {
    return <RevealClipText text={safeText} style={style} />;
  }

  return <TextOne style={style}>{safeText}</TextOne>;
};

const FadeInText = ({
  style,
  text,
}: {
  text: string;
  style?: React.CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(frame, [0, 10], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <TextOne
      style={{
        ...style,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {text}
    </TextOne>
  );
};

const RevealClipText = ({
  text,
  style,
}: {
  text: string;
  style?: React.CSSProperties;
}) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rightInset = (1 - progress) * 100;

  return (
    <TextOne
      style={{
        ...style,
        clipPath: `inset(0 ${rightInset}% 0 0)`,
        opacity: interpolate(frame, [0, 4], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      {text}
    </TextOne>
  );
};

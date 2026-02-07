import type { FrameAnimationType } from "@/lib/types";
import React from "react";
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

  if (type === "text-one") {
    return <TextOne style={style}>{safeText}</TextOne>;
  }

  if (type === "text-multiple") {
    return (
      <TextMultiple
        words={words.length ? words : [""]}
        durationInFrames={durationInFrames}
        style={style}
      />
    );
  }

  return <TextOne style={style}>{safeText}</TextOne>;
};

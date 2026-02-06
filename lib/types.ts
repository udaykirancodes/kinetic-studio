export type FrameData = {
  text: string;
  time: number;
  selected: boolean;
  backgroundColor: string;
  textColor: string;
  /**
   * Controls how this frame's text is revealed/animated.
   * If omitted (older data), the app will infer a reasonable default.
   */
  type?: FrameAnimationType;
  /**
   * Optional per-frame font size override (px).
   * If omitted, a default size is used.
   */
  fontSize?: number;
  /**
   * @deprecated No longer used for animation decisions.
   * Kept optional for backward compatibility with existing templates/data.
   */
  wordCount?: number;
};

export type FrameAnimationType =
  | "fade-in"
  | "reveal-word"
  | "reveal-word-by-word";

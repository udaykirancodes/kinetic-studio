import { z } from "zod";

const emptyStringToUndefinedNumber = z.preprocess((val) => {
  if (val === "" || val === null || val === undefined) return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? n : undefined;
}, z.number().optional());

export const frameSchema = z.object({
  text: z.string().min(1, "Text is required"),
  time: z.coerce.number().min(0.1, "Time must be greater than 0"),
  backgroundColor: z.string().min(1),
  textColor: z.string().min(1),
  type: z.enum(["text-one", "text-multiple"]),
  fontSize: emptyStringToUndefinedNumber
    .refine((v) => v === undefined || v >= 12, {
      message: "Font size must be at least 12",
    })
    .refine((v) => v === undefined || v <= 200, {
      message: "Font size must be at most 200",
    }),
});

export type FrameFormValues = z.infer<typeof frameSchema>;

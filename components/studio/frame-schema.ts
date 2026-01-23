import { z } from "zod";

export const frameSchema = z.object({
  text: z.string().min(1, "Text is required"),
  time: z.coerce.number().min(0.1, "Time must be greater than 0"),
  backgroundColor: z.string().min(1),
  textColor: z.string().min(1),
});

export type FrameFormValues = z.infer<typeof frameSchema>;

import { z } from "zod";

export const participantDTOValidator = z.object({
  id: z.number(),
  startNumber: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  club: z.string(),
    createdAt: z.string(),
});

export type FetchError<T> = {
  message: string;
  data: T;
};

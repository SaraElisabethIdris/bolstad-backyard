import { z } from "zod";

export const participantDTOValidator = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.number(),
});

export type FetchError<T> = {
  message: string;
  data: T;
};

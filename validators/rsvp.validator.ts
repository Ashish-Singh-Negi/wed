import { z } from "zod";

export const createRsvpSchema = z.object({
  name: z.string().trim(),
  contact: z.string().transform((val) => Number(val)),
  email: z.email(),
  attending: z.enum(["Yes", "No", "Maybe"]),
});

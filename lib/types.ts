import * as z from "zod";

export type SelmType = {
  id: string;
  email: string;
};

export const createSelmSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

export type CreateSelmType = z.infer<typeof createSelmSchema>;

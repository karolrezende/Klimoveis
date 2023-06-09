import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  admin: z.boolean(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});
export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const userSchemaResponse = userSchema.omit({ password: true });

export const userSchemaResponseArr = z.array(userSchemaResponse)

export const userSchemaRequestPatch = userSchemaRequest.omit({admin: true}).partial()
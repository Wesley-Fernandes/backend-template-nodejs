import z from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(25),
  username: z.string().min(2).max(25),
  birth: z.string().datetime(),
});

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(25),
});

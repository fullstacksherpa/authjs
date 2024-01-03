import * as z from "zod";

//don't put min value for password in the loginSchema. it is recommended to put in register only.

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

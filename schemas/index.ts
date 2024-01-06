import * as z from "zod";

//don't put min value for password in the loginSchema. it is recommended to put in register only.
export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
}); 

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});


export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});


export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minumumj 6 characters required",
  }),
  name: z.string().min(1, {
    message: "name is required",
  }),
});
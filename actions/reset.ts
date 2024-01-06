"use server";

import { ResetSchema } from "@/schemas";
import * as z from "zod";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResentEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);
  //adding server side validation incase user bypass the client side validation
  if (!validatedFields.success) {
    return { error: "invalid email" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "email not found!" };
  }
  //TODO: generate token and send email
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResentEmail(passwordResetToken.email, passwordResetToken.token)

  return { success: "reset email sent!" };
};

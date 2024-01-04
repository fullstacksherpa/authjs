import credentials from "next-auth/providers/credentials"
import { LoginSchema } from "./schemas"

import type { NextAuthConfig } from "next-auth"

export default {
  providers: [],
} satisfies NextAuthConfig
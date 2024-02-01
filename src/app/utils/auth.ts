import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  // using Github provider: https://next-auth.js.org/providers/github
  providers: [
    GitHubProvider({
      //"as string" to define variable type.
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
} satisfies NextAuthOptions;

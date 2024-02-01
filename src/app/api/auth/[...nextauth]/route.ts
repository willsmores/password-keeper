import { authOptions } from "@/app/utils/auth";
// import NextAuth from "next-auth";
import NextAuth from "next-auth/next";

//added next-auth dependency
//initialize NextAuth.js with a Route Handler: https://next-auth.js.org/configuration/initialization#route-handlers-app
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

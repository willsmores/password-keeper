import { authOptions } from "@/app/utils/auth";
import NextAuth from "next-auth";

//added next-auth dependency
//initialize NextAuth.js with a Route Handler: https://next-auth.js.org/configuration/initialization#route-handlers-app
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import { authconfig } from "@/src/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authconfig);

export { handler as GET, handler as Post};
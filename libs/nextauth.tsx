import { loginAuth } from "@/apis";
import type { NextAuthOptions } from "next-auth";
//? note:  credentialsProvider is out auth 
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from 'process'

export const authOptions: NextAuthOptions = {
  // note: this secret key 
  secret: env.NEXT_PUBLIC_JWT_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: {
          label: "username",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user_and_pass = { email: credentials?.username, password: credentials?.password }
          const { data } = await loginAuth(user_and_pass)
          const user = { id: data.id, name: data.name, email: data.email, image: "" };
          return user;
        }
        catch (err: any) {
          return null
        }
      },
    }),
  ],
  pages: {
    // after login success go to home page
    signIn: "/",
    signOut: "/logout",
  },
};

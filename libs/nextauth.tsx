import type { NextAuthOptions } from "next-auth";
//? note:  credentialsProvider is out auth 
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials,req) {
        console.log(credentials, "======== and ======", req);
        const user = { id: "1", name: "Admin", email: "mock_1@gmail.com" };
        return user;
      },
    }),
  ],
};

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic to verify user credentials with a database or API
        const { email, password } = credentials!;
        if (email === "test@example.com" && password === "password123") {
          return { id: "1", name: "Test User", email: "test@example.com" };
        }
        return null; // Return null if login fails
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error", // Custom error page (optional)
  },
  session: {
    strategy: "jwt" as const,
  },
  secret: process.env.NEXTAUTH_SECRET!,
};

export default NextAuth(authOptions);

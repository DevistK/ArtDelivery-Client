import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    Google({
      clientId: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}`,
    }),
  ],
});

export { handler as GET, handler as POST };

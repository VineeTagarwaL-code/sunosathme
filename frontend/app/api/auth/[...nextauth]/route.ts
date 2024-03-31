import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    SpotifyProvider({
      clientId: "895722a0eca541bb8ac10e4a79d114ce",
      clientSecret: "d79659bf7e0f4acbacca769e53621490",
      authorization: { params: { scope: "user-read-currently-playing" } },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      session.user.accessToken = token.accessToken;

      return session;
    },
  },
});

export { handler as GET, handler as POST };

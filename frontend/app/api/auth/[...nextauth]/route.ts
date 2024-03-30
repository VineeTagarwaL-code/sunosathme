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
    })
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      console.log(account)
      return token;
    },
    session: async ({ session, token }) => {
      console.log(session, token)
      return session;
    }
  }
})

export { handler as GET, handler as POST }

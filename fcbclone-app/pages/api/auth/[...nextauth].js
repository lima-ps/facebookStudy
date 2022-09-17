import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOL_CLIENTE_ID,
      clientSecret: process.env.FACEBOOL_CLIENTE_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
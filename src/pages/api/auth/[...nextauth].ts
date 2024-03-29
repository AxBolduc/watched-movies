import NextAuth from "next-auth";
import TraktProvider from "next-auth/providers/trakt";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        TraktProvider({
            clientId: process.env.TRAKT_CLIENT_ID!,
            clientSecret: process.env.TRAKT_CLIENT_SECRET!,
        }),
    ],
    callbacks: {
        jwt({ token, user, account, profile, isNewUser }){
            return {access_token: account?.access_token, ...token};
        }
    }
});

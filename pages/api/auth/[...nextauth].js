import NextAuth from 'next-auth';
import TwitterProviders from 'next-auth/providers/twitter';

export default NextAuth({
  providers: [
    TwitterProviders({
      clientId: process.env.TWITTER_CONSUMER_ID,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET
    })
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) { 
      if (account) {
        token[account.provider] = {
          id: account.providerAccountId,
          oauth_token: account.oauth_token,
          oauth_token_secret: account.oauth_token_secret,
        }
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET
})
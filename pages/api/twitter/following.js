import { getToken } from 'next-auth/jwt';
import { TwitterApi } from 'twitter-api-v2';

export default async (req, res) => {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET
    });
    
    const options = {
      appKey: process.env.TWITTER_CONSUMER_ID,
      appSecret: process.env.TWITTER_CONSUMER_SECRET,
      accessToken: token.twitter.oauth_token,
      accessSecret: token.twitter.oauth_token_secret,
    }

    const TClient = new TwitterApi(options);
    const { relationship } = await TClient.v1.friendship({ source_id: token.twitter.id, target_screen_name: 'NASA' })

    res.status(200).json({
      status: 'Ok',
      following: relationship.source.following,
    });
  } catch(error) {
    res.status(400).json(error);
  }
}
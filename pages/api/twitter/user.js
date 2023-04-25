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
    const { name, screen_name, location, description,  created_at, profile_banner_url, profile_image_url_https,
      followers_count, friends_count, favourites_count, statuses_count }  = await TClient.v1.verifyCredentials();

    res.status(200).json({
      status: 'Ok',
      user:{
        name, screen_name, location, description,  created_at, profile_banner_url, profile_image_url_https,
        followers_count, friends_count, favourites_count, statuses_count
      },
    });
  } catch(error) {
    res.status(400).json(error);
  }
}
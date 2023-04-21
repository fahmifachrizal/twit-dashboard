import { getToken } from 'next-auth/jwt';
import { TwitterApi } from 'twitter-api-v2';

export default async (req, res) => {
  try {
    const userTarget = req.body
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
    const { id } = await TClient.v1.createFriendship({ screen_name: userTarget });
    if ( userTarget == 'NASA' && id ){
      res.status(200).json({
        status: 'Ok',
        following: true,
      });
    }
    else{
      res.status(200).json({
        status: 'Ok',
      });
    }
  } catch(error) {
    res.status(400).json(error);
  }
}
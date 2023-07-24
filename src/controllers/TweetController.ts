import users from "../data/users";
import Tweet from "../models/Tweet";
import User from "../models/User";

class TweetController {
  public register(user: User, tweet: Tweet) {
    const getUser = users.find(
      (item) => item.getDetails().id === user.getDetails().id
    );
    if (getUser) {
      const newTweet = new Tweet(
        tweet.getDetails().content,
        tweet.getDetails().type
      );
      getUser.addTweet(newTweet);
      return newTweet;
    }
    return null;
  }
}

export default new TweetController();

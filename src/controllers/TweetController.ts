import Tweet from "../models/Tweet";
import User from "../models/User";
import users from "../data/users";
import tweets from "../data/tweets";
import LikeController from "./LikeController";

class TweetController {
  public register(user: User, tweet: Tweet) {
    const getIdUser = users.find(
      (item) => item.getDetails().id === user.getDetails().id
    );

    if (getIdUser) {
      user.sendTweet(tweet);
      return tweet;
    }
    return null;
  }

  public show(user: User, tweet: Tweet) {
    const getUsername = users.find(
      (item) => item.getDetails().username === user.getDetails().username
    );

    if (getUsername) {
      const authorUsername = getUsername.getDetails().username;
      const content = tweet.getDetails().content;
      const likes = LikeController.show(tweet);

      const showTweet = `@${authorUsername}: ${content}
      ${likes}`;
      console.log(showTweet);
    }
  }

  public list(user: User) {
    const userTweets = tweets.filter(
      (tweet) => tweet.getAuthorId() === user.getDetails().id
    );

    userTweets.forEach((tweet) => {
      this.show(user, tweet);
    });
  }
}

export default new TweetController();

import Tweet from "../models/Tweet";
import User from "../models/User";
import users from "../data/users";
import tweets from "../data/tweets";

class TweetController {
  public register(user: User, tweet: Tweet) {
    const getIdUser = users.find(
      (item) => item.getDetails().id === user.getDetails().id
    );

    if (getIdUser) {
      const newTweet = new Tweet(
        tweet.getDetails().content,
        tweet.getDetails().type
      );
      getIdUser.sendTweet(newTweet);
      return newTweet;
    }
    return null;
  }

  public show(user: User, tweet: Tweet) {
    const getUsername = users.find(
      (item) => item.getDetails().username === user.getDetails().username
    );

    if (getUsername) {
      const showTweet = `@${getUsername.getDetails().username}: ${
        tweet.getDetails().content
      }
      <likes>
      <replies>`;
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

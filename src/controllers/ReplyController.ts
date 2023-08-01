import users from "../data/users";
import Tweet from "../models/Tweet";
import User from "../models/User";
import TweetController from "./TweetController";
import Reply from "../models/Reply";

class ReplyController {
  public replyToTweet(user: User, originalTweet: Tweet, content: string) {
    const getUsername = users.find(
      (item) => item.getDetails().username === user.getDetails().username
    );

    if (getUsername) {
      const replyTweet = new Tweet(content, "reply");
      replyTweet.setAuthorId(getUsername.getDetails().id);

      const reply = new Reply(content, user, originalTweet.getId());
      originalTweet.reply(reply);

      TweetController.register(user, replyTweet);
      console.log(replyTweet);
    }
  }
}

export default new ReplyController();

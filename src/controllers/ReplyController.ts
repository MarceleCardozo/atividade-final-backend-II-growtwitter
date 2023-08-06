import users from "../data/users";
import Tweet from "../models/Tweet";
import User from "../models/User";
import TweetController from "./TweetController";
import Reply from "../models/Reply";

class ReplyController {
  public formatReplies(replies: Reply[], indent: string): string {
    let repliesInfo = "";

    replies.forEach((reply) => {
      const authorUsername = reply.getDetails().author.username;
      const replyContent = reply.getDetails().content;
      repliesInfo += `${indent}@${authorUsername}: ${replyContent}\n`;
    });

    return repliesInfo;
  }

  public replyToTweet(user: User, originalTweet: Tweet, content: string) {
    const currentUser = users.find(
      (item) => item.getDetails().username === user.getDetails().username
    );

    if (currentUser) {
      const replyTweet = new Tweet(content, "reply");
      replyTweet.setAuthorId(currentUser.getDetails().id);

      const reply = new Reply(content, user, originalTweet.getDetails().id);
      originalTweet.reply(reply);

      TweetController.register(user, replyTweet);

      const repliesInfo = this.formatReplies(originalTweet.getReplies(), "> ");
      return repliesInfo;
    }
  }
}

export default new ReplyController();

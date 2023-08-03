// LikeController.ts
import users from "../data/users";
import Tweet from "../models/Tweet";
import User from "../models/User";
import Like from "../models/Like";

class LikeController {
  public register(user: User, tweet: Tweet) {
    const userExists = users.find(
      (item) => item.getDetails().id === user.getDetails().id
    );

    if (userExists) {
      const like = new Like(user);
      tweet.like(user);
    }
  }

  public show(tweet: Tweet) {
    const likes = tweet.getLikes();

    let likesInfo = "";

    if (likes.length === 0) {
      likesInfo = "";
    } else if (likes.length === 1) {
      const likerUsername = likes[0].getUsername();
      likesInfo = `@${likerUsername} curtiu`;
    } else {
      const firstLikerUsername = likes[0].getUsername();
      const remainingLikes = likes.length - 1;
      likesInfo = `@${firstLikerUsername} e mais ${remainingLikes} ${
        remainingLikes === 1 ? "usuário curtiu" : "usuários curtiram"
      }`;
    }

    return likesInfo;
  }
}

export default new LikeController();

import users from "../data/users";
import Tweet from "../models/Tweet";
import User from "../models/User";

class LikeController {
  public register(user: User, tweet: Tweet) {
    const userExists = users.find(
      (item) => item.getDetails().id === user.getDetails().id
    );

    if (userExists) {
      tweet.like(user);
    }
  }

  public show(tweet: Tweet) {
    const likes = tweet.getLikes();
    const likedByUsers = likes.map((like) => like.getUsername());
    console.log(`Curtido por: ${likedByUsers.join(", ")}`);
  }
}

export default new LikeController();

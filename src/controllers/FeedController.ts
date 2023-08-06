import tweets from "../data/tweets";
import users from "../data/users";
import User from "../models/User";
import TweetController from "./TweetController";

class FeedController {
  public show(user: User) {
    const currentUser = users.find(
      (item) => item.getDetails().id === user.getDetails().id
    );

    if (!currentUser) {
      console.log("Usuário não encontrado.");
      return;
    }

    // Obter IDs dos usuários que o usuário atual segue
    const followedUserIds = currentUser
      .getFollowing()
      .map((u) => u.getDetails().id);

    // Filtrar tweets com base no autor do tweet ou nos usuários seguidos
    const tweetsFeed = tweets.filter(
      (item) =>
        item.getDetails().authorId === currentUser.getDetails().id ||
        followedUserIds.includes(item.getDetails().authorId)
    );

    tweetsFeed.forEach((item) => {
      const tweetAuthor = users.find(
        (u) => u.getDetails().id === item.getDetails().authorId
      );
      if (tweetAuthor) {
        TweetController.show(tweetAuthor, item);
      }
    });
  }
}

export default new FeedController();

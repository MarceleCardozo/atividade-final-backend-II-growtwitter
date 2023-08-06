import FollowMiddleware from "../middlewares/followMiddleware";
import User from "../models/User";

class FollowController {
  public register(follower: User, userFollowed: User) {
    if (
      !FollowMiddleware.validateUserExists(follower) ||
      !FollowMiddleware.validateUserExists(userFollowed)
    ) {
      console.error(
        "Usuário inválido ou usuário a ser seguido não encontrado."
      );
      return;
    }

    if (!FollowMiddleware.validateNotSelfFollower(follower, userFollowed)) {
      console.error("Você não pode seguir a si mesmo.");
      return;
    }

    const followingList = follower.getFollowing();
    if (!followingList.includes(userFollowed)) {
      followingList.push(userFollowed);
    }

    console.log(
      `${follower.getDetails().username} está seguindo ${
        userFollowed.getDetails().username
      }.`
    );
  }

  public show(user: User) {
    const followerId = user.getDetails().id;
    const following = user.getFollowing();

    if (!following || following.length === 0) {
      console.log(`${user.getDetails().username} não está seguindo ninguém.`);
    } else {
      console.log(`Usuários que ${user.getDetails().username} está seguindo:`);
      following.forEach((followedUser) => {
        console.log(followedUser.getDetails().username);
      });
    }
  }
}

export default new FollowController();

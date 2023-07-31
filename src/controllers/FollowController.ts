import FollowMiddleware from "../middlewares/followMiddleware";
import User from "../models/User";

class FollowController {
  private followingMap: { [userId: string]: User[] };

  constructor() {
    this.followingMap = {};
  }

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

    const followerId = follower.getDetails().id;
    const followingList = this.followingMap[followerId] || [];
    if (!followingList.includes(userFollowed)) {
      followingList.push(userFollowed);
    }
    this.followingMap[followerId] = followingList;

    console.log(
      `${follower.getDetails().username} está seguindo ${
        userFollowed.getDetails().username
      }.`
    );
  }

  public show(user: User) {
    const followerId = user.getDetails().id;
    const following = this.followingMap[followerId];

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

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

    userFollowed.followUser(follower); // Follow the user

    console.log(
      `${follower.getDetails().username} está seguindo ${
        userFollowed.getDetails().username
      }.`
    );
  }

  public show(user: User) {
    const followers = user.getFollowers();

    if (followers.length === 0) {
      console.log(`${user.getDetails().username} não tem seguidores.`);
    } else {
      console.log(`Seguidores de ${user.getDetails().username}:`);
      followers.forEach((follower) => {
        console.log(follower.getDetails().username);
      });
    }
  }
}

export default new FollowController();

import users from "../data/users";
import User from "../models/User";

class FollowMiddleware {
  public static validateNotSelfFollower(
    follower: User,
    userFollowed: User
  ): boolean {
    return follower.getDetails().id !== userFollowed.getDetails().id;
  }

  public static validateUserExists(user: User): boolean {
    return users.some((item) => item.getDetails().id === user.getDetails().id);
  }
}

export default FollowMiddleware;

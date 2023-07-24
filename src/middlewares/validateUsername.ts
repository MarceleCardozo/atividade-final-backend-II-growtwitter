import users from "../data/users";
import User from "../models/User";

class validateUsername {
  public validateExistingUsername(data: User): boolean {
    const existingUsername = users.find(
      (user) => user.getDetails().username === data.getDetails().username
    );
    if (existingUsername) {
      return false;
    }
    return true;
  }
}

export default validateUsername;

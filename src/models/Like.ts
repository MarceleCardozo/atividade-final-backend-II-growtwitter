import { v4 as createUuid } from "uuid";
import User from "./User";

class Like {
  private id: string;
  private username: string;

  constructor(user: User) {
    this.id = createUuid();
    this.username = user.getDetails().username;
  }

  public getId() {
    return this.id;
  }

  public getUsername() {
    return this.username;
  }
}

export default Like;

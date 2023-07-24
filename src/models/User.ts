import { v4 as createUuid } from "uuid";

class User {
  private id: string;

  constructor(
    private name: string,
    private email: string,
    private username: string,
    private password: number
  ) {
    this.id = createUuid();
  }

  public getDetails() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
    };
  }
}

export default User;

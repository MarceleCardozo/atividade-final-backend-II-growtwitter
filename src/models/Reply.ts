import { v4 as createUuid } from "uuid";
import User from "./User";

class Reply {
  private id: string;

  constructor(
    private content: string,
    private author: User,
    private originalTweetId: string
  ) {
    this.id = createUuid();
  }

  public getDetails() {
    return {
      id: this.id,
      content: this.content,
      author: this.author.getDetails(),
    };
  }
}

export default Reply;

import { v4 as createUuid } from "uuid";
import Like from "./Like";
import User from "./User";

class Tweet {
  private id: string;
  private authorId: string = "";
  private likes: Like[] = [];

  constructor(private content: string, private type: "normal" | "reply") {
    this.id = createUuid();
  }

  public getDetails() {
    return {
      id: this.id,
      content: this.content,
      type: this.type,
      authorId: this.authorId,
      likes: this.likes,
    };
  }

  public like(user: User) {
    const like = new Like(user);
    this.likes.push(like);
  }

  public setAuthorId(authorId: string) {
    this.authorId = authorId;
  }

  public getAuthorId() {
    return this.authorId;
  }

  public getLikes() {
    return this.likes;
  }
}

export default Tweet;

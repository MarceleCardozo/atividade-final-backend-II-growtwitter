import { v4 as createUuid } from "uuid";
import Like from "./Like";
import User from "./User";
import Reply from "./Reply";

class Tweet {
  private id: string;
  private authorId: string = "";
  private likes: Like[] = [];
  private replies: Reply[] = [];

  constructor(private content: string, private type: "normal" | "reply") {
    this.id = createUuid();
  }

  public getId() {
    return this.id;
  }

  public getDetails() {
    return {
      id: this.id,
      content: this.content,
      type: this.type,
      authorId: this.authorId,
      likes: this.likes,
      replies: this.replies.map((reply) => reply.getDetails()),
    };
  }

  public like(user: User) {
    const like = new Like(user);
    this.likes.push(like);
  }

  public reply(reply: Reply) {
    this.replies.push(reply);
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

  public getReplies() {
    return this.replies;
  }
}

export default Tweet;

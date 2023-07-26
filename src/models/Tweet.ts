import { v4 as createUuid } from "uuid";

class Tweet {
  private id: string;
  private authorId: string = "";

  constructor(private content: string, private type: "normal" | "reply") {
    this.id = createUuid();
  }

  public getDetails() {
    return {
      id: this.id,
      content: this.content,
      type: this.type,
    };
  }

  public setAuthorId(authorId: string) {
    this.authorId = authorId;
  }

  public getAuthorId() {
    return this.authorId;
  }
}

export default Tweet;

import { v4 as createUuid } from "uuid";

class Tweet {
  private id: string;
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
}

export default Tweet;

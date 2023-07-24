import { v4 as createUuid } from "uuid";
import Tweet from "./Tweet";

class User {
  private id: string;
  private tweets: Tweet[];

  constructor(
    private name: string,
    private email: string,
    private username: string,
    private password: number
  ) {
    this.id = createUuid();
    this.tweets = [];
  }

  public getDetails() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      tweets: this.tweets,
    };
  }

  public addTweet(tweet: Tweet) {
    this.tweets.push(tweet);
  }
}

export default User;

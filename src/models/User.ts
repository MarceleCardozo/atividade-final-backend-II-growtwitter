import { v4 as createUuid } from "uuid";
import Tweet from "./Tweet";
import tweets from "../data/tweets";

class User {
  private id: string;
  private following: User[] = [];

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

  public sendTweet(tweet: Tweet) {
    tweet.setAuthorId(this.getDetails().id);
    tweets.push(tweet);
  }

  public followUser(user: User) {
    if (!this.following.includes(user)) {
      this.following.push(user);
    }
  }

  public getFollowing() {
    return this.following;
  }
}

export default User;

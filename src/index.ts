import TweetController from "./controllers/TweetController";
import UserController from "./controllers/UserController";
import Tweet from "./models/Tweet";
import User from "./models/User";

console.log("Starting");

console.log("---------FEATURE 1---------");

const user1 = new User("Marcele", "marcele@gmail.com", "marcele", 12345);
const user2 = new User("Marcele", "marcele@gmail.com", "marcele", 12345);

UserController.register(user1);
UserController.register(user2);

console.log("---------FEATURE 2---------");

const tweet1 = new Tweet("Tweet1", "normal");
const tweet2 = new Tweet("Tweet2", "reply");

TweetController.register(user1, tweet1);
TweetController.register(user1, tweet2);

console.log(user1.getDetails().tweets);

console.log("---------FEATURE 3---------");

TweetController.show(user1, tweet1);

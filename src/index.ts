import FollowController from "./controllers/FollowController";
import TweetController from "./controllers/TweetController";
import UserController from "./controllers/UserController";
import Tweet from "./models/Tweet";
import User from "./models/User";

console.log("Starting");

console.log("---------FEATURE 1---------");

const user1 = new User("Marcele", "marcele@gmail.com", "marcele", 12345);
const user2 = new User("Marcele", "marcele@gmail.com", "marcele", 12345);
const user3 = new User("Luis", "luis@gmail.com", "luis", 12345);
const user4 = new User("João", "joão@gmail.com", "joão", 12345);

UserController.register(user1);
UserController.register(user2);
UserController.register(user3);
UserController.register(user4);

console.log("---------FEATURE 2---------");

const tweet1 = new Tweet("Tweet um", "normal");
const tweet2 = new Tweet("Tweet dois", "normal");

TweetController.register(user1, tweet1);
TweetController.register(user1, tweet2);

TweetController.list(user1);

console.log("---------FEATURE 3---------");

TweetController.show(user1, tweet1);

console.log("---------FEATURE 4---------");

FollowController.register(user1, user3);
FollowController.register(user3, user1);
FollowController.register(user4, user1);

FollowController.show(user1);
FollowController.show(user3);

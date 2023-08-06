import User from "./models/User";
import Tweet from "./models/Tweet";
import UserController from "./controllers/UserController";
import TweetController from "./controllers/TweetController";
import FollowController from "./controllers/FollowController";
import LikeController from "./controllers/LikeController";
import ReplyController from "./controllers/ReplyController";
import FeedController from "./controllers/FeedController";

// Registrar usuários
const user1 = new User("Marcele", "marcele@gmail.com", "marcele", 12345);
const user2 = new User("Luis", "luis@gmail.com", "luis", 12345);
const user3 = new User("João", "joão@gmail.com", "joão", 12345);

UserController.register(user1);
UserController.register(user2);
UserController.register(user3);

// Registrar tweets
const tweet1 = new Tweet("Tweet um", "normal");
const tweet2 = new Tweet("Tweet dois", "normal");
const tweet3 = new Tweet("Pelo amor de Deus, funciona!", "normal");
const tweet4 = new Tweet("Tweet do João", "normal");

TweetController.register(user1, tweet1);
TweetController.register(user1, tweet2);
TweetController.register(user1, tweet3);
TweetController.register(user3, tweet4);

// Registrar seguidores
FollowController.register(user1, user2);
FollowController.register(user1, user3);

// Registrar likes
LikeController.register(user2, tweet1);
LikeController.register(user3, tweet1);
LikeController.register(user2, tweet2);
LikeController.register(user2, tweet3);
LikeController.register(user3, tweet3);
LikeController.register(user2, tweet4);

// Registrar respostas
ReplyController.replyToTweet(user3, tweet3, "Hello!");
ReplyController.replyToTweet(user2, tweet4, "Opa!");

FollowController.show(user1);
FollowController.show(user2);

// Mostrar feed de tweets para user1
console.log("--------------------------------");
console.log("Feed de tweets para user1:");
FeedController.show(user1);

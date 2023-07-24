import UserController from "./controllers/UserController";
import User from "./models/User";

console.log("Starting");

const user1 = new User("Marcele", "marcele@gmail.com", "marcele", 12345);
const user2 = new User("Marcele", "marcele@gmail.com", "marcele", 12345);

UserController.register(user1);
UserController.register(user2);

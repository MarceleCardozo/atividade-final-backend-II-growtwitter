import User from "../models/User";
import validateUsername from "../middlewares/validateUsername";
import users from "../data/users";

class UserController {
  public register(user: User): void {
    const usernameValidator = new validateUsername();

    if (!usernameValidator.validateExistingUsername(user)) {
      console.log(
        "Não foi possível cadastrar o usuário. Nome de usuário indisponível. Por favor, verifique os dados e tente novamente."
      );
      return;
    }

    users.push(user);
    console.log("Usuário cadastrado com sucesso!");
  }
}

export default new UserController();

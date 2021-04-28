import AppError from "../../../../errors/AppError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}


class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({user_id}: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if(!user){
        throw new AppError("id not found",400)
    }
    if (user.admin === false){
        throw new AppError("user not admin",400)
    }

    const users = this.usersRepository.list();

    return users
  }
}

export { ListAllUsersUseCase };

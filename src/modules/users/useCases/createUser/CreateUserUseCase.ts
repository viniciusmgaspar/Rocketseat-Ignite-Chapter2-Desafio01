import { User } from "modules/users/model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email)
    if(userAlreadyExists){
        throw new Error("user already exists")
    }
    
    const user = this.usersRepository.create({name, email})
    
    return user
  }
}

export { CreateUserUseCase };

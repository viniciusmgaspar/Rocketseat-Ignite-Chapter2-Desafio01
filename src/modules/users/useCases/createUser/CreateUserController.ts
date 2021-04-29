import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try{
        const {name, email} = request.body
        const user = this.createUserUseCase.execute({name, email})

        delete user.id
        delete user.created_at
        delete user.updated_at
        

        return response.status(201).json(user)

    }catch(error){
        return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };

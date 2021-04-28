import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
    user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
        const {user_id} = request.headers

        console.log(user_id)
        const all = this.listAllUsersUseCase.execute({user_id});

        return response.json(all)
  }
}

export { ListAllUsersController };

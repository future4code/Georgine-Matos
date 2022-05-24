import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";

export class UserController {
  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, name, password } = req.body;
      const input = {
        email: email,
        name: name,
        password: password,
      };

      await new UserBusiness().createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };  
}

export class GetAllUsers {
  public getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await new UserBusiness.get()
      res.send(users).status(200);

      }
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}
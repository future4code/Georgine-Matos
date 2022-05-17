import { Request, Response } from "express";
import getUsers from "../data/getUsers";

export default async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await getUsers();
    if (!users) {
      res.status(404).send("Não há usuário cadastrado");
    }
    res.status(201).send(users);
  } catch (error: any) {
    res.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

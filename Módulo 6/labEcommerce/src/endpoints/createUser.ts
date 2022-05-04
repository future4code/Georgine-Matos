import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(req: Request, res: Response) {
  try {
    //VALIDAR ENTRADAS DA REQUISIÇÃO
    if (!req.body.name || !req.body.email || !req.body.password) {
      res.status(400).send("Dados importantes do usuário não enviados");
    }
    const id = Date.now() + Math.random().toString();
    await insertUser(id, req.body.name, req.body.email, req.body.password);
    res.status(200).send("Usuário criado com sucesso");
    //RESPONDER A REQUISIÇÃO
  } catch (error: any) {
    res.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

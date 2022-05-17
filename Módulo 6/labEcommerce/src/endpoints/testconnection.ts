import { Request, Response } from "express";
import firstConnection from "../data/firstConnection";

export default async function testConnection(req: Request, res: Response) {
  try {
    await firstConnection();
    res.status(200).send("Conexão feita com sucesso");
  } catch (error: any) {
    res.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

import { Request, Response } from "express";

export default async function testConnection(req: Request, res: Response) {
  try {
      //VALIDAR ENTRADAS DA REQUISIÇÃO

      //CONSULTAR O BANCO DE DADOS

      //VALIDAR SAÍDAS DO BANCO

      //RESPONDER A REQUISIÇÃO
  } catch (error: any) {
    res.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

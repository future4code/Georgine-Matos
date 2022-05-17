import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";

export default async function createProduct(req: Request, res: Response) {
  try {
    //VALIDAR ENTRADAS DA REQUISIÇÃO
    if (!req.body.name || !req.body.price || !req.body.image_url) {
      res.status(400).send("Dados importantes do produto não enviados");
    }
    const id = Date.now() + Math.random().toString();
    await insertProduct(id, req.body.name, req.body.price, req.body.image_url);
    res.status(201).send("Produto inserido com sucesso");
    //RESPONDER A REQUISIÇÃO
  } catch (error: any) {
    res.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

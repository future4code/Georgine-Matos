import { Request, Response } from "express";
import getProducts from "../data/getProducts";
import insertPurchases from "../data/insertpurchases";

export default async function createPurchase(req: Request, res: Response) {
  try {
    //VALIDAR ENTRADAS DA REQUISIÇÃO
    if (!req.body.user_id || !req.body.product_id || !req.body.quantity) {
      res.status(400).send("Dados importantes da compra não enviados");
    }
    const id = Date.now() + Math.random().toString();
    const productID = await getProducts()
    const total_price = 0
    await insertPurchases(id, req.body.user_id, req.body.product_id, req.body.quantity, total_price);
    res.status(200).send(productID);
    //RESPONDER A REQUISIÇÃO
  } catch (error: any) {
    res.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

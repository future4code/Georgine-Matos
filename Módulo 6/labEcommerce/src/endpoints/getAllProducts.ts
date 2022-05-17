import { Request, Response } from "express";
import getProducts from "../data/getProducts";

export default async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await getProducts();
    if (!products) {
      res.status(404).send("Não há produto cadastrado");
    }
    res.status(201).send(products);
  } catch (error: any) {
    res.status(404).send({
      message: error.message || error.sqlMessage,
    });
  }
}

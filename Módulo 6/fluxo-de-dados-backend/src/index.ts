import express, { Request, Response } from "express";
import { Produtos, produtos } from "./data";
import { v4 as generateId } from "uuid";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(201).send("Hello from Express");
});

app.post("/produtos/produto", (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || !price) {
    res.status(401).send("Informe um nome e um valor");
    return;
  }
  const newProduto: Produtos = {
    id: generateId(),
    name: name,
    price: price,
  };

  produtos.push(newProduto);

  res.status(201).send(produtos);
});

app.get("/produtos", (req: Request, res: Response) => {
  res.status(201).send(produtos);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

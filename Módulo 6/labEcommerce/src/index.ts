import express, { Request, Response } from "express";
import connection from "./connection";
import cors from "cors";
import { AddressInfo } from "net";
import testConnection from "./endpoints/testconnection";
import createUser from "./endpoints/createUser";
import getAllUsers from "./endpoints/getAllUsers";
import createProduct from "./endpoints/createProduct";
import getAllProducts from "./endpoints/getAllProducts";
import createPurchase from "./endpoints/createPurchase";

const app = express();
app.use(express.json());
app.use(cors());

//ENDPOINT TESTE CONEXAO
app.get("/", testConnection);

//INSERE USUARIO NA TABELA
app.post("/users", createUser)

//BUSCAR TODOS OS USUARIO DA TABELA
app.get("/users", getAllUsers)

//INSERIR PRODUTO NO BANCO
app.post("/products", createProduct)

//BUSCAR TODOS OS PRODUTOS DA TABELA
app.get("/products", getAllProducts)

//INSERE PEDIDO NA TABELA
app.post("/products",createPurchase)

app.post("/products", async (req: Request, res: Response): Promise<void> => {
  const id = Date.now().toString();
  const { name, price, image_url } = req.body;

  try {
    // usando o query builder
    if (name && price && image_url) {
      await connection("labecommerce_products").insert({
        id,
        name: req.body.name,
        price: req.body.price,
        image_url: req.body.image_url      
      });
      console.log("Produto inserido");      
      res.status(201).send({ message: "Produto inserido com sucesso" });
    } else {
      res.status(500).send({ message: "Ausência de informações do produto"});
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//inserir compras ao id do usuario
// app.post("/purchases", async (req: Request, res: Response): Promise<void> => {
//   const id = Date.now().toString();
//   const { user_id, product_id, quantity } = req.body;

//   try {
//     // usando o query builder
//     if (user_id && product_id && quantity) {
//       let total = quantity * price
//       await connection("labecommerce_purchases").insert({
//         id,
//         user_id: req.body.user_id,
//         product_id: req.body.product_id,
//         quantity: req.body.quantity,
//         total_price: total     
//       });
//       console.log("Compra realizada");      
//       res.status(201).send({ message: "Produto adicionando ao seu pedido" });
//     } else {
//       res.status(500).send({ message: "Ausência de informações do pedido"});
//     }
//   } catch (error: any) {
//     res.status(500).send(error.sqlMessage || error.message);
//   }
// });











//EDITAR USUARIO
app.put(
  "/user/edit/:id",
  async (req: Request, res: Response): Promise<void> => {
    const { name, nickname } = req.body;

    try {
      if (name && nickname) {
        // usando o query builder
        await connection("TodoListUser")
          .update({
            name: req.body.name,
            nickname: req.body.nickname,
          })
          .where({
            id: req.params.id,
          });
        res.status(200).send({ message: "Usuário editado com sucesso" });
      } else {
        res.status(500).send({ message: "Ausência de informações do usuário" });
      }
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
);

//CRIAR TAREFA
app.post("/task", async (req: Request, res: Response): Promise<void> => {
  const id = Date.now().toString();
  const { title, description, limit_date, creator_user_id } = req.body;

  try {
    if (title && description && limit_date && creator_user_id) {
      // usando o query builder
      await connection("TodoListTask").insert({
        id,
        title: req.body.title,
        description: req.body.description,
        limit_date: req.body.limit_date,
        creator_user_id: req.body.creator_user_id,
      });
      res.status(201).send({ message: "Tarefa criada com sucesso" });
    } else {
      res.status(500).send({ message: "Ausência de informações da tarefa" });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//BUSCAR TAREFA PELO ID
app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
  const taskId = req.params.id;
  try {
    const result = await connection("TodoListTask")
      //JUNTAR COM A TABELA PASSADA NO 1º ARGUMENTO COMPARANDO OS VALORES PASSADOS NOS 2º E 3º ARGUMENTOS DE SUAS RESPECTIVAS TABELAS
      .innerJoin(
        "TodoListUser",
        "TodoListTask.creator_user_id",
        "TodoListUser.id"
      )
      //SELECIONA TUDO DO 1º ARGUMENTO E NICKNAME DO 2º
      .select("TodoListTask.*", "TodoListUser.nickname")
      //INFORMAR DADO E SUA RESPECTIVA TABELA A SER PESQUISADO
      .where({ "TodoListTask.id": taskId });
    console.log(result);
    res.status(200).send({ message: "Tarefa apresentada com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});



//BUSCAR TODAS AS TAREFAS DE 1 USUARIO
app.get("/tasks/user/:id", async (req: Request, res: Response): Promise<void> => {
  const taskId = req.params.id;
  try {
    const result = await connection("TodoListTask")
      .innerJoin(
        "TodoListUser",
        "TodoListTask.creator_user_id",
        "TodoListUser.id"
      )
      .select("TodoListTask.*", "TodoListUser.nickname")
      .where({ "TodoListTask.creator_user_id": taskId });
    console.log(result);
    res.status(200).send({ message: "Tarefas apresentadas com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in https://localhost:${address.port}`);
  } else {
    console.error(`Server is not running in https://localhost`);
  }
});

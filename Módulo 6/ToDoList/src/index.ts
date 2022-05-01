import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

//ENDPOINT TESTE CONEXAO
app.get("/", (req: Request, res: Response) => {
  res.status(201).send("Hello from Express");
});

//INSERE USUARIO NA TABELA
app.post("/user", async (req: Request, res: Response): Promise<void> => {
  const id = Date.now().toString();
  const { name, email, nickname } = req.body;

  try {
    // usando o query builder
    if (name && email && nickname) {
      await connection("TodoListUser").insert({
        id,
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
      });
      res.status(201).send({ message: "Usuário inserido com sucesso" });
    } else {
      res.status(500).send({ message: "Ausência de informações do usuário" });
    }
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//BUSCAR USUARIO PELO ID
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    // usando o query builder
    const result = await connection("TodoListUser").where({
      id: req.params.id,
    });
    console.log(result);
    res.status(200).send({ message: "Usuário apresentado com sucesso" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

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

//BUSCAR TODOS OS USUARIOS
app.get("/userall", async (req: Request, res: Response): Promise<void> => {
  try {
    // usando o query builder
    const result = await connection("TodoListUser");
    console.log(result);
    res.status(200).send({ message: "Usuários apresentados com sucesso" });
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

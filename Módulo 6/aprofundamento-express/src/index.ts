import express, { Request, Response } from "express";
import cors from "cors";
import { todos } from "./listaToDos";
import { AddressInfo } from "net";

const app = express();
app.use(cors());
app.use(express.json());

// Exercício 1
app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

// Exercício 2
type ToDos = {
  id: number;
  title: string;
  completed: boolean;
};

// Exercício 3
app.get("/todos", (req: Request, res: Response) => {
  const todo = todos.map((tarefa) => tarefa);
  res.status(200).send(todo);
});

// Exercício 4
app.get("/todos:status", (req: Request, res: Response) => {
  const statusTarefa = status
  const todo = todos.filter((tarefa) => tarefa.completed == false);
  res.status(200).send(todo);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Rodando`);
  } else {
    console.error(`Falha ao subir o server`);
  }
});

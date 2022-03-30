import express, { Request, Response } from "express";
import cors from "cors";
import { users } from "./usersData";
import { posts } from "./postsData";

import { AddressInfo } from "net";
import { type } from "os";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get(
  "https://jsonplaceholder.typicode.com/users",
  (req: Request, res: Response) => {
    res.send(res.json());
  }
);

app.get("/users", (req, resp) => {
  const usuarios = users.map((usuario) => usuario);
  resp.send(usuarios);
});

app.get("/posts", (req, resp) => {
  const postss = posts.map((post) => post)
  resp.send(postss)
});

app.get(
  "https://jsonplaceholder.typicode.com/posts",
  (req: Request, res: Response) => {
    res.send(res.json());
  }
);

app.listen(3003, () => {
  console.log("Server startou");
});

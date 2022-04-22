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

//1 - a - OS RESULTADOS SÃO APRESENTADOS NO CONSOLE DE FORMA ESTRUTURADA NO CONSOLE
//1 - B - ENDPOINT BUSCA DE ATOR PELO NOME
app.get("/actor/:name", async (req: Request, res: Response) => {
  const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = '${name}'
          `);
    return result[0][0];
  };

  try {
    const name = req.params.name;
    console.log(await getActorByName(name));
    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//1 - C - ENDPOINT QTDE ATOR POR GENERO
app.get("/actors/:gender", async (req: Request, res: Response) => {
  const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
          SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
        `);
    // Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
    // o valor no resultado!
    const count = result[0][0].count;
    return count;
  };
  try {
    const gender = req.params.gender;
    console.log(await countActors(gender));
    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(error.sqlMessage || error.message);
  }
});

//2 - A - ATUALIZAÇÃO DE SALARIO E ID
app.put("/actor/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor")
      .update({
        salary: req.body.salary,
      })
      .where({ id: req.params.id });
    res.status(200).send({ message: "Ator editado" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

// 2 - B
app.delete("/actor/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    await connection("Actor").delete().where("id", req.body.id);
    res.status(200).send({ message: "Ator excluído com sucesso" });
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

import express, { Request, Response, Express } from 'express'
import { AddressInfo } from "net";
import { Contas, contas, User, users } from "./data";
import { v4 as generateId } from "uuid";
import cors from 'cors'

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
   res.status(201).send("Hello from Express");
 });

app.get("/users", (req: Request, res: Response) => { 
   res.status(200).send(users);
 });

 app.post("/addusers",(req: Request, res: Response)=>{
     const { name } = req.body;
 
   if (!name) {
     res.status(401).send("Informe os dados necessários");
     return;
   }
   const newUser: User = {
     id: generateId(),
     name: name,
   };
   res.status(200).send("Usuario cadastrado");
   users.push(newUser);
 })

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
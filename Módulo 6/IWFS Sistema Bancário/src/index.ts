import express, {Express} from 'express'
import { AddressInfo } from "net";
import { Contas, contas, users } from "./data";
import { v4 as generateId } from "uuid";
import cors from 'cors'

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/users", (rep:Request, res:Response)=>{
    
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
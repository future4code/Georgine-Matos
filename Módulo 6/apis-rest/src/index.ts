import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

//1 - 
//METODO GET
//("users")

//2 - 
//FAZER UM FILTER NO ARRAY BUSCANDO PELO TYPE
//A IDEIA É DE VERIFICAR SE O TYPE É NULO OU NAO
//

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;
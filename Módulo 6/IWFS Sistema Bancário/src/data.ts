import { v4 as generateId } from "uuid";

export type Contas = {
  tipo: []
};

type Transacoes = {
  transacoes: ["Transferencia, Saque, Depósito"];
};

export type User = {
  id: string;
  name: string;
};

export const contas = [
  {
    id: "1",
    typeAccount: "Corrente",
  },
  {
    id: "2",
    typeAccount: "Poupança",
  },
  {
    id: "3",
    typeAccount: "Salário",
  },
  {
    id: "3",
    typeAccount: "Salário",
  },
  {
    id: "2",
    typeAccount: "Poupança",
  },
];

export const users = [
  {
    id: generateId(),
    name: "usuario1",
  },
  {
    id: generateId(),
    name: "usuario2",
  },
  {
    id: generateId(),
    name: "usuario3",
  },
];

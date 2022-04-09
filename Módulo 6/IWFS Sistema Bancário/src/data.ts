import { v4 as generateId } from "uuid";

export type Contas = {
  id: string;
  name: string;
  typeAccount: string;
};

type Transacoes = {
  transacoes: ["Transferencia, Saque, Depósito"];
};

export type Users = {
  id: string;
  name: string;
  transacoes: Transacoes;
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
    conta: contas,
    transacoes: ["op1", "op2", "op3"],
  },
  {
    id: generateId(),
    name: "usuario2",
    conta: contas,
    transacoes: ["op1", "op2", "op3"],
  },
  {
    id: generateId(),
    name: "usuario3",
    conta: contas,
    transacoes: ["op1", "op2", "op3"],
  },
];

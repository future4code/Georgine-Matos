import {v4 as generateId} from "uuid"

export type Produtos = {
    id: string,
    name: string,
    price: number
}

export const produtos: Produtos[] = [
  {
    id: generateId(),
    name: "produto1",
    price: 1,
  },
  {
    id: generateId(),
    name: "produto2",
    price: 2,
  },
  {
    id: generateId(),
    name: "produto3",
    price: 3,
  },
];

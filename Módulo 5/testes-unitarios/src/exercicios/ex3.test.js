import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  const resultado = checaItensDuplicados([1, 2, 3, 4, 5, 2])
  expect(resultado).toEqual([1, 2, 3, 4, 5, 2])
  expect(resultado).toContain(3)
  expect(resultado).toBeLessThan(3)
  expect(resultado).toHaveLength(4)
});

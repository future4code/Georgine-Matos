let minhaString: string = "teste";

minhaString = "12";

// console.log(minhaString);

// A - ERRO PELO FATO DE IMCOMPATIBILIDADE DE TIPOS NA VARIAVEL EM QUESTÃO

// B -

let meuNumero: number | string;

meuNumero = "12";

console.log(meuNumero);

// C -

let pessoa: { nome: string; idade: number; corFavorita: string };

type Pessoa = { nome: string; idade: number; corFavorita: string }

let pessoa1: Pessoa = {nome:"sdf", idade: 12, corFavorita:"tste"}
let pessoa2: Pessoa = {nome:"sdf", idade: 12, corFavorita:"tste"}
let pessoa3: Pessoa = {nome:"sdf", idade: 12, corFavorita:"tste"}

console.log(pessoa1);

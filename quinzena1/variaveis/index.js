//INTERPRETAÇÃO
1//imprimirá a variável b de valor 10
//imprimirá os valores das variáveis a e b, porém, b recebendo outro valor.

2//imprimirá os valores das variáveis a, b e c.
//Respectivamente 10, 10 e 10

3//p => horasTrabalhadas
//t => valorDiario


//CÓDIGOS
1
const nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);

// erro, pois não há especificações sobre a informação de entrada ou que tipo de dado a variável irá armazenar.

nome = prompt("Informe seu nome");
idade = prompt("Informe sua idade");

console.log(typeof nome);
console.log(typeof idade);

// Agora, há uma certeza sobre o tipo de dado que a variável receberá, e ambos, são string

console.log("Olá", nome + " você tem", idade + " anos");

2
let resp1 = "Sim";
let resp2 = "Não";
let resp3 = "Não"

let p1 = "Vc está cansado?";
let p2 = "Gosta de viajar?";
let p3 = "Será um dev?";

console.log(p1 + resp2);
console.log(p3 + resp1);
console.log(p2 + resp3);

3
let a = 10
let b = 25
let aux1;

console.log("O valor de a é", a) 
console.log("O valor de b é", b)

aux1 = a;
a = b

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", aux1)


// DESAFIO

let a = prompt("Informe o primeiro valor")
let b = prompt("Informe o segundo valor")

console.log("A soma dos valores dá ", Number(a) + Number(b));
console.log("O produto dos valores dá ", a * b);
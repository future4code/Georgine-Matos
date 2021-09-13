// a) Pergunte a idade do usuário
// let idade = Number(prompt("Informe sua idade"))

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// let idadeAmigo = Number(prompt("Informe a idade de seu amigo"))

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo);

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
// console.log("A diferença de idades é de: ", idade - idadeAmigo);


// a) Peça ao usuário que insira um número **par**
// let par = Number(prompt("Informe um número par"))

// b) Imprima na console **o resto da divisão** desse número por 2.
// console.log(par % 2);

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Sendo um número par, o resto sempre será 0

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//Sendo um número ímpar, o resto sempre será 1


// a) A idade do usuário em meses
// let idade = Number(prompt('Informe sua idade em anos'))
// let idMeses = idade * 12
// console.log("Sua idade em meses é de: ", idMeses);

// b) A idade do usuário em dias
// let idDias = idMeses * 30
// console.log("Sua idade em dias é de: ", idDias);

// // c) A idade do usuário em horas
// let idHoras = idDias * 24
// console.log("Sua idade em horas é de: ", idHoras);


// let pNum = Number(prompt("Informe o 1 numero"))
// let sNum = Number(prompt("Informe o 2 numero"))

// O primeiro numero é maior que segundo? true ou false
// console.log("O", pNum, "é maior que", sNum, "?", pNum > sNum);

// O primeiro numero é igual ao segundo? true ou false
// console.log("O", pNum, "é igual a", sNum, "?", pNum === sNum);

// // O primeiro numero é divisível pelo segundo? true ou false
// console.log("O", pNum, "é divisível por", sNum, "?", pNum >= sNum);

// // O segundo numero é divisível pelo primeiro? true ou false
// console.log("O", sNum, "é divisível por", pNum, "?", sNum >= pNum);


// DESAFIOS
// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// let tempK = (77 - 32) * (5 / 9) + 273.15
// console.log('77°F é o equivalente a', tempK, "kelvin");

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// let tempF = (80) * (9 / 5) + 32
// console.log('80°C é o equivalente a', tempF, "Fahrenheit ");

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// let tempF = (30) * (9 / 5) + 32
// let tempK = (tempF - 32) * (5 / 9) + 273.15
// console.log('30°C é o equivalente a', tempF, "Fahrenheit", "e", tempK, "kelvin");

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
// let tempC = Number(prompt("Informe a temperatura"))
// let tempF = tempC * (9 / 5) + 32
// let tempK = (tempF - 32) * (5 / 9) + 273.15
// console.log(tempC + '°C é o equivalente a ' + tempF + ' Fahrenheit e ' + tempK + ' kelvin');


// a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
// let klh = 0.05;
// let total = 280 * klh
// console.log('Valor a ser pago sem desconto:', total);

// b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
// const desc = 0.15
// console.log('Valor a ser pago com desconto:', total - (total * desc));


// a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
// `20lb equivalem a X kg`
const lb = 0.454 //de lb para kg
const kg = 2.2046 //de kg para lb

console.log('20lb equivalem a ' + (20 * kg) + 'kg');

// b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
// `10.5oz equivalem a X kg`
//const kg = oz / 35.274 //de oz para kg
console.log('10.5oz equivalem a ' + (10.5 / 35.274) + 'kg');

// c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
// `100mi equivalem a X m`
const mi = 1609
console.log('100mi equivalem a ' + (100 * mi) + 'm');

// d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
// `50ft equivalem a X m`
const ft = 0.3048
console.log('50ft equivalem a ' + (50 * ft) + 'm');

// e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
// `103.56gal equivalem a X l`
const gal = 3.78541
console.log('103.56gal equivalem a ' + (103.56 * gal) + 'l');

// f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
// `450 xic equivalem a X l`
const xic = 0.24
console.log('450 xic equivalem a ' + (450 * xic) + 'l');

// g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter
let valorUser = Number(prompt('Informe o valor'))
console.log(valorUser + ' xic equivalem a ' + valorUser * xic + 'l');
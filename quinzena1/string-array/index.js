// 1 - INTERPRETAÇÃO
// let array
// console.log('a. ', array)
// undefined

// array = null
// console.log('b. ', array)
// null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// 11

// let i = 0
// console.log('d. ', array[i])
// 3

// array[i+1] = 19
// console.log('e. ', array)
// [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// 9

// 2-
// const frase = prompt("Digite uma frase")
// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ONIBUS EM MIRROCOS 27

// 1- CÓDIGOS
// let email = prompt('Informe o email')
// let nome = prompt('Informe o seu nome')

// console.log(`O email ${email} foi cadastrado com sucesso. Seja bem-vindo(o), ${nome}`);

//2-
// /a
// let comidas = ['com1 ', 'com2 ', 'com3 ', 'com4 ', 'com5 ']
// console.log(comidas);

// //b
// console.log(`Essas são minhas comidas favoritas: 
//     ${comidas[0]}
//     ${comidas[1]}
//     ${comidas[2]}
//     ${comidas[3]}
//     ${comidas[4]}`);

// //c
// let comidaUsuario = prompt('Informe a sua comida')
// comidas[1] = comidaUsuario
// console.log(`Essas são minhas comidas favoritas: 
//     ${comidas[0]}
//     ${comidas[1]}
//     ${comidas[2]}
//     ${comidas[3]}
//     ${comidas[4]}`);

// a 3
// //a
// let listaDeTarefas = []

// //b
// let tar1 = prompt('primeira tarefa')
// listaDeTarefas.push(tar1)

// let tar2 = prompt('segunda tarefa')
// listaDeTarefas.push(tar2)

// let tar3 = prompt('terceira tarefa')
// listaDeTarefas.push(tar3)

// //c
// console.log(listaDeTarefas);

// //d
// let indice = Number(prompt('informe o indice de alguma tarefa'))

// //e
// listaDeTarefas.splice(indice, 1)

// //fa
// console.log(listaDeTarefas);


// -----------DESAFIOS-----------
//1
let frase = prompt('Informe a frase')
let palavra = frase.split(' ');
console.log(palavra);

//2
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indice = frutas.indexOf('Abacaxi')


// ------------------ INTERPRETAÇÃO ------------------
//1 - Está somando todos os valores de 0 ate i < 5. 10

//2 - a) 19 21 23 25 27 30. 
//b) for in

//3 *
// **
// ***
// ****

// ------------------ ESCRITA DE CÓDIGO ------------------
//1
// let qtdeAnimais = Number(prompt('Informe a quantidade de animais que vc tem'))
// let arrayAnimais = []

// if (qtdeAnimais == 0) {
//     console.log(`Que pena, voce pode adotar um pet`);
// }

// for (let i = 1; i <= qtdeAnimais; i++) {
//     let nome = prompt(`Informe o nome do ${i} animal`)
//     arrayAnimais.push(nome)    
// }
// console.log(arrayAnimais);

//2
// let arrayOriginal = [101, 12, 3, 45, 511, 600, -7, 80]
// let arrayPar = []

// function imprimeArray() {
//     console.log(`--------- ELEMENTOS DO ARRAY ORIGINAL ---------`)
//     for (const elemento of arrayOriginal) {
//         console.log(elemento)
//     }
//     console.log('');
// }

// function imprimeArrayDividido() {
//     console.log(`--------- ELEMENTOS DO ARRAY / 10 ---------`);
//     for (const elemento of arrayOriginal) {
//         console.log(elemento / 10)
//     }
//     console.log('');
// }

// function arrayPares() {
//     console.log(`--------- ELEMENTOS PARES DO ARRAY ---------`);
//     for (const elemento of arrayOriginal) {
//         if (elemento % 2 == 0) {
//             arrayPar.push(elemento)
//         }
//     }
//     console.log(arrayPar);
// }

// function arrayString() {
//     console.log(`--------- ELEMENTOS STRING DO ARRAY ---------`);
//     for (let i = 1; i <= arrayOriginal.length; i++) {
//         console.log(`O ${i} elemento do array é o número ${arrayOriginal[i-1]}`);
//     }
// }

// function maiorMenorNumeroArray() {
//     let maior = 0
//     let menor = 0
//     for (const elemento of arrayOriginal) {
//         if (elemento > maior) {
//             maior = elemento
//         } else if(elemento < menor) {
//             menor = elemento
//         }
//     }
//     console.log(`Maior número é: ${maior}`);
//     console.log(`Menor número é: ${menor}`);
// }

// imprimeArray()
// imprimeArrayDividido()
// arrayPares()
// arrayString()
// maiorMenorNumeroArray()


// ------------------ DESAFIOS ------------------
//1
// let numeroEscolhido = Number(prompt('Informe o número'))
// let palpite = Number(prompt(`Vamos jogar. Informe o seu palpite`))
// let contador = 1

// function verificaPalpite() {
//     while (numeroEscolhido != palpite) {
//         if (palpite > numeroEscolhido) {
//             console.log('')
//             console.log(`--------------------------------`);
//             console.log(`Número chutado foi: ${palpite}`);
//             console.log('Errrrrrrrou, escolha um número menor');
//             console.log(`--------------------------------`);
//             palpite = Number(prompt('Informe um novo palpite'))
//         } else if (palpite < numeroEscolhido) {
//             console.log('')
//             console.log(`--------------------------------`);
//             console.log(`Número chutado foi: ${palpite}`);
//             console.log('Errrrrrrrou, escolha um número maior');
//             console.log(`--------------------------------`);
//             palpite = Number(prompt('Informe um novo palpite'))
//         }
//         contador++
//     }
//     console.log('Parabéns, vc acertou!');
//     console.log(`Número chutado foi: ${palpite}`);
//     console.log(`Você precisou de ${contador} tentativas até acertar`);
// }

// verificaPalpite()

//2
let numAleatorio = Math.floor(Math.random() * 100 + 1);
let palpite = Number(prompt(`Vamos jogar. Informe o seu palpite`))
let contador = 1

function verificaPalpite() {
    while (numAleatorio != palpite) {
        if (palpite > numAleatorio) {
            console.log('')
            console.log(`--------------------------------`);
            console.log(`Número chutado foi: ${palpite}`);
            console.log('Errrrrrrrou, escolha um número menor');
            console.log(`--------------------------------`);
            palpite = Number(prompt('Informe um novo palpite'))
        } else if (palpite < numAleatorio) {
            console.log('')
            console.log(`--------------------------------`);
            console.log(`Número chutado foi: ${palpite}`);
            console.log('Errrrrrrrou, escolha um número maior');
            console.log(`--------------------------------`);
            palpite = Number(prompt('Informe um novo palpite'))
        }
        contador++
    }
    console.log('Parabéns, vc acertou!');
    console.log(`Número chutado foi: ${palpite}`);
    console.log(`Você precisou de ${contador} tentativas até acertar`);
    console.log(``);
    console.log(`Numero escolhido ${numAleatorio}`);
}

verificaPalpite()
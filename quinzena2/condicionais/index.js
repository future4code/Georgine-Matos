// -- -- -- -- -- -- - INTERPRETAÇÃO-- -- -- -- -- -- -// 
1//a - Ele verifica se o número é par. Se o resto da divisão for 0// a 1ª instrução do if será executada, caso contrário, a 2ª será executada
//b - pares
//c - ímpares

// 2
//a - Apresenta a fruta e seu preço
// b - O preço da fruta ", maça, " é ", "R$ ", 2.25
//c - O preço da fruta  Pêra  é  R$  5. 

//3
//a - Recebendo uma string e convertendo em numero
//b - Esse número passou no teste. Erro será apresentado
//c - Sim. Por conta do escopo da variável 'mensagem'. Ela está em um escopo local e é chamada no escopo global


// -- -- -- -- -- -- - ESCRITA DE CÓDIGO-- -- -- -- -- -- -
//1 
// let idade = Number(prompt('Sua idade'))
// if (idade >=18) {
//     console.log('Você pode dirigir');
// } else {
//     console.log('Você não pode dirigir');
// }

// 2. 
// let turnoEstudo = prompt('Digite m, v ou t para os turnos').toUpperCase()
// function identificaTurno(turno) {
//     if (turno == 'M') {
//         console.log('Bom dia');
//     } else if (turno == 'T') {
//         console.log('Boa tarde');
//     } else if (turno == 'N') {
//         console.log('Boa noite');
//     } else {
//         console.log('Entrada inválida');
//     }
// }
// identificaTurno(turnoEstudo)

// 3. 
// let turnoEstudo = prompt('Digite m, v ou t para os turnos').toUpperCase()
// function identificaTurno(turno) {
//     switch (turno) {
//         case 'M':
//             console.log('Bom dia');
//             break;
//         case 'T':
//             console.log('Bom tarde');
//             break;
//         case 'N':
//             console.log('Bom noite');
//             break;
//         default:
//             console.log('Entrada inválida');
//             break;
//     }
// }
// identificaTurno(turnoEstudo)

// 4. 
// const filme = {
//     genero: '',
//     precoIngresso: 0
// }

// function condicaoFilme(algo) {
//     algo.genero = prompt('Informe o genero do filme').toUpperCase()
//     algo.precoIngresso = confirm('O valor do ingresso é abaixo de R$ 15?')
//     if (algo.genero == 'FANTASIA' && algo.precoIngresso) {
//         console.log('Bom filme');        
//     } else {
//         console.log('Escolha outro filme :(');         
//     }
// }
// condicaoFilme(filme)


// -- -- -- -- -- -- - DESAFIOS -- -- -- -- -- -- -
// 1. 
// const filme = {
//     genero: '',
//     precoIngresso: 0,
//     snack:''
// }

// function condicaoFilme(algo) {
//     algo.genero = prompt('Informe o genero do filme').toUpperCase()
//     algo.precoIngresso = confirm('O valor do ingresso é abaixo de R$ 15?')
//     algo.snack = prompt('Informe o que será consumido')
//     if (algo.genero == 'FANTASIA' && algo.precoIngresso) {
//         console.log(`Bom filme e aproveite o(a) ${algo.snack}`);        
//     } else {
//         console.log('Escolha outro filme :(');         
//     }
// }
// condicaoFilme(filme)

// 2. 
const dadoBilhete = {
    nomeCLiente: '',
    tipoJogo: '',
    etapa: '',
    categoria: 0,
    qtdeIngresso: 0,
    valorIngresso: 0
}

function puxaBilhete(algo) {
    algo.nomeCLiente = prompt('Informe seu nome').toUpperCase()
    algo.tipoJogo = prompt('Informe o tipo de jogo: IN para internacional; DO para doméstico').toUpperCase()
    algo.etapa = prompt('Informe a etapa do jogo: SF para semi-final; DT para decisão terceiro lugar; FI para final').toUpperCase()
    algo.categoria = Number(prompt('Informe a categoria do jogo: 1, 2, 3 ou 4'))
    algo.qtdeIngresso = Number(prompt('Informe a quantidade de ingressos'))

    if (algo.tipoJogo == 'DO') {
        switch (algo.etapa) {
            case 'SF':
                switch (algo.categoria) {
                    case 1:
                        algo.valorIngresso = 1320
                        break;
                    case 2:
                        algo.valorIngresso = 880
                        break;
                    case 3:
                        algo.valorIngresso = 550
                        break;
                    case 4:
                        algo.valorIngresso = 220
                        break;
                    default:
                        console.log('Opção inválida para a categoria');
                        break;
                }
                break;
            case 'DT':
                switch (algo.categoria) {
                    case 1:
                        algo.valorIngresso = 660
                        break;
                    case 2:
                        algo.valorIngresso = 440
                        break;
                    case 3:
                        algo.valorIngresso = 330
                        break;
                    case 4:
                        algo.valorIngresso = 170
                        break;
                    default:
                        console.log('Opção inválida para a categoria');
                        break;
                }
                break;
            case 'FI':
                switch (algo.categoria) {
                    case 1:
                        algo.valorIngresso = 1980
                        break;
                    case 2:
                        algo.valorIngresso = 1320
                        break;
                    case 3:
                        algo.valorIngresso = 880
                        break;
                    case 4:
                        algo.valorIngresso = 330
                        break;
                    default:
                        console.log('Opção inválida para a categoria');
                        break;
                }
                break;

            default:
                console.log('Opção para a etapa inválida');
                break;
        }
    } else if (algo.tipoJogo == 'IN') {
        const dolar = 4.1
        switch (algo.etapa) {
            case 'SF':
                switch (algo.categoria) {
                    case 1:
                        algo.valorIngresso = 1320 * dolar
                        break;
                    case 2:
                        algo.valorIngresso = 880 * dolar
                        break;
                    case 3:
                        algo.valorIngresso = 550 * dolar
                        break;
                    case 4:
                        algo.valorIngresso = 220 * dolar
                        break;
                    default:
                        console.log('Opção inválida para a categoria');
                        break;
                }
                break;
            case 'DT':
                switch (algo.categoria) {
                    case 1:
                        algo.valorIngresso = 660 * dolar
                        break;
                    case 2:
                        algo.valorIngresso = 440 * dolar
                        break;
                    case 3:
                        algo.valorIngresso = 330 * dolar
                        break;
                    case 4:
                        algo.valorIngresso = 170 * dolar
                        break;
                    default:
                        console.log('Opção inválida para a categoria');
                        break;
                }
                break;
            case 'FI':
                switch (algo.categoria) {
                    case 1:
                        algo.valorIngresso = 1980 * dolar
                        break;
                    case 2:
                        algo.valorIngresso = 1320 * dolar
                        break;
                    case 3:
                        algo.valorIngresso = 880 * dolar
                        break;
                    case 4:
                        algo.valorIngresso = 300 * dolar
                        break;
                    default:
                        console.log('Opção inválida para a categoria');
                        break;
                }
                break;

            default:
                console.log('Opção para a etapa inválida');
                break;
        }
    } else {
        console.log('Opção para o tipo de jogo inválida');
    }

    console.log('--- Dados da compra ---')
    console.log(`Nome do cliente: ${algo.nomeCLiente}`);
    console.log(`Tipo do jogo: ${algo.tipoJogo}`)
    console.log(`Etapa do jogo: ${algo.etapa}`)
    console.log(`Categoria do jogo: ${algo.categoria}`);
    console.log(`Quandidade de ingresso: ${algo.qtdeIngresso}`)
    console.log(``)
    console.log(`--- Valores ---`)
    console.log(`Valor do ingresso: ${algo.valorIngresso}`);
    console.log(`Valor total: ${algo.valorIngresso*algo.qtdeIngresso}`)

    return algo
}
console.log(puxaBilhete(dadoBilhete))
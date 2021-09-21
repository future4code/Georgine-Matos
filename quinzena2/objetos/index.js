// -- -- -- -- -- -- - INTERPRETAÇÃO-- -- -- -- -- -- -
// 1
// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14 h

// 2
// Objeto cachorro
// Chaves e valores de cachorro e Juba
// Chaves e valores de cachorro, gato e Jubo

// 3



// -- -- -- -- -- -- - ESCRITA DE CÓDIGO-- -- -- -- -- -- -

//1
// const humano = {
//     nome: 'nome',
//     apelidos: ['a','b','c']
// }

// function chamaHumano (humano){
//     console.log(`Eu sou o ${humano.nome}, mas pode me chamar de ${humano.apelidos[0]}, ${humano.apelidos[1]} ou ${humano.apelidos[2]}`);
// }

// chamaHumano(humano)

//b
// const humano = {
//     nome: 'nome',
//     apelidos: ['a', 'b', 'c']
// }

// const complemento = {
//     ...humano,
//     apelidos: ['d', 'e', 'f']
// }

// function chamaHumano(infor) {
//     console.log(complemento);
//     //console.log(`Eu sou o ${humano.nome}, mas pode me chamar de ${humano.apelidos[0]}, ${humano.apelidos[1]} ou ${humano.apelidos[2]}`);
// }

// chamaHumano(complemento)

// 2
// const obj1 = {
//     nome: 'nome1',
//     idade: 50,
//     profissao: 'profissao1'
// }
// const obj2 = {
//     nome2: 'nome2',
//     idade2: 25,
//     profissao2: 'profissao2'
// }
// let objetos = []

// function pessoa (para1, para2){
//     objetos.push(obj1.nome, obj1.idade, obj1.profissao)
//     objetos.push(obj2.nome2, obj2.idade2, obj2.profissao2)

//     return console.log(objetos)
// }

// pessoa(obj1, obj2)

// 3
// let carrinho = []

// const fruta1 ={
//     nome: 'nome1',
//     disponibilidade: true
// }
// const fruta2 ={
//     nome: 'nome2',
//     disponibilidade: true
// }
// const fruta3 ={
//     nome: 'nome3',
//     disponibilidade: true
// }

// function adiciona(algo){
//     carrinho.push(algo)

//     console.log((carrinho));
// }

// adiciona([fruta1, fruta2, fruta3])



// -- -- -- -- -- -- - DESAFIOS -- -- -- -- -- -- -

// //1
// // const alguem = {
// //     nome:'',
// //     idade: 0,
// //     profissao: ''
// // }

// // function chamaPessoa(pessoa) {
// //     pessoa.nome = prompt('Seu nome')
// //     pessoa.idade = Number(prompt('Sua idade'))
// //     pessoa.profissao = prompt('Sua profissão')

// //     console.log(pessoa);
// //     console.log(typeof pessoa);
// // }

// // chamaPessoa(alguem)

// //2
// // const filme1 ={
// //     nome:'nome do filme 1',
// //     anoLancamento: 2000
// // }
// // const filme2 ={
// //     nome:'nome do filme 2',
// //     anoLancamento: 2000
// // }

// // function comparaFilmes(fil1, fil2) {
// //     console.log(`O primeiro filme foi lançado antes do segundo?`, fil1.anoLancamento > fil2.anoLancamento);
// //     console.log(`O primeiro filme foi lançado no mesmo ano do segundo?`, fil1.anoLancamento == fil2.anoLancamento);
// // }

// // comparaFilmes(filme1, filme2)

//3
let carrinho = []
const fruta1 = {
    nome: 'nome1',
    disponibilidade: false
}
const fruta2 = {
    nome: 'nome2',
    disponibilidade: true
}
const fruta3 = {
    nome: 'nome3',
    disponibilidade: true
}

function controleEstoque(algo) {
    let dispInvertido = !algo.disponibilidade
    let novaFruta = {
        ...fruta1,
        disponibilidade: dispInvertido
    }
    carrinho.push(novaFruta)
    return console.log(carrinho)
}

controleEstoque(fruta1)


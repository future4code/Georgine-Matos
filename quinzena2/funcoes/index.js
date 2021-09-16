// -- -- -- -- --INTERPRETAÇÃO-- -- -- -- --
// //1
// a - retornará o produto calculado na função minhaFuncao .10 50
// b - o produto seria calculado e retornado para a chamada da função, porém, não apareceria nada no console

// //2
// a - armazenará uma informação inserida pelo usuario na variavel textodousuario,
//     a função outrafuncao receberá essa informação, converterá para minúscula e verificará se na frase existe a palavra cenoura retornando um booleano

// b - todos serão true

//     -- -- -- -- --ESCRITA DE CÓDICO-- -- -- -- --
// //1
// a - function sobreMim() {
//     console.log('Eu sou o Danilo, tenho 34 anos...');
// }
// sobreMim()

// b - function pessoa(nome, idade, cidade, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
// }
// pessoa('maria', 50, 'mauá', 'secretária')

// //2
// a - function soma(a, b) {
//     return a + b
// }
// console.log(soma(3, 5));

// b - function compara(x, y) {
//     return (x >= y)
// }
// console.log(compara(3, 6));

// c - function par(x) {
//     return x % 2 === 0
// }
// console.log(par(8));

// d - function tamanhoMensagem(mensagem) {
//     return console.log(mensagem.length, mensagem.toUpperCase())
// }
// tamanhoMensagem('sou aluno de graduação')

//3
// let a = Number(prompt('informe o numero 1'))
// let b = Number(prompt('informe o numero 2'))

// function soma(a, b) {
//     return a + b
// }

// function subtracao(a, b) {
//     return a - b
// }

// function divisao(a, b) {
//     return a / b
// }

// function multiplicacao(a, b) {
//     return a * b
// }

// console.log(`Os números foram ${a} e ${b}`)
// console.log(`O valor da soma é ${soma(a,b)}`)
// console.log(`O valor da subração é ${subtracao(a,b)}`)
// console.log(`O valor da divisão é ${divisao(a,b)}`)
// console.log(`O valor da multiplicação é ${multiplicacao(a,b)}`)


//     -- -- -- -- --DESAFIOS-- -- -- -- --
//1
// a - const aFunction1 = (param) =>{
//     console.log(`O parametro informado foi ${param}`);
// }
// aFunction("Estude!")

// b - const aFunction1 = (param) =>{
//     console.log(`O parametro informado foi ${param}`);
// }

// const aFunction2 = (para1, para2)=>{
//     let soma = para1 + para2
//     (aFunction1(soma))
// }
// aFunction2(2,3)

// //2
// function teorema(a, b) {
//     let hip = Math.sqrt((a*a)+(b*b))
//     return hip
// }
// console.log(teorema(2,5));

// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("Informe a altura"))
  let largura = Number(prompt("Informe a largura"))

  console.log(altura * largura);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Informe o ano atual"));
  let anoNasc = Number(prompt("Informe o ano do seu nascimento"))

  console.log(anoAtual - anoNasc);
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Informe o ano atual"));
  let altura = Number(prompt("Informe o ano do seu nascimento"))

  console.log(peso / (altura * altura));

}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Informe seu nome")
  let idade = Number(prompt("Informe seu nome"))
  let email = prompt("Informe seu email")

  console.log("Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + '.');
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  let primeiraCor = prompt("Primeira cor")
  let segundaCor = prompt("Segunda cor")
  let terceiraCor = prompt("Terceira cor")

  let cores = [];

  cores.push(primeiraCor, segundaCor, terceiraCor)

  console.log(cores);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let frase = prompt('Informe sua frase')

  console.log(frase.toUpperCase());
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let custo = Number(prompt('Informe o custo'))
  let ingresso = Number(prompt('Informe o valor do ingresso'))

  console.log(custo / ingresso);
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let primeira = prompt('Primeira frase')
  let segunda = prompt('Segunda frase')

  let tamanhoPrimeira = primeira.length
  let tamanhoSegunda = segunda.length

  console.log(tamanhoPrimeira == tamanhoSegunda);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let primeira = prompt('Primeira frase').toUpperCase()
  let segunda = prompt('Segunda frase').toUpperCase()


  console.log(primeira === segunda);
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual = Number(prompt('Infome o ano atual'))
  let anoNasc = Number(prompt('Infome o ano de nascimento'))
  let anoCarteira = Number(prompt('Infome o ano de emissão da carteira'))
  let idade = anoAtual - anoNasc
  let tempoCarteira = anoAtual - anoCarteira

  console.log((idade <= 20 && tempoCarteira >= 5) || ((idade >= 20 && idade <= 50) && tempoCarteira >= 10) || (idade > 50 && tempoCarteira >= 15));
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let ano = Number(prompt('Informe um ano'))
  let cond1 = (ano % 400) === 0
  let cond2 = ((ano % 4) === 0) && ((ano % 100) != 0)

  console.log(cond1 || cond2);
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idade = prompt('Maior de idade?').toUpperCase()
  let medio = prompt('Médio completo?').toUpperCase()
  let disponibilidade = prompt('Disponibilidade exclusiva').toUpperCase()

  console.log((idade === 'SIM') && (medio === 'SIM') && (disponibilidade === 'SIM'));
  }
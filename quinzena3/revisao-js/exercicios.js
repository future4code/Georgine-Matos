// EXERCÍCIO 01
function inverteArray(array) {
  var ArrayInvertido = array.map(function (item, indice, arrayM) {
    return arrayM[arrayM.length - indice - 1];
  });
  return ArrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let arrayPar = []
  let elevado
  for (const elemento of array) {
    if (elemento % 2 == 0) {
      elevado = elemento * elemento
      arrayPar.push(elevado)
    }
  }
  return arrayPar
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPar = []
  for (const elemento of array) {
    if (elemento % 2 == 0) {
      arrayPar.push(elemento)
    }
  }
  return arrayPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maior = 0
  for (const elemento of array) {
    if (elemento > maior) {
      maior = elemento
    }
  }
  return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  let novoArray = []
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3
  novoArray.push(booleano1 && booleano2 && !booleano4)
  novoArray.push((booleano1 && booleano2) || !booleano3)
  novoArray.push((booleano2 || booleano3) && (booleano4 || booleano1))
  novoArray.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
  novoArray.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))

  return novoArray
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let pares = []
  for (let i = 0; i <= n * 2; i++) {
    if (pares.length < n) {
      if (i % 2 == 0) {
        pares.push(i)
      }
    }
  }
  return pares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a == b && b == c) {
    return 'Equilátero'
  } else if (a != b && b != c && c != a) {
    return 'Escaleno'
  } else {
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const elemento = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: '',
    diferenca: 0
  }
  if (num1 > num2) {
    elemento.maiorNumero = num1
    elemento.diferenca = num1 - num2
    if (num1 % num2 == 0) {
      elemento.maiorDivisivelPorMenor = true
    } else {
      elemento.maiorDivisivelPorMenor = false
    }
  } else {
    elemento.maiorNumero = num2
    elemento.diferenca = num2 - num1
    if (num2 % num1 == 0) {
      elemento.maiorDivisivelPorMenor = true
    } else {
      elemento.maiorDivisivelPorMenor = false
    }
  }
  return elemento
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let novoArray = []
  let maior
  let menor
  let segMenor
  let segMaior
  let indice
  if (array.length == 2) {
    novoArray = array
  }
  if (array.length != 2) {
    //verifica maior valor e o retira do array     
    console.log(`Array original ${array}`)
    maior = Math.max(...array)
    indice = array.indexOf(maior)
    array.splice(indice, 1)
    console.log(`Retirando o ${maior}, o array atualizado ficou ${array}`);
    console.log('------------------------------');
    console.log('');
    //verifica o 2 maior valor e o retira do array colocando-o em um novo array    
    segMaior = Math.max(...array)
    novoArray.push(segMaior)
    indice = array.indexOf(segMaior)
    array.splice(indice, 1)
    console.log(`Retirando o ${segMaior}, o array atualizado ficou ${array}`);
    console.log('------------------------------');
    console.log('');
    //verifica menor valor e o retira do array     
    console.log(`Array original ${array}`)
    menor = Math.min(...array)
    indice = array.indexOf(menor)
    array.splice(indice, 1)
    console.log(`Retirando o ${menor}, o array atualizado ficou ${array}`);
    console.log('------------------------------');
    console.log('');
    //verifica o 2 menor valor e o retira do array colocando-o em um novo array    
    segMenor = Math.min(...array)
    novoArray.push(segMenor)
    indice = array.indexOf(segMenor)
    array.splice(indice, 1)
    console.log(`Retirando o ${segMenor}, o array atualizado ficou ${array}`);
    console.log('------------------------------');
    console.log('');
  }
  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < (array.length - i - 1); j++) {
      if (array[j] > array[j + 1]) {
        var tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: '',
    ano: 0,
    diretor: '',
    atores: []
  }

  filme.nome = 'O Diabo Veste Prada'
  filme.ano = 2006
  filme.diretor = 'David Frankel'
  filme.atores.push('Meryl Streep')
  filme.atores.push('Anne Hathaway')
  filme.atores.push('Emily Blunt')
  filme.atores.push('Stanley Tucci')

  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: '',
    ano: 0,
    diretor: '',
    atores: []
  }

  filme.nome = 'O Diabo Veste Prada'
  filme.ano = 2006
  filme.diretor = 'David Frankel'
  filme.atores.push('Meryl Streep')
  filme.atores.push('Anne Hathaway')
  filme.atores.push('Emily Blunt')
  filme.atores.push('Stanley Tucci')

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const novaPessoa = {
    nome: "Astrodev",
    idade: pessoa.idade,
    email: pessoa.email,
    endereco: pessoa.endereco
  }
  novaPessoa.nome = 'ANÔNIMO'
  return novaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  [{
    nome: "Pedro",
    idade: 20
  }, {
    nome: "João",
    idade: 10
  }, {
    nome: "Paula",
    idade: 12
  }, {
    nome: "Artur",
    idade: 89
  }]
  const maiores = arrayDePessoas.filter((item, index, array) => {
    return item.idade >= 18
  })
  return maiores
}
// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  [{
    nome: "Pedro",
    idade: 20
  }, {
    nome: "João",
    idade: 10
  }, {
    nome: "Paula",
    idade: 12
  }, {
    nome: "Artur",
    idade: 89
  }]
  const menores = arrayDePessoas.filter((item, index, array) => {
    return item.idade < 18
  })
  return menores
}
// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const novoArray = array.map((item, index, array) => {
    return item * 2
  })
  return novoArray
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const novoArray = array.map((item, index, array) => {
    return (item * 2).toString()
  })
  return novoArray
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((item) => {
    if (item % 2 == 0) {
      return (`${item} é par`)
    } else {
      return (`${item} é ímpar`)
    }
  })
  return novoArray
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

  const idade = pessoas.filter((item, index, array) => {
    return item.idade > 14 && item.idade < 60
  })

  const altura = idade.filter((item, index, array) => {
    return item.altura > 1.5
  })

  return altura
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

  const arrayFinal = pessoas.filter((item) => {
    return (item.altura < 1.5) || ((item.idade <= 14) || (item.idade > 60))
  })

  return arrayFinal
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  for (let contador = 1; contador < consultasNome.length; contador++) {
    for (let i = 0; i < consultasNome.length - 1; i++) {
      if (consultasNome[i].nome > consultasNome[i + 1].nome) {
        let aux = consultasNome[i]
        consultasNome[i] = consultasNome[i + 1]
        consultasNome[i + 1] = aux
      }
    }
  }

  return consultasNome
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  let dataEUA
  let timesStamp
  let dataBRA

  //CONVERTENDO O FORMADO DE ENTRADA DA DATA PARA YYYY/MM/DD
  for (let i = 0; i < consultasData.length; i++) {
    dataEUA = consultasData[i].dataDaConsulta.split('/').reverse().join(",")
    consultasData[i].dataDaConsulta = dataEUA
    timesStamp = new Date(dataEUA).getTime() //CONVERTE A DATA PARA MILISEGUNDO
    consultasData[i].dataDaConsulta = timesStamp //SETANDO O MILISEGUNDO NA SUA RESPECTIVA POSIÇÃO

    //ORDENAÇÃO DE DATAS
    for (let contador = 0; contador < consultasData.length; contador++) {
      for (let i = 0; i < consultasData.length - 1; i++) {
        if (consultasData[i].dataDaConsulta > consultasData[i + 1].dataDaConsulta) {
          let aux = consultasData[i]
          consultasData[i] = consultasData[i + 1]
          consultasData[i + 1] = aux
        }
      }
    }
  }

  //CONVERSÃO MILISEGUNDOS PARA DATA/BR
  for (let i = 0; i < consultasData.length; i++) {
    dataEUA = new Date(consultasData[i].dataDaConsulta) //RECEBE O MILISEGUNDO COMO PARAMENTRO
    //RECEBE DD/MM/YYYY
    dataBRA = ("0" + dataEUA.getDate()).slice(-2) + '/' + ("0" + (dataEUA.getMonth() + 1)).slice(-2) + '/' + dataEUA.getFullYear()
    consultasData[i].dataDaConsulta = dataBRA
  }
  return consultasData
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  let soma = 0
  const novoSaldo = contas.map((item) => {
    for (let j = 0; j < item.compras.length; j++) {
      soma += item.compras[j]
    }
    item.saldoTotal -= soma
  })
  return contas
}
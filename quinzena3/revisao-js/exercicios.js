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
    maiorDivisivelPorMenor:'',
    diferenca: 0
  }
  if (num1 > num2) {
    elemento.maiorNumero = num1
    elemento.diferenca = num1 - num2
    if (num1 % num2 == 0) {
      elemento.maiorDivisivelPorMenor = true
    }else{
      elemento.maiorDivisivelPorMenor = false
    }
  } else {
    elemento.maiorNumero = num2
    elemento.diferenca = num2 - num1
    if (num2 % num1 == 0) {
      elemento.maiorDivisivelPorMenor = true
    }else{
      elemento.maiorDivisivelPorMenor = false
    }
  }
  return elemento
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
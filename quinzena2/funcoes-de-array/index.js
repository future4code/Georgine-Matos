//2
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//a
//  const arrayNomes = pets.map((item, index, array)=>{   
//      return item.nome == "Salsicha"
//  })
//  console.log(arrayNomes)

//b
//  const arraySalsicha = pets.filter((item, index, array)=>{   
//      return item.raca == "Salsicha"
//  })
//  console.log(arraySalsicha)

//c
//  const poodles = pets.filter((item, index, array)=>{   
//      return item.raca == "Poodle"
//  })
 
//  const arrayPoodle = poodles.map((item, idex, array) =>{
//      return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
//  })
//  console.log(arrayPoodle)

//3
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  const arrayNome = produtos.map((item, index, array)=>{
//      return item.nome
//  })

//  console.log(arrayNome)

//b
//  const arrayNome = produtos.map((item, index, array)=>{
//      const nome = item.nome
//      const novoPreco = (item.preco*0.95).toFixed(2)
//      return {nome, novoPreco}
//  })

//  console.log(arrayNome)

//c
// const arrayBebidas = produtos.filter((item, index, array)=>{
//     return item.categoria == 'Bebidas'
// })

// console.log(arrayBebidas)

//d
// const retornaYpes = produtos.filter(ypes => ypes.nome.includes("Ypê"))
// console.log(retornaYpes)

//e
const filtro = produtos.filter((item, index, array)=>{
    let novo = item.nome.includes("Ypê")
    return novo
})

const novoArray = filtro.map((item, index, array)=>{
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(novoArray)
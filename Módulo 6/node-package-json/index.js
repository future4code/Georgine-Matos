//1 -
// a - process.argv

//b -
// const nome = (process.argv[2])
// const idade = Number(process[3])
// function nome (nome, idade){
//     return `Olá, ${nome}! Você tem ${idade} anos.`
// }

// 2 -

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
const operacao = process.argv[4];

const calcula = (x, y) => {
  switch (operacao) {
    case "soma":
      return x + y;
      break;
    case "subt":
      return x - y;
      break;
    case "mult":
      return x * y;
      break;
    case "div":
      return x / y;
      break;
  }
};

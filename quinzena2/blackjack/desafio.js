let arrayCartas = []
let somaValores = 0;
let cartasUsuario, cartasPC;

for (let i = 0; i < 2; i++) {
   if (i == 0) {
      console.log(`---------- CARTAS USUÁRIO ----------`)
      sorteiaCarta()
      cartasUsuario = somaValores
      somaValores = 0
   } else {
      console.log(`---------- CARTAS PC ----------`)
      sorteiaCarta()
      cartasPC = somaValores
   }
}

function sorteiaCarta() {
   for (let i = 1; i <= 2; i++) {
      const carta = comprarCarta();
      console.log(`${i} carta tem valor: ${carta.valor, carta.texto}`);
      arrayCartas.push(carta.valor)
      somaValores += carta.valor
   };
   verificaCartas()
}

function verificaCartas() {
   if (arrayCartas[0] == 11 || arrayCartas[1] == 11) {
      console.log(`Ases nas duas cartas. Sorteando novas cartas`);
      arrayCartas = []
      somaValores = 0
      sorteiaCarta()
   }
   if (arrayCartas.length != 0) {
      console.log(arrayCartas);
      arrayCartas = []
      console.log(`A soma dos valores das cartas é: ${somaValores}`);
      console.log(``)
   }
}
let somaValores = 0
let cartasUsuario, cartasPC;
let arrayCartas = []

//funçao sorteia 2 cartas para o jogador e soma seus valores
function sorteiaCarta() {
   for (let i = 1; i <= 2; i++) {
      const carta = comprarCarta();
      console.log(`${i} carta tem valor: ${carta.valor, carta.texto}`);
      somaValores += carta.valor
   };
   return somaValores
}

//laço de identifica o jogador e posiciona as cartas nas suas "maos" 
for (let i = 0; i < 2; i++) {
   if (i == 0) {
      console.log(`---------- CARTAS USUÁRIO ----------`)
      chamaConsole()
      cartasUsuario = somaValores
      somaValores = 0
   } else {
      console.log(`---------- CARTAS PC ----------`)
      chamaConsole()
      cartasPC = somaValores
   }
}

//função apresenta o resultado da soma das cartas
function chamaConsole() {
   sorteiaCarta()
   console.log(`A soma dos valores das cartas é: ${somaValores}`);
   console.log(``)
}

//checa quem ganhou a partida
function verificaGanhador() {
   if (cartasUsuario > cartasPC) {
      console.log(`USUÁRIO ganhou com ${cartasUsuario} pontos`);
   } else if (cartasUsuario < cartasPC) {
      console.log(`PC ganhou com ${cartasPC} pontos`);
   } else {
      console.log(`a partida saiu EMPATE`);
   }
}

verificaGanhador()

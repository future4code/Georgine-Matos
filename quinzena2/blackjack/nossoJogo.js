let somaValores = 0
let cartasUsuario, cartasPC;
let arrayCartasUsu = []
let arrayCartasPC = []
let novoArrayCartasPC = []

let resposta = confirm(`Deseja iniciar uma nova partida?`)

if (resposta == true) {
   while (resposta == true) {
      arrayCartasUsu = []
      arrayCartasPC = []
      cartasUsuario = 0
      cartasPC = 0
      somaValores = 0
      //funçao sorteia 2 cartas para o jogador e soma seus valores
      function sorteiaCartaUsu() {
         for (let i = 1; i <= 2; i++) {
            const carta = comprarCarta();
            console.log(`${i} carta tem valor: ${carta.valor, carta.texto}`);
            arrayCartasUsu.push(carta)
            somaValores += carta.valor
         };
         checaAses()
         return arrayCartasUsu
      }

      function sorteiaCartaPC() {
         for (let i = 1; i <= 2; i++) {
            const carta = comprarCarta();
            console.log(`${i} carta tem valor: ${carta.valor, carta.texto}`);
            arrayCartasPC.push(carta)
            somaValores += carta.valor
         };
         console.log(arrayCartasPC)     
         checaAsesPC()    
         //console.log(`Array pc modificado ${novoArrayCartasPC}`)
         return arrayCartasPC
      }

      //laço de identifica o jogador e posiciona as cartas nas suas "maos" 
      for (let i = 0; i < 2; i++) {
         if (i == 0) {
            console.log(`---------- CARTAS USUÁRIO ----------`)
            chamaConsoleUsu()
            cartasUsuario = somaValores
            somaValores = 0
         } else {
            console.log(`---------- CARTAS PC ----------`)
            chamaConsolePC()
            cartasPC = somaValores
            somaValores = 0
         }
      }

      //função apresenta o resultado da soma das cartas
      function chamaConsoleUsu() {
         sorteiaCartaUsu()
         console.log(``)
      }

      function chamaConsolePC() {
         sorteiaCartaPC()
         console.log(``)
      }
      verificaGanhador()
      resposta = confirm(`Deseja iniciar uma nova partida?`)
   }
   console.log(`Fim da partida.`);
} else {
   console.log(`Fim da partida.`);
}
//chaca as cartas do usuario
function checaAses() {
   if (arrayCartasUsu[0].valor == 11 && arrayCartasUsu[1].valor == 11) {
      console.log(`Cartas não permitidas. Realizando novo sorteio`);
      console.log(``);
      arrayCartasUsu = []
      cartasUsuario = 0
      somaValores = 0
      sorteiaCartaUsu()
   } else {
      console.log(`A soma dos valores das cartas é: ${somaValores}`);
   }
}
//checas as cartas do pc
function checaAsesPC() {
   if (arrayCartasPC[0].valor == 11 && arrayCartasPC[1].valor == 11) {
      console.log(`Cartas não permitidas. Realizando novo sorteio`);
      console.log(``);
      arrayCartasPC = []
      cartasPC = 0
      somaValores = 0
      sorteiaCartaPC()
   } else {
      //escondeUltimaCarta(arrayCartasPC)
      console.log(`A soma dos valores das cartas é: ${somaValores}`);
   }
}

//checa quem ganhou a partida
function verificaGanhador() {
   if (cartasPC == cartasUsuario) {
      console.log(`Jogo resultou em EMPATE`);
   } else if (cartasUsuario <= 21 && cartasUsuario > cartasPC) {
      console.log(`USUÁRIO ganhou com ${cartasUsuario} ponto`);
   } else {
      console.log(`PC ganhou com ${cartasPC} pontos`);
   }
}

function escondeUltimaCarta(algo) {
   let ultimo = algo.pop()
   return novoArrayCartasPC
}
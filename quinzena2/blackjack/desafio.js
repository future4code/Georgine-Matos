let somaValores = 0
let cartasUsuario, cartasPC;
let arrayCartasUsu = []
let arrayCartasPC = []

let resposta = confirm(`Deseja iniciar uma nova partida?`)

if (resposta == true) {
   while (resposta == true) {

      //sorteia as cartas do usuario
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

      //sorteia as cartas do PC
      function sorteiaCartaPC() {
         for (let i = 1; i <= 2; i++) {
            const carta = comprarCarta();
            //console.log(`${i} carta tem valor: ${carta.valor, carta.texto}`);
            arrayCartasPC.push(carta)
            somaValores += carta.valor
         };
         checaAsesPC()
         return arrayCartasPC
      }

      //laço que chama, por 2 vezes, a funçao sorteiaCarta
      for (let i = 0; i < 2; i++) {
         if (i == 0) {
            console.log(`---------- CARTAS USUÁRIO ----------`)
            sorteiaCartaUsu()
            cartasUsuario = somaValores
            somaValores = 0
         } else {
            console.log(``)
            console.log(`---------- CARTAS PC ----------`)
            sorteiaCartaPC()
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
   }
   verificaGanhador()
   console.log(`Fim da partida.`);
} else {
   console.log(`A soma dos valores das cartas é: ${somaValores}`);
   verificaGanhador()
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
   }
   resposta = confirm(`USUÁRIO deseja uma nova carta?`)

   while (resposta == true) {
      const carta = comprarCarta();
      console.log(`${arrayCartasUsu.length+1} carta tem valor: ${carta.valor, carta.texto}`);
      arrayCartasUsu.push(carta)
      somaValores += carta.valor
      resposta = confirm(`Carta sorteada. O USUÁRIO deseja uma nova carta?`)
   }
   console.log(`A soma dos valores das cartas do jogador é: ${somaValores}`);
   return somaValores
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
   }
   novoArrayCartasPC(arrayCartasPC)
   resposta = confirm(`PC deseja uma nova carta?`)

   while (resposta == true) {
      const carta = comprarCarta();
      arrayCartasPC.push(carta)
      somaValores += carta.valor
      console.log('')
      novoArrayCartasPC(arrayCartasPC)
      console.log('--------------------------------')
      resposta = confirm(`Carta sorteada. O PC deseja uma nova carta?`)
   }
   console.log(`A soma dos valores das cartas do PC é: ${somaValores}`);
   return somaValores
}

//checa quem ganhou a partida
function verificaGanhador() {
   if (cartasPC == cartasUsuario) {
      console.log(`Jogo resultou em EMPATE`);
   } else if (cartasUsuario <= 21 && cartasPC <= 21) {
      if (cartasUsuario > cartasPC) {
         console.log(`USUÁRIO ganhou com ${cartasUsuario} pontos`);
      } else {
         console.log(`PC ganhou com ${cartasPC} pontos`);
      }
   } else if (cartasPC > 21) {
      console.log(`USUÁRIO ganhou com ${cartasUsuario} pontos`);
   } else if (cartasUsuario > 21) {
      console.log(`PC ganhou com ${cartasPC} pontos`);
   }
}

//esconde a ultima carta do arrayPC
function novoArrayCartasPC(algo) {
   if (algo.length >= 2) {
      for (let i = 0; i < algo.length - 1; i++) {
         console.log(`${i+1} carta a mostrar tem valor: ${algo[i].valor, algo[i].texto}`);
      }
   }
}
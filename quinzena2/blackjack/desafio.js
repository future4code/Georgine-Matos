let arrayCartasUsu = []
let arrayCartasPC = []
let somaValoresUsu = 0;
let somaValoresPC = 0;
let cartasUsuario, cartasPC;

function iniciaPartida() {

   let resposta = confirm(`Deseja iniciar um novo jogo?`)

   while (resposta == true) {
      for (let i = 0; i < 2; i++) {
         if (i == 0) {
            console.log(`---------- CARTAS USUÁRIO ----------`)
            sorteiaCartaUsuario()
            cartasUsuario = somaValoresUsu
            somaValoresUsu = 0
         } else {
            console.log(`---------- CARTAS PC ----------`)
            sorteiaCartaPC()
            cartasPC = somaValoresPC
         }
      }

      function sorteiaCartaUsuario() {
         for (let i = 1; i <= 2; i++) {
            const carta = comprarCarta();
            console.log(`O ${i} valor é: ${carta.valor, carta.texto}`);
            arrayCartasUsu.push(carta.valor)
            somaValoresUsu += carta.valor
         }
         console.log(arrayCartasUsu);
         console.log(`Soma dos pontos do jogador: ${somaValoresUsu}`);
         return somaValoresUsu
      }

      function sorteiaCartaPC() {
         for (let i = 1; i <= 2; i++) {
            const carta = comprarCarta();
            //mostraCarta(carta)
            arrayCartasPC.push(carta.valor)
            somaValoresPC += carta.valor
         }
         mostraCarta(arrayCartasPC)
         puxaCarta()
         return somaValoresPC
      }

      function mostraCarta(algo) {
         for (let i = 0; i < arrayCartasPC.length; i++) {
            if (i <= arrayCartasPC.length) {
               console.log(`O ${i} valor é: ${arrayCartasPC[i]}`);
            }
         }
         console.log(arrayCartasPC);
      }

      function puxaCarta() {
         if (somaValoresPC < 21) {
            let decisao = confirm('Deseja pegar mais uma carta?')
            if (decisao == true) {
               const carta = comprarCarta();
               //mostraCarta(carta)
               arrayCartasPC.push(carta.valor)
               somaValoresPC += carta.valor
            }
         }
         finalizaJogo()
         return somaValoresPC
      }

      function finalizaJogo() {
         if (somaValoresUsu > somaValoresPC) {
            console.log('PC ganhou');
         } else if (somaValoresUsu < somaValoresPC) {
            console.log('Jogador ganhou');
         } else {
            console.log('EMPATE');
         }
         console.log(`Soma dos pontos do PC: ${somaValoresPC}`);
      }
   }
   console.log(`Fim da partida`);
}

iniciaPartida()
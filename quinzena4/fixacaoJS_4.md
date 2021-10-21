function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let cont = 0
   for (const elemento of arrayDeNumeros) {
       if (elemento == numeroEscolhido) {
           cont += 1;
       } 
   }

   if (cont > 0) {
       return `O número ${numeroEscolhido} aparece ${cont}x`
   } else {
       return `Número não encontrado`        
   } 
}
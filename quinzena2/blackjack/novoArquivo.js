let maoJogador = []
let maoPC = []
let somaCartasUsu = 0
let somaCartasPC = 0
let resposta = false


for (let i = 1; i <= 2; i++) {
    if (i == 1) {
        console.log(`---------- CARTAS USUÁRIO ----------`)
        sorteiaCartaUsuario()
    } else {
        console.log(`---------- CARTAS PC ----------`)
        sorteiaCartaPC()
    }

}

function sorteiaCartaUsuario() {
    for (let i = 1; i <= 2; i++) {
        const carta = comprarCarta();
        console.log(`O ${i} valor é: ${carta.valor, carta.texto}`);
        maoJogador.push(carta.valor)
        somaCartasUsu += carta.valor
    }
    resposta = confirm("Deseja um nova carta?")
    while (somaCartasUsu <= 21 && resposta == true) {
        const carta = comprarCarta();
        maoJogador.push(carta.valor)
        console.log(`O ${maoJogador.length} valor é: ${carta.valor, carta.texto}`);
        somaCartasUsu += carta.valor
        console.log(maoJogador);
        resposta = confirm("Deseja um nova carta?")
    }
    console.log(`Soma dos pontos do jogador: ${somaCartasUsu}`);
    return somaCartasUsu
}

function sorteiaCartaPC() {
    for (let i = 1; i <= 2; i++) {
        const carta = comprarCarta();
        console.log(`O ${i} valor é: ${carta.valor, carta.texto}`);
        maoPC.push(carta.valor)
        somaCartasPC += carta.valor
    }
    resposta = confirm("Deseja um nova carta?")
    while (somaCartasPC <= 21) {
        if (resposta == true) {
            const carta = comprarCarta();
            maoPC.push(carta.valor)
            console.log(`O ${maoPC.length} valor é: ${carta.valor, carta.texto}`);
            somaCartasPC += carta.valor
            console.log(escondeCarta)
        }
        resposta = confirm("Deseja um nova carta?")
    }
    console.log(maoJogador);
    console.log(`Soma dos pontos do jogador: ${somaCartasUsu}`);
    return somaCartasPC
}

const escondeCarta = maoPC.map((item, index, array) => {
    let penultimoElemento = item.length - 1
    return penultimoElemento
})

//     // check for player victory
//     if (handTotal(jsbApp.playerHand) === 21)
//     {
//         jsbApp.wins += 1;
//         jsbApp.games += 1;        
//         jsbApp.gameStatus = 1; // to cause the dealer's hand to be drawn face up
//         drawHands();
//         jsbApp.textUpdates.innerHTML = "You won! You got 21 on your initial hand!";
//         track();
//         jsbApp.gameStatus = 2; // game is won
//         return;
//     }

//     jsbApp.dealerHand.push(jsbApp.deck.pop());
//     jsbApp.dealerHand.push(jsbApp.deck.pop());

//     // check for dealer victory    
//     if (handTotal(jsbApp.dealerHand) === 21)
//     {
//         jsbApp.games += 1;
//         jsbApp.losses += 1;
//         jsbApp.gameStatus = 1; // to cause the dealer's hand to be drawn face up
//         drawHands();
//         jsbApp.textUpdates.innerHTML = "You lost! The dealer had 21 on their initial hand.";
//         track();
//         jsbApp.gameStatus = 2; // game is won
//         return;
//     }

//     // draw the hands if neither won on the initial deal
//     drawHands();
//     advise();
//     jsbApp.buttonBox.classList.remove("hidden"); // show hit/stay buttons
//     jsbApp.textUpdates.innerHTML = "The initial hands are dealt!";

// // Update the screen with the contents of the player and dealer hands
// var drawHands = function () {    
//     var htmlswap = "";
//     var ptotal = handTotal(jsbApp.playerHand);
//     var dtotal = handTotal(jsbApp.dealerHand);
//     htmlswap += "<ul>";
//     for (var i = 0; i < jsbApp.playerHand.length; i++)
//     {
//         htmlswap += "<li>" + jsbApp.playerHand[i].name + "</li>";
//     }
//     htmlswap += "</ul>"
//     jsbApp.pcards.innerHTML = htmlswap;
//     jsbApp.phandtext.innerHTML = "Your Hand (" + ptotal + ")"; // update player hand total
//     if (jsbApp.dealerHand.length == 0)
//     {
//         return;
//     }

//     // clear the html string, re-do for the dealer, depending on if stay has been pressed or not
//     htmlswap = "";
//     if (jsbApp.gameStatus === 0)
//     {
//         htmlswap += "<ul><li>[Hidden Card]</li>";
//         jsbApp.dhandtext.innerHTML = "Dealer's Hand (" + jsbApp.dealerHand[1].value + " + hidden card)"; // hide value while a card is face down
//     }
//     else
//     {
//         jsbApp.dhandtext.innerHTML = "Dealer's Hand (" + dtotal + ")"; // update dealer hand total
//     }

//     for (var i = 0; i < jsbApp.dealerHand.length; i++) {
//         // if the dealer hasn't had any new cards, don't display their face-down card
//         // skip their first card, which will be displayed as hidden card
//         // per the above if statement
//         if (jsbApp.gameStatus === 0)
//         {
//             i += 1;
//         }
//         htmlswap += "<li>" + jsbApp.dealerHand[i].name + "</li>";
//     }
//     htmlswap += "</ul>"
//     jsbApp.dcards.innerHTML = htmlswap;
//     //console.log("Player has " + jsbApp.playerHand.length + " cards, dealer has " + jsbApp.dealerHand.length + " cards, and deck has " + jsbApp.deck.length + " cards.");

// };

// // return the total value of the hand 
// var handTotal = function (hand) {
//     //console.log("Checking hand value");
//     var total = 0;
//     var aceFlag = 0; // track the number of aces in the hand
//     for (var i = 0; i < hand.length; i++) {
//         //console.log("Card: " + hand[i].name);
//         total += hand[i].value;
//         if (hand[i].value == 1)
//         {
//             aceFlag += 1;
//         }
//     }
//     // For each ace in the hand, add 10 if doing so won't cause a bust
//     // To show best-possible hand value
//     for (var j = 0; j < aceFlag; j++)
//     {
//         if (total + 10 <= 21)
//         {
//             total +=10;
//         }
//     }
//     // console.log("Total: " + total);
//     return total;
// }

// // Shuffle the new deck
// var shuffle = function (deck) {
//     // console.log("Begin shuffle...");
//     var shuffledDeck = [];
//     var deckL = deck.length;
//     for (var a = 0; a < deckL; a++)
//     {
//         var randomCard = getRandomInt(0, (deck.length));        
//         shuffledDeck.push(deck[randomCard]);
//         deck.splice(randomCard, 1);        
//     }
//     return shuffledDeck;
// }

// var getRandomInt = function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     // console.log("Min: " + min + " Max: " + max);
//     return Math.floor(Math.random() * (max - min)) + min;
//     // code based on sample from MDN
// }

// // print the deck to the console 
// // only for for debugging purposes
// var deckPrinter = function (deck) {
//     for (var i = 0; i < deck.length; i++)
//     {
//         console.log(deck[i].name);
//     }
//     return
// }

// // Stay button pressed:
// jsbApp.stayButton.addEventListener("click", function stayLoop() {
//     //console.log("(1)Inside stayLoop now");
//     // disable ig game already won
//     if (jsbApp.gameStatus === 2)
//     {
//         console.log("Stay clicked when game was over or already clicked.");
//         return;
//     }
//     else if (jsbApp.gameStatus === 0) // i.e. stay was just pressed
//     {

//         jsbApp.buttonBox.classList.add("hidden"); // take away the hit and stay buttons
//         var handVal = handTotal(jsbApp.dealerHand);
//         jsbApp.gameStatus = 1; // enter the 'stay' loop
//         advise(); // clear advise
//         jsbApp.textUpdates.innerHTML = "The dealer reveals their hidden card";
//         drawHands();
//         setTimeout(stayLoop, 750); // return to the stay loop
//     }
//     else if (jsbApp.gameStatus === 1) {    

//     // If dealer has less than 17, hit
//     var handVal = handTotal(jsbApp.dealerHand);
//     if (handVal > 16 && handVal <= 21) // dealer stays and game resolves
//     {
//         drawHands();
//         //console.log("----------Dealer stays, checking hands");
//         var playerVal = handTotal(jsbApp.playerHand);
//         if (playerVal > handVal)
//         {            
//             victory();
//             return;
//         }
//         else if (playerVal < handVal)
//         {            
//             bust();
//             return;
//         }
//         else
//         {            
//             tie();
//             return;
//         }
//     }
//     if (handVal > 21)
//     {
//         victory();
//         return;
//     }
//     else // hit
//     {
//         jsbApp.textUpdates.innerHTML = "Dealer hits!";
//         jsbApp.dealerHand.push(jsbApp.deck.pop());
//         drawHands();
//         setTimeout(stayLoop, 750);
//         return;
//     }   
//     }
// });

// // check the player hand for an ace
// var softCheck = function (hand) {    
//     var total = 0;
//     var aceFlag = 0; // track the number of aces in the hand
//     for (var i = 0; i < hand.length; i++) {
//         //console.log("Card: " + hand[i].name);
//         total += hand[i].value;
//         if (hand[i].value == 1) {
//             aceFlag += 1;
//         }
//     }
//     // For each ace in the hand, add 10 if doing so won't cause a bust
//     // To show best-possible hand value
//     for (var j = 0; j < aceFlag; j++) {
//         if (total + 10 <= 21) {
//             return true; // the hand is soft, i.e. it can be multiple values because of aces
//         }
//     }    
//     return false; // the hand is hard, i.e. it has only one possible value
// }

// var advise = function () {
//     // no advise if player has no choices
//     if (jsbApp.gameStatus > 0)
//     {
//         jsbApp.choice.innerHTML = "";
//         return;
//     } 
//     var playerTotal = handTotal(jsbApp.playerHand);
//     var soft = softCheck(jsbApp.playerHand);
//     console.log("Soft: " + soft);
//     var dealerUp = jsbApp.dealerHand[1].value;
//     // count dealer's ace as 11 to simplify logic
//     if (dealerUp === 1)
//     {
//         dealerUp = 11;
//     }

//     // provide advice based on HIGHLY simplified blackjack basic strategy
//     if (playerTotal <= 11 && !soft)
//     {
//         jsbApp.choice.innerHTML = "[Hit!]";
//     }
//     else if (playerTotal >= 12 && playerTotal <= 16 && dealerUp <= 6 && !soft)
//     {
//         jsbApp.choice.innerHTML = "[Stay]";
//     }
//     else if (playerTotal >= 12 && playerTotal <= 16 && dealerUp >= 7 && !soft)
//     {
//         jsbApp.choice.innerHTML = "[Hit!]";
//     }
//     else if (playerTotal >= 17 && playerTotal <= 21 && !soft)
//     {
//         jsbApp.choice.innerHTML = "[Stay]";
//     }
//     else if (playerTotal >= 12 && playerTotal <= 18 && soft)
//     {
//         jsbApp.choice.innerHTML = "[Hit!]";
//     }
//     else if (playerTotal >= 19 && playerTotal <= 21 && soft)
//     {
//         jsbApp.choice.innerHTML = "[Stay]";
//     }
//     else
//     {
//         jsbApp.choice.innerHTML = "Massive error, unexpected scenario, idk";
//         console.log("Error: Player's hand was " + playerTotal + " and dealer's faceup was " + dealerUp + ".");
//     }
//     return;
// }
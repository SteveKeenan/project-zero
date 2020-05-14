console.log("JS connected");
// start button removes the button and launches the game


// Cards

class Deck {
    constructor(){
        this.cards = []; //cards created in the four loop and randomized with shuffler
        this.cardsPlayed = [];
    
        const cardValue = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
        const cardSuit = ["Diamonds", "Hearts", "Clubs", "Spades"];
        for (let suit in cardSuit){
            for (let value in cardValue){
                this.cards.push(`${cardValue[value]} of ${cardSuit[suit]}`);
                }
            }
    }
        shuffle() {  //Fisher-Yates shuffler
            let length = this.cards.length;
            let element;
            let index;

        while(length){
            index = Math.floor(Math.random() * length--);
            element = this.cards[length];
            this.cards[length] = this.cards[index];
            this.cards[index] = element;
        }
    }
    draw(){
        this.shuffle(); //second shuffle to increase randomization
        return this.cards.shift();
    } //this is working in console

}

const playingDeck = new (Deck); //creates a new deck based on the created class
console.log(playingDeck.cards); //logs the newly created deck of cards (playingDeck) and the cards array



class Card {
  
    
}
// Game

class Start {

    startGame (){
        // prompt for players name
        // bring up 'place bet' button
        let playerName = prompt("Please Enter Your Name", "Jack Black");
        console.log(playerName);
        console.log("this start works");
        
        return playerName;
    }
}

class Play {
    constructor(player, cpu, deck){
    this.player = player;
    this.cpu = cpu;
    this.deck = deck;
    this.chips = chips;
    this.bet = bet;
}


    betting(){
        // button $5
        const $fiveDollar = $('<button id=fiveDollar></button>');
        $fiveDollar.on('click', function(event){
            //add 5 to players bet
        })
        // button $10
        const $tenDollar = $('<button id=tenDollar></button>');
        $tenDollar.on('click', function(event){
            // add 10 to players bet
        })
        // button $25
        const $twentyFiveDollar = $('<button id=twentyFiveDollar></button>');
        $twentyFiveDollar.on('click', function(event){
            // add 25 to player bet
        })

        // button Place Bet
        const $placeBet = $('<button id=placeBet></button>');
        $placeBet.on('click', function(event){
            // if (player.bet === >= 5 && <= 100) {
                // place bet} else{
                //     "Please place bet between $5 and $100"
                // }

            // place bet and start hand
        })
        
          console.log("start betting worked");
        

        }

    playHand(){
        this.player.draw();
        this.cpu.draw();
        this.cardSuit
    }


    compareHands(){
        
    }

}
        

    //     dealCards(){

    //     }
    


    //     winnerDecided(){
    //     // 
    //     }

    //     discard(){

    //     }

    // }

    const start = new (Start);
    $('#startButton').on("click", function(event){
        start.startGame();
    })
    $('#startButton').on("click", function(event){
        $(this).hide(playGame);
    });

    const playGame = new (Play);



// Player
    // $1000 to start
    // bet >=$2 <= $250 
    
// CPU

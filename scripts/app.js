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

class Game {
    constructor(player, cpu, deck){
       this.player = player;
       this.cpu = cpu;
       this.deck = deck;
    }

    start (){
        // prompt for players name
        // bring up 'place bet' button
        let playerName = prompt("Please Enter Your Name", "Jack Black");
        console.log(playerName);
        console.log("this start works");
        
        return playerName;
    }

        betting(){
        // player is prompted to bet between $2 and $250.
            let placeYourBet = prompt("Place a bet between $2 and $250");

        }

        dealCards(){

        }
    
        playHand(){

        }

        winnerDecided(){
        // 
        }

        discard(){

        }

    }

    const game = new (Game);
    $('#startButton').on("click", function(event){
        game.start();
    })



// Player
    // $1000 to start
    // bet >=$2 <= $250 
    
// CPU

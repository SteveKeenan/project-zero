console.log("JS connected");

// Cards

class Deck {
    constructor(){
        this.cards = [];
        this.cardsPlayed = [];
    
        const cardValue = ["Ace", "King", "Queen", "Jack", 10, 9, 8, 7, 6, 5, 4, 3, 2];
        const cardSuit = ["Diamonds", "Hearts", "Clubs", "Spades"];
        for (let suit in cardSuit){
            for (let value in cardValue){
                this.cards.push(`${cardValue[value]} of ${cardSuit[suit]}`);
                }
            }

    }
}

const playingDeck = new (Deck);
console.log(playingDeck.cards);

// Player
    // $1000 to start
    // bet >=$2 <= $250 

// CPU



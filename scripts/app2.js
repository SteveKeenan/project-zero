// starting fresh

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
// Game Play

    // Establish Players
    // const player = 
    // const cpu = 
let bet = 0;
let chips = 1000;

$('#fiveDollar').on('click', function(event){
    bet+=5;
    chips-=5;
    console.log(bet);
    console.log(chips);
})

const betTen = $('#tenDollar').on('click', function(event){
    this.bet+=10;
    this.chips-=10;
    console.log(this.bet);
    console.log(this.chips);
            })

const betTwentyFive = $('#twentyFiveDollar').on('click', function(event){
                this.bet+=25;
                this.chips-=25;
                console.log(this.bet);
                console.log(this.chips);
            })

let playerHand = [];
let cpuHand = [];

$('#placeBet').on('click', function(event){
    while(playerHand.length < 2 && cpuHand.length < 2) {
        playerHand.push(playingDeck.draw());
        cpuHand.push(playingDeck.draw());
        console.log(playerHand);
        console.log(cpuHand);
}
});

const winningHand = function(){
for (let i=0; i < playerHand.length; i++){
// parseInt()
// sum hand
// if hand > 21 bust
// Ace = 11 or 1
    // if hand = >21 Ace = 1
    // if hand <= 21 Ace = 11
// if playerHand > cpuHand, player wins

}
}
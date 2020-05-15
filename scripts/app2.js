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

$('#tenDollar').on('click', function(event){
    bet+=10;
    chips-=10;
    console.log(bet);
    console.log(chips);
    })

$('#twentyFiveDollar').on('click', function(event){
    bet+=25;
    chips-=25;
    console.log(bet);
    console.log(chips);
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

let playerTotal = 0;
let cpuTotal = 0;

$('#hit').on('click', function(event){
    playerHand.push(playingDeck.draw());
    for(let i=0; i<playerHand.length; i++){
        const card = playerHand[i];
        console.log(card);
        
        if(isNaN(parseInt(card))){
            playerTotal += 10;
        } else {
            playerTotal += parseInt(card);
        }
        console.log(playerTotal);
    }
    if(playerTotal > 21){
        console.log("Bust");
        bet = 0;
    }
})

$('#stay').on('click', function(event){
    for(let i=0; i<cpuHand.length; i++){
        const card = cpuHand[i];
        console.log(card);
        console.log(parseInt(card));
        
        if(isNaN(parseInt(card))){
            cpuTotal += 10;
        }else if(parseInt(card) === Number){
            cpuTotal += parseInt(card);
        } else if (cpuTotal <17) {
            cpuHand.push(playingDeck.draw());
        }else if(cpuTotal > 21){
            playerTotal += bet;
        }else if(playerTotal > cpuTotal){
            playerTotal += bet;
        } else if(playerTotal < cpuTotal){
            bet = 0;
        }else{
            while(playerHand || cpuHand >0){
                cardsPlayed.push(playerHand);
                cardsPlayed.push(cpuHand);
        }
            console.log('Push');
    }
        }
        
});



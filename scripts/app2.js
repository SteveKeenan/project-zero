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
        this.shuffle(); 
        return this.cards.shift();
    } 

}

const playingDeck = new (Deck); //creates a new deck based on the created class

const $betting = $('#bet');
const $myMoney = $('#chips');
const $myHand = $('#playerHand');
const $computerHand = $('#cpuHand');


let bet = 0;
$betting.text(bet);
let chips = 1000;
$myMoney.text(chips);

$('#fiveDollar').on('click', function(event){
    bet+=5;
    chips-=5;
    $betting.text(bet);
    $myMoney.text(chips);
    })

$('#tenDollar').on('click', function(event){
    bet+=10;
    chips-=10;
    $betting.text(bet);
    $myMoney.text(chips);
    })

$('#twentyFiveDollar').on('click', function(event){
    bet+=25;
    chips-=25;
    $betting.text(bet);
    $myMoney.text(chips);
    })

let playerHand = [];
let cpuHand = [];

$('#placeBet').on('click', function(event){
    while(playerHand.length < 2 && cpuHand.length < 2) {
        playerHand.push(playingDeck.draw());
        cpuHand.push(playingDeck.draw());
        $myHand.text(playerHand);
        $computerHand.text(cpuHand);
        console.log("Player Hand" + playerHand);
        console.log("CPU Hand" + cpuHand);
}
});

let playerTotal = 0;
let cpuTotal = 0;

$('#hit').on('click', function(event){
    playerHand.push(playingDeck.draw());
    for(let i=0; i<playerHand.length; i++){
        const card = playerHand[i];
        console.log("player additional card" +card);
        
        if(isNaN(parseInt(card))){
            playerTotal += 10;
        } else {
            playerTotal += parseInt(card);
        }
        console.log("Player Hand Total" + playerTotal);
        $myHand.text(playerHand);
        $betting.text(bet);
        $myMoney.text(chips);
    }
    if(playerTotal > 21){
        console.log("Player Bust");
        bet = 0;
        $betting.text(bet);
        $myMoney.text(chips);
    }
})

$('#stay').on('click', function(event){
    for(let i=0; i<cpuHand.length; i++){
        const card = cpuHand[i];
        if(isNaN(parseInt(card))){
            cpuTotal += 10;
        }else if(parseInt(card) === Number){
            cpuTotal += parseInt(card);
        } else if (cpuTotal <17) {
            cpuHand.push(playingDeck.draw());
            $computerHand.text(cpuHand);
        }else if(cpuTotal > 21){
            playerTotal += bet;
        }else if(playerTotal > cpuTotal){
            playerTotal += bet;
        } else if(playerTotal < cpuTotal){
            bet = 0;
        }else{
            console.log("Push");
        }
    }     
});

// $('#nextHand').on('click', function(event){
//     while(playerHand.length > 0 && cpuHand.length >0){
//         playingDeck.cardsPlayed.push(playerHand);
//         playingDeck.cardsPlayed.push(cpuHand);
//         $myHand.text(playerHand);
//         $computerHand.text(cpuHand);
//         $betting.text(bet);
//         $myMoney.text(chips);
//     }
// });

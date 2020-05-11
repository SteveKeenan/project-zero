/* 
When loaded player must click 'Begin Game' button to start the game

CPU will be the dealer

Player starts with $1,000 in chips 
    - minimum bet per hand is $2
    - maximum bet per hand is $250

Game Over
    - CPU or player win all of the other's money
    - Player can decide to cash out and leave the game

Cards
    - Game will utilize a standard deck of 52 cards

Game Play
    - Deck is shuffled
        - Reshuffling happens when there are < 12 cards remaining in the deck to be delt (60 if using 6 decks) and the current hand being played is completed. 
    - Player places a bet and cards are delt.
    - CPU gives Player one card face up and itself once card face up. 
    - Second card is given to the Player face up and CPU gets second card face down.
    - Player decides if more cards are wanted to get closer to 21
        - Aces can be counted as either 1 or 11 by the player. 
        - Hit: Player presses hit button and another card is delt
        - Stand: Player presses stand button when satisfied with the hand and CPU plays.
        - Bust: If Player's hand exceeds a total of 21 the hand is lost.

    CPU Play Rules
        - CPU's face down card is turned up.
        - If card total is >= 17, CPU must stand
        - If card total is <= 16, CPU must take a card until total >= 17
        - If CPU has an Ace and if counting it as an 11 brings the total to >= 17, but not over 21 the CPU must stand
            - If the total exceeds 21 the Ace will be counted as a 1 and continue drawing until the above conditions are met.

Deciding the outcome
    - If Players's hand exceeds a total of 21 the hand is lost
    - If CPU's hand exceeds a total of 21 the hand is lost
        - Payout to Player is equal to the bet made.
    - After CPU stands the cards are compared and the total closest to 21 is the winner.
    - Natural blackjack (Facecard and Ace) will beat any other card total of 21
        - If the CPU does not have a natural blackjack the Player is paid 2x the amount of the bet.
        - If the CPU does have a natural blackjack as well the Player's bet it returned (Push).
    - If CPU and Player card totals are equal it is a Push and the bet is returned. 

*/

/* Stretch Goals

    Cards   - Utilize 6 decks of cards during game play
            - Deck will be shuffled and split

    Chips - Create chips with various values to be placed on the table
    
    Animations - Showing cards and they're being delt 
    
    Splitting Pairs - Allow Player the option to split pairs of delt cards
                    - After splitting cards a bet >= original bet must be made on the newly created hand and both are played

    Multiple Players    - Cards are delt clockwise and play occurs in the same order
                        - Slightly different logic for additional CPU players

    Doubling Down - When Player's original 2 cards = 9, 10, or 11 the Player can double the bet and receive only 1 additional card (CPU-dealer does not have this option).
    
    */
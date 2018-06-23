/*
 * Create a list that holds all of your cards
 */
// declaring deck
const deck = document.querySelector('.deck');

// opend cards
let opendCards = [];

// declaring cards
let card = document.querySelectorAll('.card');
let x = document.getElementsByClassName('card');
console.log(x);
console.log(card);


// initate the game
function startGame(){
   let cards = shuffle([...card]);
   console.log(cards[0]);
   console.log([...card][0]);
   deck.innerHtml = "";
   for (let i=0; i<cards.length; i++){
     deck.innerHtml = "";
     [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
     cards[i].classList.remove("show", "open", "match", "disabled");
   }

   // adding event listeners for cards
   for (card of cards){
     card.addEventListener("click", (event)=>{
           console.log(event.target);
           clickedCard(event.target);
     });
   }

}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    console.log("i'm workinng >>>>>> !");
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have  matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


function clickedCard(card){
   card.classList.add("show");
   addToOpendCards(card);
}

function addToOpendCards(card){
  opendCards.push(card);
  console.log(opendCards);
  console.log(opendCards.length);
      switch (opendCards.length) {
        case 2: if (opendCards[0].lastElementChild.className === opendCards[1].lastElementChild.className){
          console.log("matched :)");
          }else{
          console.log("sorry not matched!");
          }
          break;
        }
   }


// stat the game when the body finishes loading ..
document.body.onload = startGame();

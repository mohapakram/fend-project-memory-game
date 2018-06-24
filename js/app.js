
// declaring deck
const deck = document.querySelector('.deck');

// opend cards
var opendCards = [];

// moves
let moves = 0;

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

     deck.addEventListener("click", (event)=>{
       let card = event.target;
       console.log(opendCards);
          if ( isClickValid(card) ) {
            clickedCard(card);
            checkForMatch();
            checkScore();
          }

     });


}

function isClickValid(card){
  return(
      card.classList.contains("card")
      &&
      !card.classList.contains("match")
      &&
      opendCards.length < 2
      &&
      !opendCards.includes(event.target)
  );
}


function checkForMatch(){
  if (opendCards.length === 2){
    console.log("two cards!");
    if (opendCards[0].firstElementChild.className === opendCards[1].firstElementChild.className){
      console.log("matched");
      opendCards[0].classList.toggle("match");
      opendCards[1].classList.toggle("match");
      opendCards = [];
    }else {
       setTimeout(()=>{
         console.log("not matched!");
         toggleCard(opendCards[0]);
         toggleCard(opendCards[1]);
         opendCards = [];
       },1000);
    }
    addMove();
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

function addMove(){
  console.log("adding a move >> !");
  moves++;
  console.log(moves);
  const movesText = document.querySelector(".moves");
  console.log(movesText.innerText);
  movesText.innerText = moves;
}

function checkScore(){
  if(moves === 16 || moves === 24){
    removeStar();
  }
}

function removeStar(){
   const stars = document.querySelectorAll(".stars li");
   for (star of stars){
     if( star.style.display !== "none" ){
       star.style.display = "none";
       break;
     }
   }

}

function clickedCard(card){
   toggleCard(card); // toggle the card to open or close
   addToOpendCards(card); // add the card to the opencards to compare
}

function toggleCard(card){
  card.classList.toggle("show");
  card.classList.toggle("open");
}

function addToOpendCards(card){
    opendCards.push(card);
}






// stat the game when the body finishes loading ..
document.body.onload = startGame();

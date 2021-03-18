var cards = document.querySelectorAll('.memory-card');
var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
var moves=0;
var count=0;
var counter = document.querySelector(".moves-counter");
var counter2 = document.querySelector(".count-counter");
var stars = document.querySelectorAll(".fa-star");
var closeicon = document.querySelector(".close");
var modal = document.getElementById("popup1");
var  mymusic = document.getElementById("myaudio");
var isplaying = false;
var finish = new Audio("assets/sound/finish.wav");
var getMoves = localStorage.getItem('moves')+1;
var timeron =true;
var time=0;
var timer;
var minutes;
var seconds;
function play(){
    isplaying ? mymusic.pause() : mymusic.play();
}
mymusic.onplaying = function(){
  isplaying=true;
};
mymusic.onpause = function(){
  isplaying=false;
};


function flipCard() {
  if(timeron == true){
    startTimer();
    timeron = false;
  }

  if (lockBoard) return;
  if (this === firstCard) return;


this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;
  checkForMatch();
   moveCounter();
}

function checkForMatch() {
  var isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  countCounter();

  resetBoard();
  localStorage.setItem = ('moves')+1;
  congrats();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1200);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    var randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();
cards.forEach(card => card.addEventListener('click', flipCard));


function moveCounter() { // moves counter increases by one for each turn of two cards
    moves++;
    counter.innerHTML = moves;
    var i;
    if (moves > 14 && moves < 22) { // stars rating based on 14 and below 3 stars, 15 and 22 moves two stars and over 23 moves 1 star
        for (i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.visibility = "collapse";
            }
        }
    } else if (moves > 23) {
        for (i = 0; i < 3; i++) {
            if (i > 0) {
                stars[i].style.visibility = "collapse";
            }
        }
    }

}
function countCounter() { // counts the matches to work out when the modal should be displayed
    count++;
    counter2.innerHTML = count;
}

function startTimer(){
  timer = setInterval (function(){
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + (time % 60)).slice(-2);
    document.querySelector(".timer").innerHTML = minutes + ":" + seconds;
  },1000);
}

function congrats() { // congrats modal, displays when matches = 8
    if (count == 8) {
        modal.classList.add("show");

        finish.play();

        var starRating = document.querySelector(".stars").innerHTML;
        var timerDisplay = document.querySelector(".timer").innerHTML;

        document.getElementById("finalMove").innerHTML = moves + 1; // moves was showing 1 less on the board compared to modal so i added 1 to match.
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("timerDisplay").innerHTML = timerDisplay;
        mymusic.pause();
        closeModal();
    }
}

function closeModal() { // close modal button
    closeicon.addEventListener("click", function () {
        modal.classList.remove("show");
        restart();
    });
}

function restart() { // reloads the page to reset all settings on click of restart button

    location.reload();
    return false;
}
cards.forEach(card => {
    return card.addEventListener("click", flipCard);
});

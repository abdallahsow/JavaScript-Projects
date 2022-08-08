let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let scoreHome = 0;
let scoreGuest = 0;

function add1PtHome() {
  scoreHome += 1;
    homeScore.textContent = scoreHome;
    
}

function add1PtGuest() {
  scoreGuest += 1;
  guestScore.textContent = scoreGuest;
}

function add2PtHome() {
  scoreHome += 2;
  homeScore.textContent = scoreHome;
}

function add2PtGuest() {
  scoreGuest += 2;
  guestScore.textContent = scoreGuest;
}

function add3PtHome() {
  scoreHome += 3;
  homeScore.textContent = scoreHome;
}

function add3PtGuest() {
  scoreGuest += 3;
  guestScore.textContent = scoreGuest;
}


let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let scoreHome = 0;
let scoreGuest = 0;

function addPt(value, type) {
  if (type === 'home') {
    scoreHome += value;
    homeScore.innerHTML = scoreHome;
  } else {
    scoreGuest += value;
    guestScore.textContent = scoreGuest;
  }
}


let homeStore = document.getElementById("home-score");
let guestStore = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

// FOR HOME SCOREBOARD
function oneHome() {
  homeStore.textContent = homeScore += 1;
}

function twoHome() {
  homeStore.textContent = homeScore += 2;
}

function threeHome() {
  homeStore.textContent = homeScore += 3;
}

function resetHome() {
  homeScore = 0;
  homeStore.textContent = homeScore;
}

// FOR GUEST SCOREBOARD
function oneGuest() {
  guestStore.textContent = guestScore += 1;
}

function twoGuest() {
  guestStore.textContent = guestScore += 2;
}

function threeGuest() {
  guestStore.textContent = guestScore += 3;
}

function resetGuest() {
  guestScore = 0;
  guestStore.textContent = guestScore;
}

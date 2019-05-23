//declare variables
let playerNum;
let targetNum;
let blackScore;
let diamondScore;
let redScore;
let whiteScore;
let wins = 0;
let losses = 0;

// declare event listeners
$("#crystalBlack").on("click", () => {
  playerNum += blackScore;
  $("#playerScore").text(playerNum);
  checkWin();
});
$("#crystalRed").on("click", () => {
  playerNum += redScore;
  $("#playerScore").text(playerNum);
  checkWin();
});
$("#crystalDiamond").on("click", () => {
  playerNum += diamondScore;
  $("#playerScore").text(playerNum);
  checkWin();
});
$("#crystalWhite").on("click", () => {
  playerNum += whiteScore;
  $("#playerScore").text(playerNum);
  checkWin();
});

// reset game on page load
$(document).ready(function() {
  resetGame();
});

// random number function
function randomNum(max) {
  const random = Math.floor(Math.random() * max) + 1;
  return random;
}

// reset function
function resetGame() {
  playerNum = 0;
  targetNum = randomNum(120);
  $("#targetScore").text(targetNum);
  $("#playerScore").text(playerNum);
  blackScore = randomNum(12);
  console.log(`black gem gives ${blackScore}`);
  diamondScore = randomNum(12);
  console.log(`diamond gem gives ${diamondScore}`);
  redScore = randomNum(12);
  console.log(`red gem gives ${redScore}`);
  whiteScore = randomNum(12);
  console.log(`white gem gives ${whiteScore}`);
}

// check if win
function checkWin() {
  if (playerNum === targetNum) {
    $("#playerScore").text(0);
    wins++;
    $("#winText").text(wins);
    resetGame();
  } else if (playerNum > targetNum) {
    $("#playerScore").text(0);
    losses++;
    $("#lossText").text(losses);
    resetGame();
  }
}

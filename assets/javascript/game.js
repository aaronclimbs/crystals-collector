//declare variables
var playerNum, targetNum, blackScore, diamondScore, redScore, whiteScore;
var wins = 0;
var losses = 0;

// declare event listeners
$("#crystalBlack").on("click", () => {
  $("#crystalBlack").animate({ opacity: 0.55 }, "fast", function() {
    $(this).animate({ opacity: 1 }, "fast");
  });
  playerNum += blackScore;
  $("#playerScore").text(playerNum);
  checkWin();
});
$("#crystalRed").on("click", () => {
  $("#crystalRed").animate({ opacity: 0.55 }, "fast", function() {
    $(this).animate({ opacity: 1 }, "fast");
  });
  playerNum += redScore;
  $("#playerScore").text(playerNum);
  checkWin();
});
$("#crystalDiamond").on("click", () => {
  $("#crystalDiamond").animate({ opacity: 0.55 }, "fast", function() {
    $(this).animate({ opacity: 1 }, "fast");
  });
  playerNum += diamondScore;
  $("#playerScore").text(playerNum);
  checkWin();
});
$("#crystalWhite").on("click", () => {
  $("#crystalWhite").animate({ opacity: 0.55 }, "fast", function() {
    $(this).animate({ opacity: 1 }, "fast");
  });
  // $("#crystalWhite").animate({ opacity: 1 }, "slow");
  playerNum += whiteScore;
  $("#playerScore").text(playerNum);
  checkWin();
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
  diamondScore = randomNum(12);
  redScore = randomNum(12);
  whiteScore = randomNum(12);
  // console.log(`black gem gives ${blackScore}`);
  // console.log(`diamond gem gives ${diamondScore}`);
  // console.log(`red gem gives ${redScore}`);
  // console.log(`white gem gives ${whiteScore}`);
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

// reset game on page load
$(function() {
  $("#winText").text(wins);
  $("#lossText").text(losses);
  resetGame();
});

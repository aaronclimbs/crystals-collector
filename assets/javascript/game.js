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
  $("#playerScore")
    .fadeOut()
    .delay(100);
  $("#add")
    .text(`+${blackScore}`)
    .slideDown()
    .slideUp();
  setTimeout(function() {
    $("#playerScore")
      .text(playerNum)
      .fadeIn();
  }, 500);
  checkWin();
});
$("#crystalRed").on("click", () => {
  $("#crystalRed").animate({ opacity: 0.55 }, "fast", function() {
    $(this).animate({ opacity: 1 }, "fast");
  });
  playerNum += redScore;
  $("#playerScore")
    .fadeOut()
    .delay(100);
  $("#add")
    .text(`+${redScore}`)
    .slideDown()
    .slideUp();
  setTimeout(function() {
    $("#playerScore")
      .text(playerNum)
      .fadeIn();
  }, 500);
  checkWin();
});
$("#crystalDiamond").on("click", () => {
  $("#crystalDiamond").animate({ opacity: 0.55 }, "fast", function() {
    $(this).animate({ opacity: 1 }, "fast");
  });
  playerNum += diamondScore;
  $("#playerScore")
    .fadeOut()
    .delay(100);
  $("#add")
    .text(`+${diamondScore}`)
    .slideDown()
    .slideUp();
  setTimeout(function() {
    $("#playerScore")
      .text(playerNum)
      .fadeIn();
  }, 500);
  checkWin();
});
$("#crystalWhite").on("click", () => {
  $("#crystalWhite").animate({ opacity: 0.55 }, "fast", function() {
    $(this).animate({ opacity: 1 }, "fast");
  });
  playerNum += whiteScore;
  $("#playerScore")
    .fadeOut()
    .delay(100);
  $("#add")
    .text(`+${whiteScore}`)
    .slideDown()
    .slideUp();
  setTimeout(function() {
    $("#playerScore")
      .text(playerNum)
      .fadeIn();
  }, 500);
  // $("#playerScore").fadeIn();
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
    $("#winText")
      .text(wins)
      .animate({ fontSize: "5em" })
      .delay(50)
      .animate({ fontSize: "1em" });
    resetGame();
  } else if (playerNum > targetNum) {
    $("#playerScore").text(0);
    losses++;
    $("#lossText")
      .text(losses)
      .animate({ fontSize: "5em" })
      .delay(50)
      .animate({ fontSize: "1em" });
    resetGame();
  }
}

function slideUpFadeIn(element) {
  var fade = { opacity: 0, transition: "opacity 0.5s" };
  element.css(fade).slideUp();
}

// reset game on page load
$(function() {
  $("#winText").text(wins);
  $("#lossText").text(losses);
  resetGame();
});

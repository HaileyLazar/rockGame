let isOriginalBackground = true;

document.addEventListener("keydown", handleKeyPress);
document.getElementById("playAgainBtn").style.display = "none";

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!!";
  } else {
    result = "You lose...";
  }

  document.getElementById(
    "computerChoice"
  ).textContent = `Computer chose: ${computerChoice}`;
  document.getElementById("result").textContent = result;

  document.getElementById("playAgainBtn").style.display = "block";
}

function resetGame() {
  document.getElementById("computerChoice").textContent = "";
  document.getElementById("result").textContent = "";

  document.getElementById("playAgainBtn").style.display = "none";

  if (isOriginalBackground) {
    document.body.style.backgroundImage = "url(scdBackground.jpg)";
  } else {
    document.body.style.backgroundImage = "url('background.jpg')";
  }

  isOriginalBackground = !isOriginalBackground;
}

function handleKeyPress(event) {
  const key = event.key.toLowerCase();
  if (key === "r") {
    playGame("rock");
  } else if (key === "p") {
    playGame("paper");
  } else if (key === "s") {
    playGame("scissors");
  }
}

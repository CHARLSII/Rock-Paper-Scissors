const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const result = document.getElementById("result");
const submitButton = document.getElementById("submit");

let player = 0;
let computer = 0;

submitButton.addEventListener("click", () => {
  const playerChoice = document.querySelector('input[name="weapon"]:checked');

  if (!playerChoice) {
    alert("Please select a weapon");
    return;
  }

  const choice = playerChoice.value;
  const weapons = ["rock", "paper", "scissor"];
  const computerChoice = weapons[Math.floor(Math.random() * weapons.length)];

  let outcome = "";
  if (choice === computerChoice) {
    outcome = "It's a draw";
  } else if (
    (choice === "rock" && computerChoice === "scissor") ||
    (choice === "paper" && computerChoice === "rock") ||
    (choice === "scissor" && computerChoice === "paper")
  ) {
    outcome = "You win!";
    player++;
  } else {
    outcome = "Computer Wins!";
    computer++;
  }

  playerScore.textContent = player;
  computerScore.textContent = computer;
  result.textContent = `You chose ${choice.toUpperCase()}, computer chose ${computerChoice.toUpperCase()}. ${outcome}`;
  document.querySelector('input[name="weapon"]:checked').checked = false;
});

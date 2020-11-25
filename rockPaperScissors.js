const getComputerChoice = () => Math.round(Math.random() * 2);

function decideGameResult(userChoice, computerChoice) {
  switch (userChoice - computerChoice) {
    case 1:
    case -2:
      return showResultToUser("You Win", arguments);
    case 0:
      return showResultToUser("Draw", arguments)
    default: 
      return showResultToUser("You Lose", arguments)
    }
}

const showResultToUser = (resultMessage, choices) => {
  const [userChoice, computerChoice] = choices; 
  const RPS = ["Rock", "Paper", "Scissors"]; 

  document.getElementById("computer-choice")
    .textContent = "Computer: " + RPS[computerChoice];
  document.getElementById("user-choice")
    .textContent = "User: " + RPS[userChoice];
  document.getElementById("result")
    .textContent = "Result: " + resultMessage;
}

const playGame = () => {
  const rockPaperOrScissorsButtons =
    Array.from(document.getElementById("rock-paper-scissors").children);

  rockPaperOrScissorsButtons.forEach(
    (button, userChoice) => button.addEventListener("click", () => {
      decideGameResult(userChoice, getComputerChoice());
    }
    ))
}

playGame();
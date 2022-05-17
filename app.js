const form = document.querySelector("form");
const player1Name = document.getElementById("player1");
const player2Name = document.getElementById("player2");
const markButtons = document.querySelector(".mark-buttons-div");
const submitPlayer = document.getElementById("submit-player1");
const playersDiv = document.querySelector(".players");
const player1Span = document.getElementById("player1-name");
const player2Span = document.getElementById("player2-name");
const buttonsXO = [...document.querySelectorAll(".mark-button")];
const blocks = [...document.getElementsByClassName("block")];
const startGameBtn = document.querySelector(".start-game");

markButtons.style.display = "none";
playersDiv.style.display = "none";
startGameBtn.style.display = "none";
player2Name.value = "computer";
player2Name.setAttribute("readonly", "readonly");

let player;
let computer;
let playerSelection;
let computerSelection;

submitPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "none";
  playersDiv.style.display = "block";
  markButtons.style.display = "block";
  player2Span.innerText = player2Name.value;
  player1Span.innerText = player1Name.value;

  player = player1Span.innerText;
  computer = player2Span.innerText;
});

buttonsXO.forEach((button) =>
  button.addEventListener("click", (e) => {
    playerSelection = e.target.innerText;
    computerSelection = playerSelection == "X" ? "O" : "X";
    markButtons.style.display = "none";
    startGameBtn.style.display = "block";
  })
);

let index;
let winner;
const tie = "It's a tie!";
const arrayOfBlocks = ["", "", "", "", "", "", "", "", ""];

startGameBtn.addEventListener("click", () => {
  startGameBtn.style.display = "none";

  blocks.forEach((block) =>
    block.addEventListener("click", () => {
      block.innerText = playerSelection;
      arrayOfBlocks[blocks.indexOf(block)] += playerSelection;

      let newBlocks = blocks.filter((block) => block.innerText === "");
      index = Math.floor(Math.random() * newBlocks.length);

      let i = newBlocks.length;
      while (i > 1) {
        newBlocks[index].innerText = computerSelection;
        i--;
      }

      blocks.forEach((block) => {
        if (block.innerText === computerSelection) {
          arrayOfBlocks[blocks.indexOf(block)] = computerSelection;
        }
      });

      checkForWinningPatterns(arrayOfBlocks);
      console.log(arrayOfBlocks, winner);
    })
  );
});

const checkForWinningPatterns = (array) => {
  if (playerSelection === "X" && computerSelection === "O") {
    if (
      (array[0] === "X" && array[1] === "X" && array[2] === "X") ||
      (array[3] === "X" && array[4] === "X" && array[5] === "X") ||
      (array[6] === "X" && array[7] === "X" && array[8] === "X") ||
      (array[0] === "X" && array[3] === "X" && array[6] === "X") ||
      (array[1] === "X" && array[4] === "X" && array[7] === "X") ||
      (array[2] === "X" && array[5] === "X" && array[8] === "X") ||
      (array[2] === "X" && array[4] === "X" && array[6] === "X") ||
      (array[0] === "X" && array[4] === "X" && array[8] === "X")
    ) {
      winner = player;
    }
  }

  if (playerSelection === "O" && computerSelection === "X") {
    if (
      (array[0] === "O" && array[1] === "O" && array[2] === "O") ||
      (array[3] === "O" && array[4] === "O" && array[5] === "O") ||
      (array[6] === "O" && array[7] === "O" && array[8] === "O") ||
      (array[0] === "O" && array[3] === "O" && array[6] === "O") ||
      (array[1] === "O" && array[4] === "O" && array[7] === "O") ||
      (array[2] === "O" && array[5] === "O" && array[8] === "O") ||
      (array[2] === "O" && array[4] === "O" && array[6] === "O") ||
      (array[0] === "O" && array[4] === "O" && array[8] === "O")
    ) {
      winner = player;
    }
  }

  if (playerSelection === "O" && computerSelection === "X") {
    if (
      (array[0] === "X" && array[1] === "X" && array[2] === "X") ||
      (array[3] === "X" && array[4] === "X" && array[5] === "X") ||
      (array[6] === "X" && array[7] === "X" && array[8] === "X") ||
      (array[0] === "X" && array[3] === "X" && array[6] === "X") ||
      (array[1] === "X" && array[4] === "X" && array[7] === "X") ||
      (array[2] === "X" && array[5] === "X" && array[8] === "X") ||
      (array[2] === "X" && array[4] === "X" && array[6] === "X") ||
      (array[0] === "X" && array[4] === "X" && array[8] === "X")
    ) {
      winner = computer;
    }
  }

  if (playerSelection === "X" && computerSelection === "O") {
    if (
      (array[0] === "O" && array[1] === "O" && array[2] === "O") ||
      (array[3] === "O" && array[4] === "O" && array[5] === "O") ||
      (array[6] === "O" && array[7] === "O" && array[8] === "O") ||
      (array[0] === "O" && array[3] === "O" && array[6] === "O") ||
      (array[1] === "O" && array[4] === "O" && array[7] === "O") ||
      (array[2] === "O" && array[5] === "O" && array[8] === "O") ||
      (array[2] === "O" && array[4] === "O" && array[6] === "O") ||
      (array[0] === "O" && array[4] === "O" && array[8] === "O")
    ) {
      winner = computer;
    }
  }

  if (winner !== undefined) {
    document.querySelector("h4").innerText = `The winner is ${winner}`;
  }

  if (winner === undefined && array.every((item) => item !== "")) {
    document.querySelector("h4").innerText = tie;
  }
};

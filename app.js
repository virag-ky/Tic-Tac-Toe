const onePlayerButton = document.getElementById("one-player");
const twoPlayersButton = document.getElementById("two-players");
const form = document.querySelector("form");
const player1Name = document.getElementById("player1");
const player2Name = document.getElementById("player2");
const markButtons = document.querySelector(".mark-buttons-div");
const submitPlayer1 = document.getElementById("submit-player1");
const submitPlayer2 = document.getElementById("submit-player2");
const playersDiv = document.querySelector(".players");
const player1Span = document.getElementById("player1-name");
const player2Span = document.getElementById("player2-name");

form.style.display = "none";
markButtons.style.display = "none";
playersDiv.style.display = "none";

const player = (name, mark) => {
  return { name, mark };
};

onePlayerButton.addEventListener("click", () => {
  form.style.display = "block";
  player2Name.style.display = "none";
  twoPlayersButton.style.display = "none";
  submitPlayer2.style.display = "none";
  onePlayerButton.style.display = "none";
});

submitPlayer1.addEventListener("click", (e) => {
  e.preventDefault();
  form.style.display = "none";
  playersDiv.style.display = "block";
  player2Span.innerText = "computer";
  player1Span.innerText = player1Name.value;
});

// twoPlayersButton.addEventListener("click", () => {
//   form.style.display = "block";
//   onePlayerButton.style.display = "none";
//   twoPlayersButton.style.display = "none";
// });

const gameBoard = {
  gameboard: [],
};

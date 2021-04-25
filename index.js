const playerX = ["GANÓ X"];
const playerO = ["GANÓ O"];
let turno = 0;
let winner = 0;
let result = 0;
let moves = [];

const setWinner = (a) => {
  return (document.getElementById("result").innerHTML = a);
};

const verifyWinner = (arr) => {
  if (arr.length > 2 && moves.length <= 9) {
    if (
      (arr.includes("A") && arr.includes("C") && arr.includes("B") == true) ||
      (arr.includes("D") && arr.includes("E") && arr.includes("F") == true) ||
      (arr.includes("G") && arr.includes("H") && arr.includes("I") == true) ||
      (arr.includes("A") && arr.includes("D") && arr.includes("G") == true) ||
      (arr.includes("B") && arr.includes("E") && arr.includes("H") == true) ||
      (arr.includes("C") && arr.includes("F") && arr.includes("I") == true) ||
      (arr.includes("A") && arr.includes("E") && arr.includes("I") == true) ||
      (arr.includes("C") && arr.includes("E") && arr.includes("G") == true)
    ) {
      winner = 1;
      return setWinner(arr[0]);
    } else if (moves.length == 9) {
      return setWinner("Empate");
    }
  }
};

const setIndicator = () => {
  turno == 0 ? (indicator.innerHTML = "O") : (indicator.innerHTML = "X");
};

const setMoves = (e) => {
  if (e.target.textContent == "X") {
    playerX.push(e.target.id);
    moves.push(e.target.id);
    verifyWinner(playerX);
  } else {
    playerO.push(e.target.id);
    moves.push(e.target.id);
    verifyWinner(playerO);
  }
};

const asingPlayer = (e) => {
  if (e.target.textContent == "" && winner == 0) {
    if (turno == 0) {
      e.target.innerHTML = "X";
      e.target.className = "btn2";
      setIndicator();
      setMoves(e);
      turno++;
    } else if (turno == 1) {
      e.target.innerHTML = "O";
      e.target.className = "btn3";
      setIndicator();
      setMoves(e);
      turno--;
    }
  }
};

function start() {
  var result = document.getElementById("result");
  const indicator = document.getElementById("indicator");

  const buttons = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  for (i = 0; i < 9; i++) {
    document.getElementById(buttons[i]).addEventListener("click", asingPlayer);
  }
  let restart = document
    .getElementById("restart")
    .addEventListener("click", () => document.location.reload());
}

window.onload = start;

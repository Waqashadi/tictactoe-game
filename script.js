let getBox = document.querySelectorAll(".box");
let getBxtext = document.querySelectorAll(".h2");
let turn = "X";
let ting = new Audio("img/ting.mp3");
let tong = new Audio("img/gameover.mp3");
let bong = new Audio("img/music.mp3");
document.getElementById("turn").innerHTML = turn;
let getturn = document.getElementById("turn");

const checkWin = () => {
  let boxtext = document.getElementsByClassName("h2");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  let isDraw = true;
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      isDraw = false;
      
      // Stop background music when someone wins so it doesn't clash with gameover audio
      bong.pause(); 
      bong.currentTime = 0; 

      let hide = document.getElementsByClassName("secone");
      Array.from(hide).forEach((i) => {
        i.style.display = "none";
      });
      tong.play();
      document.getElementById("p").innerHTML = `The Player ${
        boxtext[e[0]].innerText
      } Won`;
      document.getElementById("gif").style.display = "block";
      document.getElementById("gifImg").style.width = "300px";

      document.getElementById("reset").style.display = "none";
      document.getElementById("turnn").style.display = "none";
      document.getElementById("again").style.display = "block";
    }
  });

  if (isDraw && [...boxtext].every((cell) => cell.innerText !== "")) {
    bong.pause(); // Stop music on draw too
    document.getElementById("turnn").style.display = "none";
    document.getElementById("draw").style.display = "block";
  }
};

// Removed the checkWin() call from here so it doesn't run empty on load!

getBox.forEach((i) => {
  i.addEventListener("click", () => {
    // Start background music smoothly on the first click
    if (bong.paused) {
      bong.loop = true; 
      bong.play().catch(e => console.log("Autoplay blocked until interaction"));
    }

    if (turn === "X" && i.innerHTML === '<h2 class="h2 mx-4 py-3"></h2>') {
      i.innerHTML = '<h2 class="h2 mx-4 py-3">X</h2>';
      turn = "O";
      getturn.innerHTML = turn;
      ting.play();
      checkWin();
    }
    if (turn === "O" && i.innerHTML === '<h2 class="h2 mx-4 py-3"></h2>') {
      i.innerHTML = '<h2 class="h2 mx-4 py-3 "   style="color: #5c5470;">O</h2>';
      turn = "X";
      getturn.innerHTML = turn;
      ting.play(); // Added your missing 'ting' sound for Player O here!
      checkWin();
    }
  });
});

function reset() {
  turn = "X";
  let hide = document.getElementsByClassName("secone");
  Array.from(hide).forEach((i) => {
    i.style.display = "block";
  });

  document.getElementById("turnn").style.display = "block";
  document.getElementById("gifImg").style.width = "0px";
  document.getElementById("reset").style.display = "block";
  document.getElementById("again").style.display = "none";
  document.getElementById("draw").style.display = "none";

  document.getElementById("p").innerHTML =
    ' <h3 class="p my-4" id="p">game start by just tapping on box</h3>';

  getturn.innerHTML = turn;
  getBox.forEach((i) => {
    i.innerHTML = '<h2 class="h2 mx-4 py-3"></h2>';
  });
}
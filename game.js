var loops = 0;
var charactersVisible = false;
var gameScore = 0;

function startGame() {
  gameLoop();
}

function gameLoop() {
  charactersVisible = !charactersVisible;
  createCharacters();
  loops++;
  if (loops < 12) {
    setTimeout(gameLoop, charactersVisible ? 1000 : 3000);
  } else {
    alert("Game Over!");
    alert("You're score is " + gameScore);
  }
}

function createCharacters() {
  var board = document.getElementById("board");
  var classToSet = charactersVisible ? "character visible" : "character hidden";
  for (var index = 0; index < 6; index++) {
    board.children[index].className = classToSet;
    board.children[index].innerHTML = "";
    board.children[index].onclick = function() {
      gameScore += -2; // gameScore = gameScore + 2;
    };
  }
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  board.children[randomNumber - 1].innerHTML = "";
  board.children[randomNumber - 1].className = classToSet + " thief";
  board.children[randomNumber - 1].onclick = function() {
    gameScore += 2;
  };
}

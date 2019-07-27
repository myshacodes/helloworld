function startGame() {
  gameLoop();
}
var loops = 0;
var charactersVisible = false;
function gameLoop() {
  charactersVisible = !charactersVisible;
  loops++;
  if (loops < 12) {
    setTimeout(gameLoop, 3000);
  } else {
    alert("Game Over!");
  }
}
function flashCharacters() {
  var board = document.getElementById("board");
  var classToSet = "";
  var classToSet = charactersVisible ? "character visible" : "character hidden";
}
for (var index = 0; index < 6; index++) {
  board.children[index].className = classToSet;
}
var loops = 0;
var people = false;
var gameScore = 0;

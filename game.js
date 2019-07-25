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
   if (charactersVisible) {
     classToSet = "character visible"
   }
  else {
    classToSet = "chracter hidden";
  }
}
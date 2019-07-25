var count = 0;
function updateCount() {
  count = count + 1;
  document.getElementById("number").innerHTML = count;
  setTimeout(updateCount(), 1000);
}

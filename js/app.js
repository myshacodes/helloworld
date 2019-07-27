function checkPassword() {
  var password = document.getElementById("passwordBox");
  var errorEle = document.getElementById("error");
  var passArr = ["myshacodes415", "heeena2000", "proudad13", "cute305"];
  var passwordText = password.value;
  if (passArr.indexOf(passwordText) != -1) {
    return true;
  } else {
    errorEle.innerHTML = "Incorrect Password. Try again!";
    return false;
  }
}
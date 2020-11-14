// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function passwordGenerate() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(length = 12) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var symbols = "!\"#$%&'()*+,-./:;<=>?@^[\\]^_`{|}~";
  var all = upper + lower + numbers + symbols;
  var password = "";
  for (var index = 0; index < length; index++) {
    var character = Math.floor(Math.random() * all.length);
    password += all.substring(character, character + 1);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerate);

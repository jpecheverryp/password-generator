// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Function that asks the user different questions to determine the characters to be used on the password
function desiredCharacters() {
  var characters = [];
  var wantLowercase = confirm('Would you like to have lowercase characters?');
  if(wantLowercase) {
    characters = characters.concat(lowercaseAlphabet);
  }

  console.log(characters);
}

// Write password to the #password input
function writePassword() {
  desiredCharacters();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

// Function that asks the user different questions to determine the characters to be used on the password
function desiredCharacters() {
  var characters = [];
  
  if(confirm('Would you like to have lowercase characters?')) {
    characters = characters.concat(lowercaseAlphabet);
  }

  if(confirm('Would you like to add uppercase characters?')) {
    characters = characters.concat(uppercaseAlphabet);
  }

  if(confirm('Would you like to add numbers?')) {
    characters = characters.concat(digitsArray);
  }

  if(confirm('Would you like to add symbols?')) {
    characters = characters.concat(symbolsArray);
  }

  return characters;
}

// Write password to the #password input
function writePassword() {
  console.log(desiredCharacters());
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

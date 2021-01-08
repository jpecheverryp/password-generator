// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];

// Function that asks the user different questions to determine the characters to be used on the password
function desiredCharacters() {
  // Creates empty array to know desired characters
  var characters = [];

  // Confirms if the user wants every kind of characters and adds them to the array
  do {
    if (confirm('Would you like to have lowercase characters?')) {
      characters = characters.concat(lowercaseAlphabet);
    }

    if (confirm('Would you like to add uppercase characters?')) {
      characters = characters.concat(uppercaseAlphabet);
    }

    if (confirm('Would you like to add numbers?')) {
      characters = characters.concat(digitsArray);
    }

    if (confirm('Would you like to add symbols?')) {
      characters = characters.concat(symbolsArray);
    }

    if (!characters.length) {
      alert('You need to choose at least one option:')
    }

  } while (!characters.length);



  //returns the array with the desired characters
  return characters;
}

// Function that returns for the desired length of the password
function desiredLength() {
  var numberOfCharacters = prompt('How many characters would you like to have in your password?');
  //Validation to check if the password length is between 8 and 128
  while (numberOfCharacters < 8 || numberOfCharacters > 128 || isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt('Please choose a number between 8 and 128 for your password length:');
  }


  return numberOfCharacters;
}

// Function that generates the password takes two parameters the length of the password and an array to be used to generate the password
function generatePassword(passwordLength, characters) {
  // Creates an empty string
  var createdPassword = '';
  var chosenCharacter = '';
  console.log(createdPassword);
  // Iterates with the desired length and adds random characters to the string
  for (var i = 0; i < passwordLength; i++) {
    // chooses a random character from the array parameter
    chosenCharacter = characters[Math.floor(Math.random() * characters.length)];
    // adds the chosen character to the password
    createdPassword = createdPassword.concat(chosenCharacter);
  }
  return createdPassword;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword(desiredLength(), desiredCharacters());
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
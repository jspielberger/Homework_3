// Assignment Code
var generateBtn = document.querySelector("#generate");
//*arrays needed


lower_alph = "abcdefghijklmnopqrstuvwxyz".split('')
upper_alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
special_characters = ['?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '`', '|', '_', '+', ' ', '/', '>', '<', ':', ';']
digits = ['0', '1', '2', '3', '5', '6', '7', '8', '9',]
chosen_characters = []
password = []



function generatecharacter(array) {
  var num = Math.floor(Math.random() * array.length);
  randomcharacter = array[num];
  return randomcharacter
}

// Write password to the #password input
function passwordoptions() {
  let characters = null;
  while (characters < 8 || characters > 128 || NaN(characters)) {
    characters = parseInt(prompt("Choose a number between 8 and 128"));
  }

  lowercase = confirm("Do you want lowercase letters?")
  if (lowercase) {
    chosen_characters = chosen_characters.append((lower_alph));
    password = password.append(generatecharacter(lower_alph));
  }

  upper = confirm('Do you want uppercase letters?')
  if (upper) {
    chosen_characters = chosen_characters.append((upper_alph));
    password = password.append(generatecharacter(upper_alph));
  }
  numbers = confirm('Do you want numbers?')
  if (numbers) {
  chosen_characters = chosen_characters.append((digits));
  password = password.append(generatecharacter(digits));
  }
  special = confirm('Do you want special characters?(e.g. ?, !, @)')
  if (special) {
  chosen_characters = chosen_characters.append((special_characters));
  password = password.append(generatecharacter(special_characters));
  }
  function writePassword() {
    for (let i = 0; i < characters.length; i++) {
      let password_character = generatecharacter(chosen_characters);
      password.push(password_character);
    }

    return password.join('');
  }
}
rd = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

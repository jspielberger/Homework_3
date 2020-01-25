// Assignment Code
var generateBtn = document.querySelector("#generate");
//*arrays needed


lower_alph = "abcdefghijklmnopqrstuvwxyz".split('')
upper_alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
special_characters = ['?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '`', '|', '_', '+', ' ', '/', '>', '<', ':', ';']
digits = ['0', '1', '2', '3', '5', '6', '7', '8', '9',]
chosen_characters = []
password = ['']



function generatecharacter(array) {
  var num = Math.floor(Math.random() * array.length);
  randomcharacter = array[num];
  return randomcharacter;
}

// Write password to the #password input
function generatepassword() {
  let characters = null;
  while (characters < 8 || characters > 128 || NaN(characters)) {
    characters = parseInt(prompt("Choose a number between 8 and 128"));
  }

  let lowercase = confirm("Do you want lowercase letters?");
  if (lowercase) {
    chosen_characters = chosen_characters.append((lower_alph));
    password = password.push(generatecharacter(lower_alph));
  }

  let upper = confirm('Do you want uppercase letters?');
  if (upper) {
    chosen_characters = chosen_characters.append((upper_alph));
    password = password.push(generatecharacter(upper_alph));
  }
  let numbers = confirm('Do you want numbers?');
  if (numbers) {
  chosen_characters = chosen_characters.append((digits));
  password = password.push(generatecharacter(digits));
  }
  let special = confirm('Do you want special characters?(e.g. ?, !, @)');
  if (special) {
  chosen_characters = chosen_characters.append((special_characters));
  password = password.push(generatecharacter(special_characters));
  }
  
  for (let i = 0; i < characters; i++) {
      let password_character = generatecharacter(chosen_characters);
      password.push(password_character);
  }
  return password.join('');
}

function writePassword() {
  returned_password = generatepassword()
  let returned_password_text = document.querySelector("#password")
  returned_password_text.value = returned_password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

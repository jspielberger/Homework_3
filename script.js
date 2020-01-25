// Assignment Code
let generateBtn = document.querySelector("#generate");
//*arrays needed






  // Write password to the #password input
let generatepassword = function(){
  let lower_alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upper_alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let special_characters = ['?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '`', '|', '_', '+', ' ', '/', '>', '<', ':', ';'];
let digits = ['0', '1', '2', '3', '5', '6', '7', '8', '9'];
  let chosen_characters = [];
  let default_password = [''];
  let password = [''];

  function generatecharacter(array) {
    let num = Math.floor(Math.random()* array.length);
    let randomcharacter = array[num];

    return randomcharacter;
  }
    let character_length = parseInt(prompt("Great news! It's time to decide how big your password will be! Remember, you need to choose a number between 8 and 128!"));
    if (isNaN(character_length) === true) {
      alert('Nuh, uh! Password length must be provided as a number, not a letter silly!');
      return;
    }
  
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (character_length < 8) {
      alert('Password length must be at least 8 characters');
      return;
    }
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (character_length > 128) {
      alert('Password length must less than 129 characters');
      return;
    }
   
    let lowercase = confirm("Do you want lowercase letters?"); 
    if(lowercase) {
      chosen_characters = chosen_characters.concat(lower_alph);
      default_password.push(generatecharacter(lower_alph));
    }
    else {

    }

    let upper = confirm('Do you want uppercase letters?');
    if(upper) {
      chosen_characters = chosen_characters.concat(upper_alph);
      default_password.push(generatecharacter(upper_alph));
    }
    else{

    }
    let numbers = confirm('Do you want numbers?');
    if(numbers) {
      chosen_characters = chosen_characters.concat(digits);
      default_password.push(generatecharacter(digits));
      
    }
    else{

    }
    let special = confirm('Do you want special characters?(e.g. ?, !, @)');
    if(special) {
      chosen_characters = chosen_characters.concat(special_characters);
      default_password.push(generatecharacter(special_characters));
      
    }
    else{

    }
    if (
      special === false &&
      numbers === false &&
      lower === false &&
      uppper === false
    ) {
      alert('Must select at least one character type');
      return;
    }
    
    for (let i = 0; i < character_length; i++) {
      let password_character = generatecharacter(chosen_characters);
      password.push(password_character);
    }
    for (var i = 0; i < default_password.length; i++) {
      password[i] = default_password[i];
    }
  return password.join('');
}
function writePassword() {
  var password = generatepassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button

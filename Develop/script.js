// Assignment Code
let generateBtn = document.querySelector("#generate");
//*arrays needed



  // Write password to the #password input
let generatepassword = function(){

  let lower_alph = "abcdefghijklmnopqrstuvwxyz".split('');
  let upper_alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let special_characters = ['?', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '`', '|', '_', '+', ' ', '/', '>', '<', ':', ';'];
  let digits = ['0', '1', '2', '3', '5', '6', '7', '8', '9'];



  function generatecharacter(array) {
    let num = Math.floor(Math.random()* array.length);
    let randomcharacter = array[num];
    return randomcharacter;
  }
    let character_length = parseInt(prompt("Time to decide how big your password will be. Please choose a number between 8 and 128"));
    let chosen_characters = [];
    let password = [];
    let lowercase = confirm("Do you want lowercase letters?"); 
    if(lowercase) {
      chosen_characters.push(lower_alph);
      password.push(generatecharacter(lower_alph));
    }
    else {

    }

    let upper = confirm('Do you want uppercase letters?');
    if(upper) {
      chosen_characters.push(upper_alph);
      password.push(generatecharacter(upper_alph));
    }
    else{

    }
    let numbers = confirm('Do you want numbers?');
    if(numbers) {
      chosen_characters.push(digits);
      password.push(generatecharacter(digits));
    }
    else{

    }
    let special = confirm('Do you want special characters?(e.g. ?, !, @)');
    if(special) {
      chosen_characters.push(special_characters);
      password.push(generatecharacter(special_characters));
    }
    else{

    }

    for (let i = 0; i < (character_length - 4); i++) {
      let password_character = generatecharacter(chosen_characters);
      password.push(password_character);
    }
  return alert(password.join('',','));
}
generateBtn.addEventListener("click", generatepassword);

// Add event listener to generate button

// Assignment Code
var generateBtn = document.querySelector("#generate");
//*arrays needed


  lower_alph = "abcdefghijklmnopqrstuvwxyz".split('')
  upper_alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  special_characters = ['?', '!', '@', '#', '$','%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '`', '|',   '_', '+', ' ','/','>','<', ':', ';' ]
  digits = ['0','1','2','3','5','6','7','8','9',]

  password = ('')

}


// Write password to the #password input
function writePassword() {
let characters=null;
  while (characters < 8 || characters > 128 || NaN(characters)) {
    characters = parseInt(prompt("Choose a number between 8 and 128"));
  }
    let lowercase = confirm("Do you want lowercase letters?")
      if (lowercase) {
        full_array = full_array.append((lower_alph))
      }
      
    let uppercase = confirm('Do you want upppercase letters?')
    if (lowercase === "True") {
      full_array.append((upper_alph))
  }
    let numbers = confirm('Do you want numbers?')
    if (numbers) === "True"
    let special = confirm('Do you want special characters?(e.g. ?, !, @)')
  function generatePassword() {


    for (let i = 0; i < characters; i++) {
      var num = Math.floor(Math.random()*characters);
    return num
      password += 'c'

    

  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
//*arrays needed
lower_alph = []
upper_alph = []
special_characters = ['?', '!', '@', '#', '$','%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '`', '|',   '_', '+', ' ','/','>','<', ':', ';' ]
digits = ['0','1','2','3','5','6','7','8','9',]
password = ('')
// Write password to the #password input
function writePassword() {
let characters=null;
  while (characters < 8 || characters > 128 || NaN(characters)) {
    characters = prompt("Choose a number between 8 and 128");
  }

  function generatePassword() {


    for (let i = 0; i < characters; i++) {
      var num = Math.floor(Math.random()*characters);
      
      password += 'c'

    

  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

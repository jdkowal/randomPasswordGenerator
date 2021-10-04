const lowerCase ="asdfghjklzxcvbnmqwertyuiop";
const upperCase = "ASDFGHJKLZXCVBNMQWERTYUIOP";
const numbers = "1234567890";
const specChar = "!@#$%^&*()-+_="; 

//figure length 
function generatePassword(){
  var passLength 
  while (!Number.isInteger(parseInt(passLength))) {
  passLength = prompt("how long?")
}{ while (passLength <8 || passLength >128)
  passLength = prompt("how long")
}{ if (passLength > 8 && passLength < 128)
  length = passLength
}

var charSet = ""

var lowerCaseConfirm = confirm ("Would you like lower case letters?");
  if (lowerCaseConfirm){
  charSet += lowerCase; 
  }
var upperCaseConfirm = confirm ("would you like upper case letters?");
  if (upperCaseConfirm){
  charSet += upperCase;
  }
var numConfirm = confirm ("would you like numbers?");
  if (numConfirm){
  charSet += numbers;
  }
var specialCaseConfirm = confirm ("would you like to add a special character?");
  if (specialCaseConfirm){
  charSet += specChar;
  }
  var yourPassword = "";
//for loop that takes the password length then adds from the top strings to randomize and output a password into "your password"
for (var i = 0; i < passLength; i++){
  yourPassword += charSet[Math.floor(Math.random() * charSet.length)];
}
return yourPassword;   
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 



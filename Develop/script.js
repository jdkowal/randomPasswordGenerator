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
  console.log(passLength)
}
    


  var lowerCaseConfirm = confirm("do you lc?");
  console.log(lowerCaseConfirm)
  var upperCaseConfirm = confirm("do you uc?");
  console.log(upperCaseConfirm)
  var specialCaseConfirm = confirm("do you sp?");
  console.log(specialCaseConfirm)
  var numConfirm = confirm("do you num?");
  console.log(numConfirm)
  

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



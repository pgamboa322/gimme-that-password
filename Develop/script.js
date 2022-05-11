// Assignment code here

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  let passwordString = "";
  let passwordArray = [];

  let passwordLength = parseInt (
    prompt("Choose a length of at least 8 characters and no more than 128 characters")
  ); 
  if (passwordLength >128 || passwordLength <8) {
    return alert("Enter the correct character amount. Try again.")

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// create arrays for different defined variables
let lowercaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numberArr = ["1","2","3","4","5","6","7","8","9","0"]
let specialArr = ["!","@","#","$","%","&","*"]

function generatePassword() {
  let passwordString = "";
  let passwordArray = [];
//parse takes a string value and makes integer
  let passwordLength = parseInt (
    prompt("Choose a length of at least 8 characters and no more than 128 characters")
  ); 
  //if not between 8-128 characters 
  if (passwordLength >128 || passwordLength <8) {
    window.alert("Enter the correct character amount. Try again.");
    return generatePassword();
  }
// adding lowercase characters to password array
  let lowercase = confirm("Do you want lowercase characters?")
  if (lowercase === true) {
    passwordArray = passwordArray.concat(lowercaseArr);
  }
// adding uppercase characters to password array
  let uppercase = confirm("Do you want uppercase characters?")
  if (uppercase === true) {
    passwordArray = passwordArray.concat(uppercaseArr);
  }
// adding number characters to password array
  let number = confirm("Do you want number characters?")
  if (number === true) {
    passwordArray = passwordArray.concat(numberArr);
  }
// adding special characters to password array
  let special = confirm("Do you want special characters?")
  if (special === true) {
    passwordArray = passwordArray.concat(specialArr);
  }
//loop through password array number of password length (8-128)
//create string of password array characters
//floor rounds down, passwordarray.length = 26+26+...
  for (let i = 0; i < passwordLength; i++) {
    passwordString += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }
  return passwordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

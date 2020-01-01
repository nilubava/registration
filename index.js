let password = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let special = document.getElementById("special");
let length = document.getElementById("length");
let submit = document.getElementById("submit");

const isAllConditionsValid = () => letter.classList.contains('valid') && 
	capital.classList.contains("valid")  && 
	number.classList.contains("valid") && 
	special.classList.contains("valid") && 
	length.classList.contains("valid");
    
submit.setAttribute('disabled', !isAllConditionsValid());

// When the user starts to type something inside the password field
password.onkeyup = () => {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(password.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  } 

  // Validate special characters
  let specialCharacters = /\W|_/g;
  if(password.value.match(specialCharacters)) {  
    special.classList.remove("invalid");
    special.classList.add("valid");
  } else {
    special.classList.remove("valid");
    special.classList.add("invalid");
  }
  
  // Validate length
  if(password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  submit.setAttribute('disabled', !isAllConditionsValid());
}
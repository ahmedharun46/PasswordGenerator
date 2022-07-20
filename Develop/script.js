// Assignment Code
var generateBtn = document.querySelector("#generate");
var ChosenCharacters;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function chooseLength(){
var passwordLength = window.prompt ("Please enter a number 8-128, to vhose how many characters you want in your password");
window.alert("Your pass word length is " + passwordLength);
} 
chooseLength();

var UppercaseLetters = window.confirm ("Would you like Uppers Case Letter");
if (UppercaseLetters){
  window.alert("You choose a UpperCase Letter");
  ChosenCharacters += "ABC";
}
if (UppercaseLetters===false){
  window.alert("Did not choose UpperCase Letter");
}

var LowerCaseLetters = window.confirm ("Would you like a Lower Case Letter");
if (LowerCaseLetters){
  window.alert("You choose a LowerCasse Letter");
  ChosenCharacters += "abc";
}
if (LowerCaseLetters===false){
    window.alert("Did not choose LowerCase Letter")
   
}

var Numbers = window.confirm ("Would you like a Number");
if (Numbers){
window.alert("You choose a Number");
ChosenCharacters += "123";
}
if (Numbers===false){
  window.alert("Did not choose a Number");
} 


var SpecialCharacters = window.confirm ("Would you like a Special Characters");
if(SpecialCharacters){
  window.alert("You choose a Special Character");
  ChosenCharacters += "@!#"
}
  if (SpecialCharacters===false){
  window.alert("Did not choose Special Character");
}

















generateBtn.addEventListener("click", writePassword);





















// declare function generatePassword()
//variables holding the different characters
//uppercase= ["A","B","C"]

// I need to use prompt() to gather password criteria
//prompt("How many characters would you linke in your password")
// if(passwordLength <8) stop function
// if(passwordLength >128) stop function
// Add event listener to generate button
//confirm()returns a boolean true/false
//confirm() for uppercase letters
// confirm() for lowercase letters
//cofrim() for special characters
//confrim() for numeric characters
// once each cinfrim/prompt has been asnwered
// if confrims are ture keep or get charcter type 
// if no confirm is true stop function
//if a confirm is true the concat related array to selected characters array
// i.e ['A','B','C',a,b,c,1,2,3,%,$,#]
//for loop based on password length prompt
// use Math.floor (Math.random()* selectedCharacters.length)to get random index of slectedCharacters

//var selectedCharacters= [];
//var uppercaseCharacters= ['A', 'B','C'];
//if(isUpperscase) {
//selectedCharacters.concat(uppercaseCharacters)



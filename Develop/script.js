// Assignment Code
var generateBtn = document.querySelector("#generate");
var ChosenCharacters = [];
var passwordLength
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
 passwordLength = window.prompt("Please enter a number 8-128, to chose how many characters you want in your password");
  window.alert("Your pass word length is " + passwordLength);

  if(Number.isNaN(passwordLength)){
    window.alert("Alert!");
    return;
  }
  if(passwordLength<8){
    window.alert("Invalid");
    return;
  }
  if(passwordLength>128){
    window.alert("Invalid");
    return;
  }

  var UppercaseLetters = window.confirm("Would you like Uppers Case Letter");
  if (UppercaseLetters) {
    window.alert("You choose a UpperCase Letter");
    var UppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    ChosenCharacters.push(...UppercaseLetters);
    console.log(ChosenCharacters);

  }
  if (UppercaseLetters === false) {
    window.alert("Did not choose UpperCase Letter");
  }


  var LowerCaseLetters = window.confirm("Would you like a Lower Case Letter");
  if (LowerCaseLetters) {
    window.alert("You choose a LowerCasse Letter");
    var LowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    ChosenCharacters.push(...LowerCaseLetters);
    console.log(ChosenCharacters);

  }
  if (LowerCaseLetters === false) {
    window.alert("Did not choose LowerCase Letter")
  }


  var Numbers = window.confirm("Would you like a Number");
  if (Numbers) {
    window.alert("You choose a Number");
    var Numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20','21','22','23','24','25','26','27','28','29','30'];
    ChosenCharacters.push(...Numbers);
    console.log(ChosenCharacters);

  }
  if (Numbers === false) {
    window.alert("Did not choose a Number");
  }


  var SpecialCharacters = window.confirm("Would you like a Special Characters");
  if (SpecialCharacters) {
    window.alert("You choose a Special Character");
    var SpecialCharacters = ['@', '!', '#', '$', '^', '&', '*'];
    ChosenCharacters.push(...SpecialCharacters);
    console.log(ChosenCharacters); 
  }
  if (SpecialCharacters === false) {
    window.alert("Did not choose Special Character");
  }
  function Randomizer() {
  //Scramble Characters from the global array
  for (var i = 0; i < passwordLength; i++) {
    var Random = Math.floor(Math.random() * ChosenCharacters.length);
    console.log(ChosenCharacters.length);
  console.log(ChosenCharacters[Random]);
    console.log(passwordLength);
    }
  }
}



//Randomizer()
//return ChosenCharacters


//if (passwordLength<8){
//  window.alert("Invalid");
//}
//if (passwordLength>128){
// window.alert("Invalid");
//}






// Returns number of Characters user selected 













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



// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log(passwordText);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePassword = function(){
  //ask users if they want to create a password
  var passwordPrompt = window.confirm("Do you want to create a new password?");

  //if yes create the prompts
  if (passwordPrompt){
    //1st prompt define the password length
    var passwordLength = prompt("Select the number of characters, minimum 8 and no more than 128");

    //confirm if the length is a valid number
    if(!passwordLength || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ) {
      window.alert("Please, choose a length of at least 8 characters and no more than 128 characters")
      generatePassword();
    }
    // else{
    //   return passwordLength;
    // }
    var typeOfCharacters=["lowercase","UPERCASE", "Numeric", "Special !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
    for (var i = 0; i < typeOfCharacters.length; i++){
      confirm("Do you want to include " + typeOfCharacters[i])
      console.log(passwordLength);
    }
    
  }// end if (passwordPrompt)

    // var finalPasssword = "";
    // finalPasssword = prompt("Enter your password");
    // console.log("Password is: " + finalPasssword);
    // return finalPasssword
  
}//end generatePassword() function
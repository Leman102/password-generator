// Assignment code here

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
    //call prompts to identify the type of characters required
    consolidatePassword();

    // console.log(characterTypes.split(""));
    // console.log(characterTypes);
    
    //select random number from character types using as a limit passwordLength
    for (var i = 0; i < passwordLength; i++){

      result += characterTypes[Math.floor(Math.random() * characterTypes.split("").length)] 
    }

    
    //send "result" as the password for the user
    return result;
   
  }
  
}

var characterTypes = "";
var result = "";

var consolidatePassword = function (){
  var lowerCasePromp = confirm("Do you want to include lowercase?");
  // if yess add to characterTypes
  if(lowerCasePromp){
    characterTypes += "abcdefghijklmnopqrstuvwxyz";
  }
  var uperCasePromp = confirm("Do you want to include UPERCASE?");
  // if yess add to characterTypes
  if(uperCasePromp){
    characterTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var numericPromp = confirm("Do you want to include Numbers?");
  // if yess add to characterTypes
  if(numericPromp){
    characterTypes += "0123456789";
  }
  var specialCharPromp = confirm("Do you want to include Special !#$%&'()*+,-./:;<=>?@[\]^_`{|}~?");
  // if yess add to characterTypes
  if(specialCharPromp){
    characterTypes += "^$*.[]{}()?-\"!@#%&/\\,><':;|_~`";
  }
  
  //if no type has been selected send an alert
  if(!lowerCasePromp && !uperCasePromp && !numericPromp && !specialCharPromp){
    alert("Must include at least one character type!");
    consolidatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  if(!password){
    generatePassword();
  }else {
  alert("Your password has been created successfully! Thanks for  using Password-Generator 🔐")
  }
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


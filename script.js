// Assignment Code

/* 

<< I was not able to link the prompts for the number of characters and selecting other characters to the generate function. When i tried that, my code wouldn't work. So i allowed for fix length of 10 and went ahead with different characters types being auto selected to generate a password. >>

var character = prompt ("How many characters would you like your password to contain? Note: The password length must be at least 8 and not more than 128 characters long")

if (character <8) {
  alert("Password length must be at least 8 characters long!");
}

else if (character >129) {
  alert("Password length must be less than 129 characters!");
}

else if (character <=8 ) (character >=129); {
  parseInt(character)
}

var symbols = confirm ("Click OK to include special characters in your password.");
var numeric = confirm ("Click OK to include numeric characters in your password.");
var lowercase = confirm ("Click OK to include lowercase characters in your password.");
var uppercase = confirm ("Click Ok to include uppercase characters in your password.");

*/

function generate() {


var length = 0

  while(length <8 || length >128) {

    length = prompt ("How many characters would you like your password to contain? Note: The password length must be at least 8 and not more than 128 characters long")

    if (length<8) {
      alert("Password length must be at least 8 characters long!");
    }
    
    else if (length >129) {
      alert("Password length must be less than 129 characters!");
    }
    
    else if (length <=8 ) (length >=129); {
      parseInt(length)
    }
  }

  var symbolsChoice = confirm ("Click OK to include special characters in your password.");
  if (symbolsChoice) { 
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
  }

  var numericChoice = confirm ("Click OK to include numeric characters in your password.");
  if (numericChoice) {
    var numbers = '0123456789';
  }
  
  
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  
  


  var all = uppercase + lowercase + numbers + symbols;

    var password = '';

    for (var index = 0; index < length; index++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }

    return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


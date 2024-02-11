// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to prompt for password criteria
function getPasswordCriteria() {
  // Confirm character types to include
  var includeLowercase = confirm("Include lowercase characters?(Yes or No)");
  var includeUppercase = confirm("Include uppercase characters?(Yes or No)");
  var includeNumeric = confirm("Include numeric characters?(Yes or No)");
  var includeSpecial = confirm("Include special characters?(Yes or No)");
  
  // Prompt for the length of the password
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate the length input
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length. Please enter a number between 8 and 128:"));
  }

  return {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecial: includeSpecial
  };
}

// Function to display custom confirmation prompt
function showConfirmDialog(message, callback) {
  var confirmDialog = document.getElementById('confirmDialog');
  var confirmYes = document.getElementById('confirmYes');
  var confirmNo = document.getElementById('confirmNo');
  
  confirmDialog.querySelector('.confirm-message').textContent = message;

  confirmYes.onclick = function() {
    callback(true);
    confirmDialog.style.display = 'none';
  };

  confirmNo.onclick = function() {
    callback(false);
    confirmDialog.style.display = 'none';
  };

  confirmDialog.style.display = 'block';
}

// Example usage:
showConfirmDialog("Include lowercase characters?", function(result) {
  console.log(result); // true if 'Yes' is clicked, false if 'No' is clicked
});




// Function to generate a random password based on criteria
function generatePassword() {
  var criteria = getPasswordCriteria();
  var chars = '';
  var password = '';

  if (criteria.includeLowercase) {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (criteria.includeUppercase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (criteria.includeNumeric) {
    chars += '0123456789';
  }
  if (criteria.includeSpecial) {
    chars += '!@#$%^&*()-_=+[]{}|;:,.<>?';
  }

  for (var i = 0; i < criteria.length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

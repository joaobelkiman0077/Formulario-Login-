function checkUsername() {                            // Declare function
    var elMsg = document.getElementById('feedback');    // Get feedback element
    if (this.value.length < 5) {                        // If username too short
      elMsg.textContent = 'O nome precisa ter mais de 5 caracteres';  // Set msg
    } else {                                            // Otherwise
      elMsg.textContent = '';                           // Clear message
    }
  }
  
  var elUsername = document.getElementById('username'); // Get username input
  elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
function checkPassword(){
    var elMsg = document.getElementById('feedbackP');
    if (this.value.length < 8 ){
        elMsg.textContent = 'A senha precisa ter mais que 8 caracteres ';
    }else{
        elMsg.textContent = "";
    }
}
var elPassword = document.getElementById('password');
elPassword.onblur = checkPassword;

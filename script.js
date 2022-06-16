document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");
  
    if (validateUsername(username) && validatePassword(password)) {
      window.location.href = "login_success.html";
    } else {
      alert("Incorrect username or password format. Try Again");
      return false;
    }
  });
  
  function validateUsername(username) {
    const user = /[A-za-z][0-9]/;
    if (username.value.match(user)) {
        console.log(username.value);
      return true;
    } else {
      return false;
    }
  }
  
  function validatePassword(inputtxt) {
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (inputtxt.value.match(passw)) {
        console.log(inputtxt.value);
      return true;
    } else {
      return false;
    }
  }




 





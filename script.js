document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");
  
    if (validateUsername(username) && validatePassword(password)) {
      alert("Login was successful");
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

  document.getElementById("form2").addEventListener("submit", (e) => {
     e.preventDefault();
      const age = document.getElementById("age");
      const gender = document.getElementById("gender");
      const rate = document.getElementById("rate");
      const favorite = document.getElementById("favorite");
      const issues = document.getElementById("issues");
      const selectGame = document.getElementById("selectGame");
      const describebug = document.getElementById("describebug");
      const suggestions = document.getElementById("suggestions");

      if (email.value != "" && message.value != "") {
        window.location.href = "feedback_message.html";
       }
    });


 





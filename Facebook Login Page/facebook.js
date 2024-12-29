document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("loginForm");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
      console.log("Email: " + email);
      console.log("Password: " + password);
  
      alert("Login successful!");
    });
  });
  

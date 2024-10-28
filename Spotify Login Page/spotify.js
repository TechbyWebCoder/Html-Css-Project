document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username.trim() || !password.trim()) {
            alert("Please enter both username and password.");
            return;
        }


        console.log("Username:", username);
        console.log("Password:", password);

    });
});

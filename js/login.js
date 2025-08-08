// login.js
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        alert("Invalid username or password");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    alert("Login successful!");
    window.location.href = "index.html";
});

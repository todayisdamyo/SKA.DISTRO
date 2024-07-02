document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Collect the values of the username and password fields
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Save the username to localStorage
        localStorage.setItem('username', username);

        // Redirect to index.html
        window.location.href = "index.html";
    });
});
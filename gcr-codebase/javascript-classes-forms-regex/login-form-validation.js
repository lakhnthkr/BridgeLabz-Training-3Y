document.body.innerHTML = `
<h2>Login Form</h2>

<form id="loginForm">
    <label>Username:</label>
    <input type="text" id="username"><br><br>

    <label>Password:</label>
    <input type="password" id="password"><br><br>

    <button type="submit">Login</button>
</form>

<p id="message"></p>
`;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }

    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }

    const message = document.getElementById("message");

    message.style.color = errors.length ? "red" : "green";

    message.innerHTML = errors.length
        ? errors.join("<br>")
        : "Login validation successful!";
});
document.body.innerHTML = `
<h2>Student Registration Form</h2>

<form id="studentForm">
    <label>Name:</label>
    <input type="text" id="name"><br><br>

    <label>Email:</label>
    <input type="text" id="email"><br><br>

    <label>Phone:</label>
    <input type="text" id="phone"><br><br>

    <label>Password:</label>
    <input type="password" id="password"><br><br>

    <button type="submit">Register</button>
</form>

<p id="message"></p>
`;

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const checks = [
        [name, /^[A-Za-z ]+$/, "Name must contain only alphabets."],
        [email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address."],
        [phone, /^[0-9]{10}$/, "Phone must contain exactly 10 digits."],
        [password, /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/, "Password needs an uppercase letter, number and special character."]
    ];

    let errors = [];

    checks.forEach(([field, pattern, error]) => {
        if (pattern.test(field.value.trim())) {
            field.style.border = "2px solid green";
        } else {
            field.style.border = "2px solid red";
            errors.push(error);
        }
    });

    const message = document.getElementById("message");
    message.style.color = errors.length ? "red" : "green";
    message.innerHTML = errors.length ? errors.join("<br>") : "Registration successful!";
});
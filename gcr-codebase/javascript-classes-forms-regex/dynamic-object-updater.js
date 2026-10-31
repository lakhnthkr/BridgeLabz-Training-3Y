let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

document.body.innerHTML = `
<h2>Update User Details</h2>

<form id="userForm">
    <label>Name:</label>
    <input type="text" id="name" value="${user.name}" required><br><br>

    <label>Email:</label>
    <input type="email" id="email" value="${user.email}" required><br><br>

    <label>Age:</label>
    <input type="number" id="age" value="${user.age}" required><br><br>

    <button type="submit">Update</button>
</form>

<h3>Updated User Details:</h3>
<pre id="result"></pre>
`;

document.getElementById("result").textContent =
    JSON.stringify(user, null, 2);

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    document.getElementById("result").textContent =
        JSON.stringify(user, null, 2);

    console.log("Updated User:", user);
});
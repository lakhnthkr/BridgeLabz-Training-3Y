document.body.innerHTML = `
<h2>Movie Ticket Booking</h2>

<form id="bookingForm">
    <label>Name:</label>
    <input type="text" id="name"><br><br>

    <label>Email:</label>
    <input type="text" id="email"><br><br>

    <label>Seats (1-10):</label>
    <input type="number" id="seats"><br><br>

    <button type="submit">Book Ticket</button>
</form>

<p id="result"></p>
`;

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const result = document.getElementById("result");

    if (!/^[A-Za-z ]+$/.test(name)) {
        result.style.color = "red";
        result.textContent = "Name must contain only alphabets.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        result.style.color = "red";
        result.textContent = "Enter a valid email.";
    } else if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        result.style.color = "red";
        result.textContent = "Seats must be between 1 and 10.";
    } else {
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        result.style.color = "green";
        result.innerHTML = `
            <h3>Booking Successful!</h3>
            Name: ${booking.name}<br>
            Email: ${booking.email}<br>
            Seats: ${booking.seats}
        `;

        console.log("Booking Details:", booking);
    }
});
// Initialize the counter
let count = 0;

function increment() {
    count++;
    console.log("Count: " + count);
}

function decrement() {
    count--;
    console.log("Count: " + count);
}

// Nested function to show access to the outer count variable
function counterDetails() {
    function showCount() {
        console.log("Current Count: " + count);
    }

    showCount();
}

// Simulate button clicks
increment();
increment();
decrement();
counterDetails();
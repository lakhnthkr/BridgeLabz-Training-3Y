"use strict";

function outer() {
    // The outer function has its own variable environment.
    console.log("Outer count:", count);

    var count = 5;

    function inner() {
        // The inner function has its own separate count variable.
        console.log("Inner count:", count);

        var count = 10;

        console.log("Inner count after assignment:", count);
    }

    inner();

    console.log("Outer count after inner:", count);
}

console.log("----- Normal Function -----");
outer();

// Arrow function example.
function outerArrow() {
    var count = 5;

    const innerArrow = () => {
        // This arrow function uses the outer count because it has no local count.
        console.log("Arrow function count:", count);
    };

    innerArrow();
}

console.log("\n----- Arrow Function -----");
outerArrow();
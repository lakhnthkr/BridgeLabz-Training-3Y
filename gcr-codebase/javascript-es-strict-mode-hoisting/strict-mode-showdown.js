// This first function runs without strict mode.
function demoWithoutStrict(a, a) {
    total = 10;

    console.log("Without Strict Mode:");
    console.log("Second parameter:", a);
    console.log("Total:", total);

    delete globalThis.total;
}

demoWithoutStrict(5, 10);

// This function uses strict mode.
function demoWithStrict(a, b) {
    "use strict";

    let total = 10;

    console.log("\nWith Strict Mode:");
    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Total:", total);
}

demoWithStrict(5, 10);
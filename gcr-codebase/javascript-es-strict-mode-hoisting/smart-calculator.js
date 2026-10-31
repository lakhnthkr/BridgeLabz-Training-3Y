"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

function calculate(operation) {
    switch (operation) {
        case "add":
            return num1 + num2;

        case "divide":
            if (num2 === 0) {
                throw new CalculationError("Cannot divide by zero");
            }
            return num1 / num2;

        case "power":
            return Math.pow(num1, num2);

        case "root":
            if (num1 < 0) {
                throw new CalculationError("Cannot calculate square root of a negative number");
            }
            return Math.sqrt(num1);

        case "subtract":
            return num1 - num2;

        default:
            throw new InvalidOperationError("Operation not recognized");
    }
}

console.log("----- Smart Calculator -----");

for (const operation of operations) {
    try {
        const result = calculate(operation);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

// Test an invalid operation.
try {
    calculate("multiply");
} catch (error) {
    console.log(`Error: ${error.name} - ${error.message}`);
}
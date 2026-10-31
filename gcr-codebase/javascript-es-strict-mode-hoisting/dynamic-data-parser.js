"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\nOriginal Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Ignore whitespace-only strings and values that cannot become valid numbers.
    if (
        typeof value === "string" &&
        value.trim() === ""
    ) {
        invalidNumbers.push(value);
    } else if (Number.isNaN(numberValue)) {
        invalidNumbers.push(value);
    } else {
        validNumbers.push(numberValue);
    }
}

console.log("\nValid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    debugger;

    try {
        const parsedData = JSON.parse(rawData[i]);

        if (parsedData.user === undefined || parsedData.age === undefined) {
            throw new Error("Missing user or age property");
        }

        const age = Number(parsedData.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value");
        }

        parsedData.age = age;
        cleanData.push(parsedData);

        console.log(`Line ${i + 1}: Valid JSON`);

    } catch (error) {
        errors.push({
            line: i + 1,
            reason: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

const adults = cleanData.filter(person => person.age >= 18);
const minors = cleanData.filter(person => person.age < 18);

console.log("\n----- JSON Audit Report -----");
console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Adult Users:", adults);
console.log("Under 18 Users:", minors);
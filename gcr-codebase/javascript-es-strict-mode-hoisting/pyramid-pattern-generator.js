"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of rows (press Enter for default 5): ", (input) => {
    const rows = input.trim() === "" ? 5 : Number(input);

    if (!Number.isInteger(rows) || rows < 1) {
        console.log("Please enter a valid positive number.");
        rl.close();
        return;
    }

    console.log("\n----- Pyramid Pattern -----");

    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern);
    }

    rl.close();
});
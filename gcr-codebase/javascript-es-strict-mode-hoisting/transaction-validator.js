"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class TransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "TransactionError";
    }
}

for (const transaction of transactions) {
    debugger;

    try {
        if (transaction === null) {
            throw new TransactionError("Null transaction found");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new TransactionError("Missing transaction ID or amount");
        }

        if (transaction.amount < 0) {
            throw new TransactionError("Negative transaction amount");
        }

        validTransactions.push(transaction);
        console.log("Valid Transaction:", transaction);

    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            reason: error.message
        });

        console.log("Invalid Transaction:", error.message);
    }
}

console.log("\n----- Transaction Report -----");
console.log("Successful Transactions:", validTransactions.length);
console.log("Failed Transactions:", invalidTransactions.length);
console.log("Valid Data:", validTransactions);
console.log("Invalid Data:", invalidTransactions);
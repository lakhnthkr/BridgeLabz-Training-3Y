// Calculate monthly expenses, average, and tax
let expenses = [3000, 1500, 8000, 2000, 1000];

let total = 0;

for (let expense of expenses) {
    total += expense;
}

let average = total / expenses.length;
let finalAmount = total;
finalAmount += total * 0.10;

console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Final Amount with 10% Tax: ₹" + finalAmount.toFixed(2));
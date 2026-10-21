// Generate 8 random scores between 30 and 100
let scores = [];

for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

// Calculate performance details
let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
let passed = scores.filter(score => score >= 50);
let results = scores.map(score => ({
    score: score,
    status: score >= 50 ? "Pass" : "Fail"
}));

console.log("Scores:", scores);
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);
console.log("Average Score:", average.toFixed(2));
console.log("Students Passed:", passed.length);
console.table(results);
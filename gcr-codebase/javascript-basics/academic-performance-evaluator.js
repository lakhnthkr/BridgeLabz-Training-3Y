// Evaluate a student's performance using subject marks
let marks = [90, 85, 78, 88, 92];

let total = 0;
let hasFailed = false;

for (let mark of marks) {
    total += mark;

    if (mark < 35) {
        hasFailed = true;
    }
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log("Average Marks: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (hasFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
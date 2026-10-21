// Global variable
let bonus = 5000;

function calculateSalary(permanentStatus) {
    // Local variables
    let salary = 40000;
    let isPermanent = permanentStatus;

    if (isPermanent) {
        salary += bonus;
    }

    console.log("Permanent Employee: " + isPermanent);
    console.log("Total Salary: ₹" + salary);
    console.log("Global Bonus: ₹" + bonus);
}

calculateSalary(true);
calculateSalary(false);

console.log("Bonus outside function: ₹" + bonus);
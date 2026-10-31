class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Rahul", "IT", 30000),
    new Employee(2, "Aman", "HR", 25000),
    new Employee(3, "Priya", "Finance", 35000),
    new Employee(4, "Neha", "Marketing", 28000),
    new Employee(5, "Rohit", "IT", 40000)
];

employees.forEach(employee => {
    employee.applyBonus(10);
});

employees.forEach(employee => {
    console.log("Employee ID:", employee.id);
    console.log("Name:", employee.name);
    console.log("Department:", employee.department);
    console.log("Monthly Salary:", employee.salary);
    console.log("Annual Salary:", employee.getAnnualSalary());
    console.log("----------------------");
});

const totalPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Company Payout: ₹" + totalPayout);
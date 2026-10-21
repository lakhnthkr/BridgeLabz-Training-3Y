// Store values of different JavaScript data types
let userName = "Lakhan";
let age = 20;
let isStudent = true;
let subjects = ["Java", "HTML", "CSS"];
let user = { city: "Mathura" };
let address = null;
let phoneNumber;

let data = [
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "User", value: user, type: typeof user },
    { label: "Address", value: address, type: "null" },
    { label: "Phone", value: phoneNumber, type: typeof phoneNumber }
];

console.table(data);
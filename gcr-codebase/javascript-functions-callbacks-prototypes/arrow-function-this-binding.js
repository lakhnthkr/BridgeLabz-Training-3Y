const user = {
    name: "Lakhan",

    showName: () => {
        console.log(this.name);
    }
};

console.log("Using Arrow Function:");
user.showName();

console.log("Arrow function does not have its own this.");

user.showName = function() {
    console.log(this.name);
};

console.log("Using Normal Function:");
user.showName();
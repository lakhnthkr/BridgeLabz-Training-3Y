Array.prototype.myMap = function(callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const numbers = [1, 2, 3];

const doubledNumbers = numbers.myMap(function(num) {
    return num * 2;
});

const squaredNumbers = numbers.myMap(function(num) {
    return num * num;
});

console.log("Original Array:", numbers);
console.log("Doubled Array:", doubledNumbers);
console.log("Squared Array:", squaredNumbers);
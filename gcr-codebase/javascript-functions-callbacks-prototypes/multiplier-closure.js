function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const quadruple = makeMultiplier(4);

console.log(triple(5));
console.log(double(5));
console.log(quadruple(5));
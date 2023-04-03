let array = [2, 4, 1, 3, 0, null, true, "b"];
let twoCount = 0;
let oneCount = 0;
let zeroCount = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        if (array[i] === 0) {
            zeroCount++;
        } else if (array[i] % 2 === 0) {
            twoCount++;
        } else {
            oneCount++;
        }
    }
}

console.log("Чётные числа: " + twoCount);
console.log("Нечётные числа: " + oneCount);
console.log("Нулей: " + zeroCount);
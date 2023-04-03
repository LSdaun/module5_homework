let input = prompt("Введите значение:");
let num = +input;

if (typeof num === "number" && !isNaN(num)) {
    if (num % 2 === 0) {
        console.log("Число чётное");
    } else {
        console.log("Число нечётное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}
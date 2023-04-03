const myMap = new Map([
    ['frenchBulldog', 6],
    ['beagle', 7],
    ['pug', 8]
]);

for (let [key, value] of myMap) {
    console.log(`Ключ — ${key}, значение — ${value}`);
}
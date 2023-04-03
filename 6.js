let array = [5, 5, 5, 5, 4];
let count = array.length;
let equal = true;
for (let i = 0; i < count-1; i++) {
    if(array[i] !== array[i+1]) {
        equal = false;
        break;
    }
}
console.log(equal);
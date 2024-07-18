// multidimentional arrays
let mArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(mArr);
console.log(...mArr);
console.log();

mArr.forEach(arr => console.log(arr));
console.log();

mArr.forEach(arr => console.log(...arr));
console.log();

console.log(mArr[1][1]);
// map filter reduce
let nums = [1, 2, 3, 4, 5];

let newArr = nums.map(num => num * 2);
console.log(newArr);

newArr = nums.filter(num => num % 2 != 0)
console.log(newArr);

const total = nums.reduce((acc, curr) => acc + curr, 0); // 0 is the initial value for accumulator
console.log(total);
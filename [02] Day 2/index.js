// arithmetic operators
console.log("arithmetic operator");
console.log(13 + 7);
console.log(13 - 7);
console.log(13 * 7);
console.log(14 / 7);
console.log(13 % 7);

// assignement operators
console.log("\nassignment operator");
let num = 10;
num += 10;
console.log(num);

num -= 10;
console.log(num);

// comparison operators
console.log("\ncomparison operator");
let num1 = 10;
let num2 = 20;

console.log(num1 > num2);
console.log(num1 < num2);

num1 = num2;
console.log(num1 >= num2);
console.log(num1 <= num2);

num1 = 10;
let num3 = "10";
console.log(num1 == num3);
console.log(num1 === num3);

// logical operator
console.log("\nlogical operator");
let isTrue = true;
let isFalse = true;

console.log(isTrue && isFalse);
console.log(isTrue && !isFalse); // true and false ==> false
console.log(!isTrue && isFalse) // if 1st condition is false then it doesn't check for further conditions

console.log(isTrue || isFalse);
console.log(!isTrue || isFalse); // 1st condition is false but it will still check for further conditionsl
console.log(!isTrue || !isFalse); // both are false ==> false

let isCorrect = true;
console.log("iscorrect? ", isCorrect);
console.log("iscorrect? ", !isCorrect);

// ternary operator
console.log("\nternary operator");
// is it a even number?
console.log(12 % 2 == 0? true: false);
console.log(12 & 1 == 1? false: true);

console.log(13 % 2 == 0? true: false);
console.log(13 & 1 == 1? false: true); 

// is it a positive number?
console.log(12 > 0? true: false);
console.log(-2 > 0? true: false);
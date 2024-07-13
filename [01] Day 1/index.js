var rollNo = 13;
console.log(rollNo);

let fruit = "mango";
console.log(fruit);

const isTrue = true;
console.log(isTrue);

// variable of each datatypes -->
let num = 13;
let str = "mango";
let isFalse = false;
let obj = {};
let arr = [];

console.log("type of: ", typeof(num));
console.log("type of: ", typeof(str));
console.log("type of: ", typeof(isFalse));
console.log("type of: ", typeof(obj));
console.log("type of: ", typeof(arr));

// re-assigning
let conglomerates = "samsung";
conglomerates = "hyundai";
console.log(conglomerates);

const newNum = 5;
newNum = 8; // TypeError: Assignment to constant variable.
console.log(newNum);
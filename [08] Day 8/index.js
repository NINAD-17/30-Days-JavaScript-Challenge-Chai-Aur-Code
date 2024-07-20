// 1. template literals
let name = "Lee Jae-Yong";
let age = 55;
console.log(`name is ${name} and age is ${age}`);

let song = "That's my life is beautiful galaxy, \
be a rider genre is a fantacy"; // it will not print this line to the next line without '\n' char
console.log(song);

// 2. multi-line string using template literal
let newSong = `That's my life is beautiful galaxy,
be a rider genre is a fantacy`;
console.log(newSong);

// 3. destructuring
// --> array destructuring
let arr = [1, 2, 3, 4, 5];
let [first, second] = arr;
console.log(first, second);

// skipping elements in array destructuring
let [a1, a2, , , a5] = arr;
console.log(a1, a2, a5);

// --> object destructuring
let book = {
    title: "Atomic Habits",
    author: "James Clear"
}

let {title, author: writer, pages = 0} = book;
console.log(title, writer, pages);


// 4. Spread and rest operators
let newArr = [10, 11, 12];
let spreadArrays = [...arr, ...newArr]; // spread operator
console.log(spreadArrays);


let sum = (...nums) => { // rest operator
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));


// 5. default parameters
let prod = (num1, num2 = 1) => {
    return num1 * num2;
}

console.log(prod(12, 12));
console.log(prod(12));


// 6. Enhanced Object Literals
// Object literal enhancement is used to group variables from the global scope and form them into javascript objects. It is the process of restructuring or putting back together.
let songName = "Butter";
let singers = "BTS";
let label = "Hybe";
let releasedYear = 2021;
let printSomeLines = function() {
    console.log("Smooth like butter..." + `- ${this.singers}`);
}

let music = {songName, singers, label, releasedYear, printSomeLines};
console.log(music);
music.printSomeLines();

// --> computed property names
// In JavaScript, computed property names allow you to dynamically compute the names of object properties within object literal notation.
const key = "name";
const value = "Atta";
const user = { [`${key}34`]: value };
console.log(user.name34); // Atta

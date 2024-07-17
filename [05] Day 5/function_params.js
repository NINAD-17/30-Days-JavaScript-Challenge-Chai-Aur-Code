// Function parameters and default values
function mult(num1, num2 = 5) {
    return num1 * num2;
}

console.log(mult(3, 4));
console.log(mult(3));

function greet(name, age = 18) {
    return `Hello ${name}! Your age is ${age}`;
}

console.log(greet("Jay Yong"));
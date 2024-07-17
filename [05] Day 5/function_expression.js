// function expression
// It is a function defined within an expression, such as a variable assignment.
// they are not hoisted, which means they cannot be called before they are defined in the script

let max = function(num1, num2) {
    if(num1 > num2)
        return num1;
    else 
        return num2;
}

console.log(max(5, 4));

// Function expressions can be anonymous, as shown above, or named, which can be useful for recursion or more readable stack traces.
let factorial = function solve(num) {
    if(num == 0) return 1; // base case

    return solve(num - 1) * num;
}

console.log(factorial(5));

let concatStr = function(str1, str2) {
    // return str1 + " " + str2;
    return str1.concat(str2);
}

console.log(concatStr("Hello ", "world"));
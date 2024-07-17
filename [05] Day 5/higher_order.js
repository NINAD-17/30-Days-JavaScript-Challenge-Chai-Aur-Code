// Higher order functions
// In JavaScript, functions are passed by reference.
// When you pass a function as an argument, you’re actually passing a reference to the function in memory.
// So, in the context of higherOrderFunc, func refers to the same function as msg.
// Any changes made to func (such as invoking it) will affect the original msg function.
function msg() {
    console.log("hello");
}

function higherOrderFunc(func, num) {
    while(num--)
        func();
}

higherOrderFunc(msg, 5);


// 2nd question
function incr(num) {
    return ++num;
}

function mult(num) {
    return num * 2;
}

function highOrFunc(func1, func2, num) {
    let result = func1(num);
    return func2(result);
}

console.log(highOrFunc(incr, mult, 5));


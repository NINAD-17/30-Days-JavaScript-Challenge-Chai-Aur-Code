// function declaration:
// One of the key characteristics of function declarations is that they are hoisted, meaning they are available in their entire scope, even before they are defined.
function checkEvenOdd(num) {
    if(num % 2 == 0) 
        console.log("even");
    else 
        console.log("odd");
}

checkEvenOdd(5);

function findSquare(num) {
    return num * num;
}

console.log(findSquare(5));
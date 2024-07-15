// if-else
let num = -10;
if(num === 0)
    console.log("zero");
else if(num > 0)
    console.log("positive");
else
    console.log("negetive");

let age = 18;
if(age >= 18)
    console.log("eligible for vote");
else 
    console.log("not-eligible");

// nested if else
let num1 = 10;
let num2 = 30;
let num3 = 20;

if(num1 > num2) {
    if(num1 > num3) 
        console.log("num1: ", num1);
    else
        console.log("num3: ", num3);
} else {
    if(num2 > num3)
        console.log("num2: ", num2);
    else
        console.log("num3: ", num3);
}

// switch
// let day = 2;
let day = new Date().getDay();
console.log(day);

switch(day) {
    case 0: console.log("Sunday");
            break;
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wednsday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("Friday");
            break;
    case 6: console.log("Saturday");
            break;
    default: console.log("Not a valid day");
}

let score = 30;

switch(true) { // instead of switch(score)
    case score < 20: console.log("E");
                     break;
    case (score < 40 && score >= 20): console.log("D");
                     break;
    case score < 60 && score >= 40: console.log("C");
                     break;
    case score < 80 && score >= 60: console.log("B");
                     break;
    case score >= 80: console.log("A");
                     break;
    default: console.log("enter valid score");
}
// note for above code: 
// When you use switch (true), the switch expression evaluates to true. This means that the case statements are compared against the value true. Since none of your case conditions match true, the default case is executed.
// However, when you use switch (score), the switch expression evaluates to the value of the score variable (in your case, 30). Now the case conditions are compared against this numeric value, and the correct case (D) is executed.
// So, in summary:
// switch (true) compares against the boolean value true.
// switch (score) compares against the actual value of score


// ternary operator
console.log(30 % 2 == 0? true: false); // even = true


// combining multiple conditions
let year = 2020;
if(year % 4 == 0) {
    if(year % 100 === 0) {
        if(year % 400 === 0)
            console.log("leap");
        else 
            console.log("not a leap");
    } else 
        console.log("leap");
} else {
    console.log("not a leap");
}
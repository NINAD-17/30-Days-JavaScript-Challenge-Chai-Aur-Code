// for loop
for(let i = 1; i <= 10; i++) {
    // console.log(i, " ");
    process.stdout.write(i + " ");
    // Using process.stdout.write() instead of console.log() ensures that there’s no newline added after each iteration. Now your output will be a single line with the numbers separated by spaces.
}

console.log(); // for line break

for(let i = 1; i <= 10; i++) {
    // console.log(5 * i);
    process.stdout.write(5 * i + " ");
}

// while loop
let sum = 0, nums = 10;
while(nums) {
    sum += nums;
    nums--;
}
console.log("\n", sum);

nums = 10;
while(nums) {
    process.stdout.write(nums + " ");
    nums--;
}

// do while loop
console.log();
let i = 1;
do {
    process.stdout.write(i + " ");
    i++;
} while(i <= 5);

// factorial
console.log();
let num = 5, ans = 1;
do {
    ans *= num;
    num--;
} while(num > 1);
console.log(ans);

// pattern
for(let i = 0; i < 5; i++) {
    let str = "";
    for(let j = 0; j <= i; j++) {
        // process.stdout.write("* ");
        str += "* ";
    }
    // console.log();
    console.log(str);
}

// loop controlled statements
i = 1;
while(i <= 10) {
    if(i == 5) {
        i++;
        continue;
    }
    process.stdout.write(i + " ");
    i++;
}

i = 1;
console.log();
while(i <= 10) {
    if(i == 7)
        break;
    process.stdout.write(i + " ");
    i++;
}
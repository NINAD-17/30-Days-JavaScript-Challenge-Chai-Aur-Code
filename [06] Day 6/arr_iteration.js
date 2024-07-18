let nums = [10, 20, 30, 40, 50];

for(let i = 0; i < nums.length; i++)
    process.stdout.write(nums[i] + " ");
console.log();

nums.forEach(num => process.stdout.write(num + " "));
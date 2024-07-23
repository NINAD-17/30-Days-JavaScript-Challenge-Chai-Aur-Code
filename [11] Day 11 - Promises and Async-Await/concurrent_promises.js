// promise.all
// The Promise.all() method is actually a method of the Promise object
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello");
    }, 4000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("world");
    }, 1000);
});

// here, it will take 4 sec to print both because promise.all waits till all the promises resolved
let promisesArr = [promise1, promise2];
Promise.all(promisesArr)
.then(response => {
    console.log(response);
});

// rejection: 
// If any of the input promises reject, Promise.all immediately rejects with the reason of the first promise that rejects.
// It does not wait for the other promises to complete.
const promise3 = Promise.resolve(3);
const promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'error');
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'foo');
});

Promise.all([promise3, promise4, promise5]).then(values => {
    console.log(values);
}).catch(error => {
    console.error(error); // "error"
});


// ---> promise.race
// Promise.race takes an iterable of promises and returns a single promise.
// This returned promise resolves or rejects as soon as one of the input promises resolves or rejects.
// The Promise.race() method returns a Promise from a list of promises, when the faster promise settles.
// Useful when you need the result of the fastest promise, regardless of the outcome of the others.
// It does not wait for the other promises to complete.
const promise7 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
const promise8 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise7, promise8]).then(value => {
    console.log(value); // "two"
}).catch(error => {
    console.error(error);
});
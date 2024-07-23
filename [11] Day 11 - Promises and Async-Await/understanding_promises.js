const promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Promise is resolved after 2 seconds");
    }, 2000);
});

promise1.then((data) => {
    console.log(data);
});

promise1.catch(() => {
    console.log("Error: promise rejected");
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("error occured after 4 sec");
    }, 4000);
}).then(function(resolve) {
    console.log(resolve);
}).catch(function(err) {
    console.log(err);
});

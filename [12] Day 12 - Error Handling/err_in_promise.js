let random = Math.floor(Math.random() * 2);
console.log("promise: ", random);

const promise = new Promise((resolve, reject) => {
    if(random) {
        resolve("promise is successfully resolved");
    } else {
        reject("error occured while resolving the promise");
    }
});

promise.then(response => {
    console.log(response);
});

promise.catch(err => {
    console.log(err);
});

const handle = async() => {
    try {
        const response = await promise;
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

handle();
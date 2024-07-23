const promise = new Promise((resolve, reject) => {
    let err = false;
    if(!err) {
        resolve('{"message": "data from the server received"}');
    } else {
        reject("error occured");
    }
});

async function consumePromise() {
    try {
        const response = await promise; // promise is an object
        const data = await JSON.parse(response);
        console.log(data);
    } catch(err) {
        console.log("error occured");
    }
}

consumePromise();
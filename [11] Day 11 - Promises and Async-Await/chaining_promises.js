new Promise((resolve, reject) => {
    let error = false;
    if(!error) {
        resolve('{"message": "data from the server received"}'); // Simulating JSON data from server
    } else {
        reject("error occured");
    }
}).then(response => {
    console.log(response);
    return JSON.parse(response); // convert to json format
}).then((data) => {
    console.log("data received in JSON format: ", data);
}).catch(err => {
    console.log(err);
}); 
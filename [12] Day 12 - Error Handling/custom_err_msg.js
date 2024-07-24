class CustomErr extends Error {
    constructor(message) {
        super(message);
        this.name = "*Custom Error: ";
    }
}

function riskyFunction() {
    let errorOccured = true;
    if(errorOccured) {
        throw new CustomErr("something went wrong in riskyFunction()");
    }
    return "function executed successfully";
}

try {
    let result = riskyFunction();
    console.log(result);
} catch(err) {
    if(err instanceof CustomErr) 
        console.log("Caught a custom error: ", err.name, err.message);
    else 
        console.log("An unexpected error occured: ", err);
}


// validation of input
let input = "";

try {
    if(!input) {
        throw new CustomErr("string is empty");
    }
} catch(err) {
    console.log(err);
}
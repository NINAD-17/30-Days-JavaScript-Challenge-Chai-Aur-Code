function handle() {
    try {
        cout << endl;
    } catch(err) {
        console.log("1: ", err);
    }
}

handle();

function divideRes(numerator, denominator) {
    try {
        if(denominator == 0)
            throw "denominator is zero :(";
        
        console.log(numerator / denominator);
    } catch(err) {
        console.log("2: ", err);
    }
}

// divideRes(4, 5);
divideRes(4, 0);
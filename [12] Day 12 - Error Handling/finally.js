function finallyBlock() {
    try {
        console.log("Hello");
        consol.log("helo"); // error
    } catch(err) {
        console.log(err);
    } finally {
        console.log("no matter what (error or success) I will execute :)");
    }
}

finallyBlock();
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,

    printInfo: function() {
        console.log(this.title, this.author);
    }
}

console.log(book);
console.log(book.title, "\n", book.author);
console.log(book["title"], "\n", book["author"]);

book.printInfo();

// book.printYear = () => {
//     console.log("printing year: ");
//     console.log(this.year);
//     // NOTE: In JavaScript, arrow functions do not have their own this context; they inherit this from the surrounding lexical context. In this case, this inside printYear does not refer to the book object, which is why this.year is undefined.
// }

book.printYear = function() {
    console.log(this.year);
}

console.log(book.printYear());

if(!book.hasOwnProperty("setYear")) {
    book.setYear = function(year) {
        this.year = year;
    }
}

book.setYear(2008);
console.log(book.printYear()); // here undefined is return value. as the function doesn't return any value.
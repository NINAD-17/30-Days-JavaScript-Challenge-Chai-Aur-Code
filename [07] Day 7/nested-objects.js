const library = {
    name: "central library",
    books: [
        {
            name: "atomic habits",
            author: "james clear",
            year: 2018
        },
        {
            name: "rich dad poor dad",
            author: "robert kiyosaki",
            year: 2008
        }
    ]
}

console.log(library);

console.log(library.name);

library?.books.forEach((book) => console.log(book.name));


library?.books.forEach(book => {
    if(!book.hasOwnProperty("printInfo")) {
        book.printInfo = function() {
            console.log(this.name, this.year);
        }
    }
});

console.log("printing info:");
library?.books[1].printInfo();


// loops
console.log("\n--------------loops: ");
for(let book in library?.books) {
    console.log(Object.entries(library?.books[book]));
}

// or you can use without using entries()
for(let i = 0; i < library.books.length; i++) {
    let book = library.books[i];

    for(let key in book) { // all the keys in book object
        if(book.hasOwnProperty(key)) {
            console.log(`${key} --> ${book[key]}`);
        }
    }
    console.log();
}


console.log("printing all the keys and values of library books");
library?.books.forEach(book => {
    console.log(Object.keys(book));
    console.log(Object.values(book));
    console.log();
})
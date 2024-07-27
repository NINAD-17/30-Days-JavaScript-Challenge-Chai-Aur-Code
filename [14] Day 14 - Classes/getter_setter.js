class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    greet() {
        return `Hello ${this.fname}, thank you for registering`;
    }

    get firstName() {
        return this.fname;
    }

    get lastName() {
        return this.lname;
    }

    get fullName() {
        return `${this.fname} ${this.lname}`;
    }

    set firstName(fname) {
        this.fname = fname;
    }

    set lastName(lname) {
        this.lname = lname;
    }
}

let newPerson = new Person("namjoon", "kim", 30);
console.log(newPerson.fullName);

newPerson.firstName = "yoongi";
newPerson.lastName = "min";
console.log(newPerson.fullName);
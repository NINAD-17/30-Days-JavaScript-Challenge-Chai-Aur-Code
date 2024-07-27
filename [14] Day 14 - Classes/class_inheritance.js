class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}, thank you for registering`;
    }
}

class Student extends Person {
    constructor(name, age) {
        super(name, age);
        this.studId = Math.random();
    }

    getStudId() {
        console.log(this.name);
        return this.studId;
    }

    // method overriding
    greet() {
        return `Hello ${this.name}, your studentId is ${this.studId}`;
    }
}

let newStudent = new Student("kim", 16);
console.log(newStudent.getStudId());
console.log(newStudent.greet());
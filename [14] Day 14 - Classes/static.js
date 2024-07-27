class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.fname}, thank you for registering`;
    }

    static genericGreeting() {
        return `welcome to our community`;
    }
}

console.log(Person.genericGreeting());

class Student {
    static studentCount = 0;

    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        Student.studentCount++;
    }
}

const stud1 = new Student("john", "doe", 20);
const stud2 = new Student("kim", "nam", 30);

console.log(`total students: ${Student.studentCount}`);
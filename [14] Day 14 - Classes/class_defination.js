class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello ${this.name}, thank you for registering`;
    }

    updateAge(age) {
        this.age = age;
        console.log(`new age is ${this.age}`);
    }
}

let newPerson = new Person("kim", 28);
console.log((newPerson.greet()));
newPerson.updateAge(30);
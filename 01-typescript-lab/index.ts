class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} says hello!`
    }
}

const person = new Person('Nikolai');
console.log(person.sayHello());

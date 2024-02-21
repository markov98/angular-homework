var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "".concat(this.name, " says hello!");
    };
    return Person;
}());
var person = new Person('Nikolai');
console.log(person.sayHello());

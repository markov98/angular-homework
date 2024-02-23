abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        if (this.tasks.length === 0) {
            console.log(this.name + " has no tasks.");
            return;
        }

        const currTask = this.tasks.shift()!;
        this.tasks.push(currTask);
        console.log(this.name + " is working on " + currTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.salary} this month.`);

    }

    public getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a simple task!');
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(' is working on a complex task!');
        this.tasks.push(' supervising junior workers.');
        this.tasks.push(' is taking time off work.');
    }
}

class Maneger extends Employee {
    public divident: number;
    constructor(name: string, age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}


class Person {
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }
}


class Employee {
    constructor(name, age, add, job){

    }

    toString() {
        console.log(`[Employee] name=${this.name} age=${this.age} add=${this.add} job=${this.job}`);
    }
}


let hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();



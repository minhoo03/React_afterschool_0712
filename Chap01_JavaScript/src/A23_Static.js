

class User {
    constructor(name) {
        this.name = name;
        this.kor = 100;
    }

    sayHello() {
        console.log(`sayHello()=> ${this.name} / ${this.kor}`);
    }

}


let nolbu = new User('NolBu');
nolbu.sayHello();


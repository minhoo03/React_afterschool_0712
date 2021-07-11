
class One {}
class Two {
    constructor(){}
}
class Three {
    constructor(name){}
}

let one = new One();
let two = new Two();
let three = new Three('NolBu');


// 클래스 맴버 변수
class Four {
    constructor(name) {
        this.name = name;
    }

    sayHello(){
        console.log(`sayHello ${this.name}`);
    }
}

let four = new Four('HungBu');
four.sayHello();




(function(){

    let obj = {
        name: 'NolBu',
        age: 30
    }

    let ary = ['A', 'B', 'C'];
    console.log(obj, ary);

    
    // Object
    // let name = obj.name
    // let age = obj.age
    // console.log(name, age)

    let { name: nickname, age } = obj
    console.log(nickname, age)

    // Array

    
})();

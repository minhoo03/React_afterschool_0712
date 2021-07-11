
(function(){

    var name = 'NolBu';
    console.log('Name: ' + name);

    name = 'HungBu';
    console.log('Name: ' + name);


    var sayHello = function() {
        console.log('Say Hello One');
    }

    var sayHello = function() {
        console.log('Say Hello Two');
    }

    sayHello();
    console.log('');

    // Object
    var list = [10, 20, 30];
    list = [1, 2, 3];

    list[1] = 11;
    console.log(list);


    var obj = {
        name: 'NolBu',
        age: 20
    }

    obj = { address: 'Seoul' };

    obj.age = 30;
    console.log(obj);

})();
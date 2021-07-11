
// ES6. let keyword
(function(){

    sayHello();
    console.log('Name: ' + name);

    var name = "NolBu";
    console.log('Name: ' + name);
    console.log('');
    

    function sayHello() {
        var name = 'HungBu';
        console.log('Fn Inner: ' + name);   
    }

    sayHello();
    console.log('Name: ' + name);
    console.log('');
    
    // Scope
    {
        var name = 'BangJa';
        var age = 18;
    }

    console.log('Name: ' + name);
    console.log('Age: ' + age);
    console.log('')

    if(true) {
        var name = 'HangDan';
    }
    console.log('Name: ' + name);

    for(var i = 0; i < 3; i++){ }
    console.log('i: ' + i);

})();

(function(){

    // ES5

    var name = 'NolBu';
    console.log('name=> ' + name);

    var x = 10;
    {
        console.log('x=> ' + x);
        var x = 20;
    }
    console.log('x=> ' + x);
    console.log('');

    var y;
    console.log('y=> ' + y);
    console.log('');


    // ES6
    
    let z = 'Hello';
    console.log('z=> ' + z);

    let num = 1;
    {
        let num = 2;
        console.log('num=> ' + num);
    }
    console.log('num=> ' + num);
    console.log('');


    let n;
    console.log('n=> ' + n);

})();

// ES6
(function(){

    function generator(x) {
        console.log(`Inner 1: ${x}`);
        return x;

        x = x + ' - Hello';
        console.log(`Inner 2: ${x}`);
        return x;

        x = x + ' - World';
        console.log(`Inner 3: ${x}`);
    }

    console.log(generator(10));


})();
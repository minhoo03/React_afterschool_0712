
(function(){

    // ES5
    function argumentFun(x){
        console.log(`x=> ${x}`);
        console.log(`length: `);

        let total = 0;
        
        console.log(`Total: ${total}`);
    }

    argumentFun('Value', 10, 20, 30, 'A');
    console.log('');


    // ES6
    function restFun(y){
        console.log(`y=> ${y}`);
        console.log(`length: `);

        let total = 0;
        
        console.log(`Total: ${total}`);
    }

    restFun('Value', 10, 20, 30, 'A');


})();
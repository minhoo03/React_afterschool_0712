
// ES6
(function(){

    console.log(...[10, 11, 100]);
    console.log(...'NolBu');
    console.log('');


    function spreadFun(a, b, c, d, e, ...rest) {
        console.log(`a => ${a}`);
        console.log(`b => ${b}`);
        console.log(`c => ${c}`);
        console.log(`d => ${d}`);
        console.log(`e => ${e}`);
        console.log(`rest => ${rest} / ${rest.length}`);
    }
    spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
    console.log('')


    function fun(x, y, z) {
        console.log(`${x}, ${y}, ${z}`);
    }

    let value = new Set([1, 2, 2, 3]);
    console.log(value);

    fun(...new Set([1, 2, 2, 3]));
    console.log('');


    let aryOne = [10, 20, 30];
    var aryTwo = [1, 2, 3, ...aryOne];
    console.log(aryTwo);
    console.log('');


    // Object
    let objOne = {
        id: 1,
        name: 'NolBu'
    };

    let objTwo = {
        id: 10,
        address: 'Seoul',
        ...objOne
    }
    console.log(objTwo);


    let objThree = {
        id: 1,
        name: 'NolBu'
    };

    let objFour = {
        ...objThree,
        id: 10,
        address: 'Seoul',
    }

    console.log(objFour);

})();
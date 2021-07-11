
(function(){

    // Class 객체
    function normalFun() {
        console.log('Normal Function');
        this.onAdd = (x, y) => x + y;
    }
    
    let normal = new normalFun();
    console.log(normal.onAdd(10, 20));
    console.log('');


    // Arrow 함수
    let arrowFun = () => {
        console.log('Arrow Function');

        let onMin = (x, y) => x - y;
        console.log(onMin(10, 3))
    }

    arrowFun();

})();
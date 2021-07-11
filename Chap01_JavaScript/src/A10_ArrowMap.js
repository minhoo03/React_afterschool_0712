
(function(){

    let ary = [10, 11, 100, 101, 1000];

    let onAdd = ary.map(function(x){
        return x + 1;
    });
    console.log(onAdd);

    let onMin = ary.map(function(x, i){
        return {index: i, value: x - 1};
    })
    console.log(onMin);


    // Arrow 함수 이용.
    

})();

// ES5. var keyword
(function(){

    var name = "NolBu";
    console.log('Name: ' + name); 

    function sayHello() {
        var name = 'HungBu';
        console.log('Fn Inner: ' + name);   
    }

    sayHello(); 
    

})();
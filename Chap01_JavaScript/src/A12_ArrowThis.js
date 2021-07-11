
(function(){

    function NormalFun(now){
        this.today = now;
        console.log(`Normal=> ${this.today.toLocaleString()}` );

        
    }

    function ArrowFun(now){
        this.today = now;
        console.log(`Arrow=> ${this.today.toLocaleString()}` );

        
    }

    let now = new Date();



})();
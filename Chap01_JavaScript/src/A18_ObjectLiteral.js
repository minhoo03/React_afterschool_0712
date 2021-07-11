

(function(){
    let y = 'Hello';

    // ES5
    let objOne = {
        x: 10,
        y: y,
        toString: function(){
            console.log(`[objOne] x=${this.x}, y=${this.y}`);
        }
    }

    // ES6
    let objTwo = {
        x: 100,
        y: y,
        toString(){
            console.log(`[objTwo] x=${this.x}, y=${this.y}`);
        }
    }

    objOne.toString();
    objTwo.toString();
    console.log('');


    // ES5. Object 상속
    let objThree;
    
    objThree.z = true;
    objThree.toString = function(){
        console.log(`[objThree] x=${this.x}, y=${this.y}, z=${this.z}`);
    }

    objThree.toString();


    // ES6.
    let objFour;


})();


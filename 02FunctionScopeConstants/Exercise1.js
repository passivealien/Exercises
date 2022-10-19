'use strict';
var guessMe1 = 1;
let guessMe2 = 2;
    {
    try {
            console.log( guessMe1, guessMe2 ); // (A)guessMe1 = undefined, there is no value assigned, guessMe2 = undefined, uses "let" yet there is no value assigned
        // eslint-disable-next-line no-empty
        } catch( _ ) {}
        let guessMe2 = 3;
        console.log( guessMe1, guessMe2 ); // (B)guessMe1 = 1 uses the value from line 1, guessMe2 = 3, uses the value assigned inside the block
    }
console.log( guessMe1, guessMe2 ); // (C) guessMe1 = 1, guessMe2 = 2, it uses the values from lines 1 and 2
    () => {
            console.log( guessMe1 ); // (D) inside a block with no direction
            var guessMe1 = 5;
            let guessMe2 = 6;
            console.log( guessMe1, guessMe2 ); // (E)
        };
console.log( guessMe1, guessMe2 ); // (F) guessMe1 = 1, guessMe2 = 2, it uses the values from lines 1 and 2

let display = () => {
    console.log("(A)guessMe1 = undefined, there is no value assigned, guessMe2 = undefined, uses let yet there is no value assigned")
    console.log("(B)guessMe1 = 1 uses the value from line 1, guessMe2 = 3, uses the value assigned inside the block")
    console.log("(C)guessMe1 = 1, guessMe2 = 2, it uses the values from lines 1 and 2")
    console.log("(D) inside a block with no direction")
    console.log("")
    console.log("(F) guessMe1 = 1, guessMe2 = 2, it uses the values from lines 1 and 2")
}

export default display

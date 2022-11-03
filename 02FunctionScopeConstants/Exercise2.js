var guessMe1 = 1;
let guessMe2 = 2;
    {
        let guessMe2 = 3;
    try {
            console.log( guessMe1, guessMe2 );
        } catch( _ ) {
            return
        }
        ( guessMe1, guessMe2 ); 
    }
console.log( guessMe1, guessMe2 );
    (() => {
            var guessMe1 = 5;
            let guessMe2 = 6;
            console.log( guessMe1 ); 
            console.log( guessMe1, guessMe2 );
        })() ;
console.log( guessMe1, guessMe2 );

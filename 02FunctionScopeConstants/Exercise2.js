let display = () => {
    var guessMe1 = 1;
    let guessMe2 = 2;
        {
            let guessMe2 = 3;
        try {
                // eslint-disable-next-line no-undef
                a = ( {guessMe1}, {guessMe2} ); 
            // eslint-disable-next-line no-empty
            } catch( _ ) {}
            
            //console.log( guessMe1, guessMe2 ); 
        }
    console.log( guessMe1, guessMe2 );
        (() => {
                var guessMe1 = 5;
                let guessMe2 = 6;
                console.log( guessMe1 ); 
                console.log( guessMe1, guessMe2 );
            })() ;
    console.log( guessMe1, guessMe2 );
}
export default display

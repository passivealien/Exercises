//const message = function() {  
//    console.log("done");
//}
//setTimeout(message, 500);

let display = () => {
    function executeCallback( callback, delay = 1000 ) {
        setTimeout( callback, delay );
        }
    executeCallback( () => console.log('Prompt after 1 second delay') );
    }
    export default display

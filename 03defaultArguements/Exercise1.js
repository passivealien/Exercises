function executeCallback( callback, delay = 1000 ) {
        setTimeout( callback, delay );
    }
executeCallback( () => console.log('Prompt after 1 second delay') );

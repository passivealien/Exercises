let message = 'ok';
    let messageIterator = message[Symbol.iterator]();
    messageIterator.next();
    for ( let item of messageIterator ) {
        console.log( 'the remaining element which is "', item, '" is being printed' );
    }

function *fibonacci() {
    let a = 0, b = 1;
    yield a;
    yield b;
    while( true ) {
    [a, b] = [b, a+b];
    yield b;
    }
    }
    

function *filter( iterable, filterFunction ) {
    for( let element of iterable ) {
    if ( filterFunction( element ) ) yield element;
    }
    }
    let evenFibonacci = filter( fibonacci(), x => x%2 === 0 );
    
console.log(evenFibonacci.next())
console.log(evenFibonacci.next())
console.log(evenFibonacci.next())
console.log(evenFibonacci.next())
console.log(evenFibonacci.next())

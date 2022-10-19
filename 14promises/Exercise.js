// let promisePaymentAmount = Promise.resolve( 50 );
// promisePaymentAmount.then( ( amount ) => {
//     amount *= 1.25;
//     console.log( 'amount * 1.25: ', amount );
// } ).then( ( amount ) => {
//     console.log( 'amount: ', amount );
// } );
// let promiseIntro = new Promise( function( resolve, reject ) {
//     setTimeout( () => reject( 'Error demo' ), 500 );
// });
// promiseIntro.then( null, error => console.log( error ) );

//==========================================================

// var p = Promise.resolve( 5 );
// p.then( ( value ) => console.log( 'Value:', value ) )
// .then( () => { throw new Error('Error in second handler' ) } )
// .catch( ( error ) => console.log( 'Error: ', error.toString() ) );
//=========================================================\


// var loan1 = new Promise( (resolve, reject) => {
//     setTimeout( () => resolve( 110 ) , 500 );
// });
//     var loan2 = new Promise((resolve, reject) => {
//     setTimeout( () => resolve( 120 ) , 100 );
// });
//     var loan3 = new Promise( (resolve, reject) => {
//     reject( 'Bankrupt' );
// });
//     Promise.all([ loan1, loan2, loan3 ]).then( value => {
//     console.log(value);
// }, reason => {
//     console.log(reason);
//     } );
//============================================

 



let parse = function( response ) {
    let element = document.querySelector( '.js-names' );
    element.innerHTML = JSON.parse( response ).map( element => element.name ).join(',');
}
let errorHandler = function() {
    console.log( 'error' );
}
let p = new Promise( function( resolve, reject ) {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if ( this.status === 200 && this.readyState === 4 ) {
            resolve( this.response );
        }
    }

    request.onerror = function() {
        reject( new Error( this.statusText ) );
    }

    request.open( 'GET', 'https://jsonplaceholder.typicode.com/users' );
    request.send();
} ).then( parse ).catch( errorHandler );

p.then((message) => {
    console.log(message + " is a success")
}).catch((message) => {
    console.log(message + " has failed")
})
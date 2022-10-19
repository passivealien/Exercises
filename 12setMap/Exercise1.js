// let colors = new Set();
// colors.add( 'red' );
// colors.add( 'green' );
// colors.add( 'red' ); // duplicate elements are added only once
// console.log( colors );
// console.log( colors.size );
// console.log( colors.has( 'green' ), colors.has( 'blue' ) );
// let moreColors = new Set( ['red', 'blue', 'red'] );
// console.log( moreColors );
// moreColors.forEach( value => { console.log( value ) } );
// for ( let value of moreColors ) {
//     console.log( value );
// }
// console.log( [...moreColors] );
//=================================================
// let horses = new Map();
// horses.set( 8, 'Chocolate' );
// horses.set( 3, 'Filippone' );
// console.log(horses)
//=================================================
// let horses = new Map().set( 8, 'Chocolate' ).set( 3, 'Filippone' );
// console.log(horses)
//=================================================
//let horses = new Map( [[8, 'Chocolate'], [3, 'Filippone' ]] );
//console.log(horses.delete(3))

//horses.forEach( ( value, key ) => { console.log( value, key ) } );

//for ( let [ key, value ] of horses ) {
//    console.log( key, value );
//   }

//console.log( [...horses] );
//===================================================
// let firstElement = { order: 1 }, secondElement = { order: 2 };
// let ws = new WeakSet( [ firstElement, secondElement ] );
// console.log(ws.has( firstElement ))
// firstElement = {};
// console.log(ws.has( firstElement ))

// let wm = new WeakMap();
// wm.set( firstElement, 1 )
// wm.set( secondElement, {} )
// console.log(wm.get( secondElement ))
// secondElement = {};
// console.log(wm.get( secondElement ))
//===================================================
let colors = ['red', 'green', 'red']
let noDupe = () => console.log([ ...new Set( colors ) ])
    
export default noDupe
// let symbol1 = Symbol();
// let symbol2 = Symbol();
// // console.log( symbol1 === symbol2 );
// // console.log( typeof symbol1 );

// let myObject = {
//     publicProperty: 'Value of myObject[ "publicProperty" ]'
//     };
//     myObject[ symbol1 ] = 'Value of myObject[ symbol1 ]';
//     myObject[ symbol2 ] = 'value of myObject[ symbol2 ]';
//     //console.log( myObject );
//     JSON.stringify( myObject )
//     for( var prop in myObject ) {
//         //console.log( prop, myObject[prop] );
//         }
//         //console.log( Object.keys( myObject ) );
//         Object.getOwnPropertySymbols(myObject)
//         myObject[ Object.getOwnPropertySymbols(myObject)[0] ]
//         clonedObject = Object.assign( {}, myObject );
//         //console.log( clonedObject );
//         let leftNode = Symbol( 'Binary tree node' );
//         let rightNode = Symbol( 'Binary tree node' );
//         //console.log( leftNode )
//         //console.log( leftNode === rightNode )
        
// let privateProperty1 = Symbol.for( 'firstName' );
// let privateProperty2 = Symbol.for( 'firstName' );
// myObject[ privateProperty1 ] = 'Dave';
// myObject[ privateProperty2 ] = 'Zsolt';
// //console.log( myObject[ privateProperty1 ] );
// console.log(Symbol.keyFor( privateProperty1 ));
// console.log(Symbol.keyFor( Symbol() ));
//===============================================
// const _width = Symbol('width');
// class Square {
//     constructor( width0 ) {
//         this[_width] = width0;  
//     }
//     getWidth() {
//         return this[_width];
//     }
// }
// console.log(_width)
//=================================================
// let Square = (function() {
//     const _width = Symbol('width');
//     class Square {
//             constructor( width0 ) {
//                 this[_width] = width0;
//             }
//             getWidth() {
//                 return this[_width];
//             }
//         }
//         return Square;
//     } 
// )();
// console.log(Square.getWidth)
//=================================================
// const directions = {
//     UP : Symbol( 'UP' ),
//     DOWN : Symbol( 'DOWN' ),
//     LEFT : Symbol( 'LEFT' ),
//     RIGHT: Symbol( 'RIGHT' )
//     }
//================================================
let display = () =>
{
    console.log("What are the pros and cons of using an underscore prefix")
    console.log("for expressing our intention that a field is private?")
    console.log("---------------------------------------------------")
    // let mySquare {
    //     _width: 5,
    //     getWidth() { 
    //         return _width; 
    //     }
    // }
    console.log("Pros:")
    console.log("Easy to read")
    console.log("Cons:")
    console.log("no clear separation")
    console.log("it is not private, vulnerable to hacks")
}
export default display
// console.time( 'for loop' );
// let sum = 0;
// for ( let i = 0; i < 1000000; ++i ) {
//     sum += i;
// }
// console.timeEnd( 'for loop' );


// //Maximum call stack size exceeded
// function sumToN( n ) {
//     if ( n <= 1 ) return n;
//     return n + sumToN( n - 1 );
// }
// console.time( 'recursion' );
// console.log( sumToN( 1000000 ) );
// console.timeEnd( 'recursion' );
//===================================
// function sumToN( n ) {
//     if ( n <= 1 ) return n;
//     return n + sumToN( n - 1 );
//     }
// console.log(sumToN( 2 ))
// console.time( 'recursion' );
//console.log( sumToN( 1000000 ) ); //Maximum call stack size exceeded
//console.timeEnd( 'recursion' );


//======================================================================
// // eslint-disable-next-line @typescript-eslint/no-empty-function
// let guessMyName = function fName() {};
// // eslint-disable-next-line @typescript-eslint/no-empty-function
// let fName2 = function() {};
// let guessMyProperty = {
// prop: 1,
// // eslint-disable-next-line @typescript-eslint/no-empty-function
// methodName() {},
// get myProperty() {
// return this.prop;
// },
// set myProperty( prop ) {
// this.prop = prop;
// }
// };
// console.log( guessMyName.name );
// console.log( fName2.name );
// console.log( guessMyProperty.methodName.name );
// console.log( guessMyProperty.methodName.bind( this ).name );

// let propertyDescriptor = Object.getOwnPropertyDescriptor(
//     guessMyProperty, 'myProperty' );
//     console.log( propertyDescriptor.get.name );
//     console.log( propertyDescriptor.set.name );
//============================================================

// function MyConstructor() {
//     console.log( new.target === MyConstructor, typeof new.target );
//     if ( typeof new.target === 'function' ) {
//     console.log( new.target.name );
//     }
//     }
//     function MyDerivedConstructor() {

//     }
    
//     new MyConstructor();
//     MyConstructor();
//=================================================================
let display = () =>{
    class Stack extends Array {
        peek() {
            return this[this.length -1];
        }
        isEmpty() {
            return this.length === 0;
        }
        size() {
            return this.length;
        }
    }
    const stack = new Stack();
    console.log(stack.push(1))
    console.log(stack.push(2))
    console.log(stack.pop())
    console.log(stack.isEmpty())

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const stack1 = new Stack(1,2,3,4);
}
export default display
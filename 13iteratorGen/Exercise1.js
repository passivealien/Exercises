// let iteratorObject = {
//     next() { return { 
//         done: true,
//         value: null }; 
//     } 
// };
// let iterableObject = {
//     [Symbol.iterator]() { 
//         return iteratorObject; 
//     } 
// };
// //==================================
// let countdownIterator = {
//         countdown: 10,
//         next() {
//             this.countdown -= 1;
//         return {
//         done: this.countdown === 0,
//         value: this.countdown
//         };
//     }
// }
// let countdownIterable = {
//     [Symbol.iterator]() {
//         return Object.assign( 
//             {}, countdownIterator )
//     }
// }
// let iterator = countdownIterable[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// //=========================================
// let secondIterator = countdownIterable[Symbol.iterator]();
// let thirdIterator = countdownIterable[Symbol.iterator]();
// console.log( secondIterator.next() );
// console.log( thirdIterator.next() );
// console.log( secondIterator.next() );
// // //========================================
// for ( let element of iterableObject ) {
//     console.log( element );
//     }
// console.log( [...countdownIterable] );
//===========================================

// let message = 'ok'
// let stringIterator = message[Symbol.iterator]()
// let secondStringIterator = message[Symbol.iterator]()
// stringIterator.next()
// secondStringIterator.next()
// stringIterator.next()
// stringIterator.next()
// secondStringIterator.next()
//=========================================== 
// let message = [...'ok'];
// let pairs = message.entries();
// for( let pair of pairs ) {
// console.log( pair );
//}   
//===========================================
// let colors = new Set( [ 'red', 'yellow', 'green' ] );
// let horses = new Map( [
// [5, 'QuickBucks'],
// [8, 'Chocolate'],
// [3, 'Filippone']
// ] );
// console.log( colors.entries() )
// console.log( colors.keys() )
// console.log( colors.values() )
// console.log( horses.entries() )
// console.log( horses.keys() )
// console.log( horses.values() )

// for ( let [key, value] of horses ) {
//     console.log( key, value );
//     }

// //=======================================
// let s = new Set( countdownIterable );
// console.log(s)
// //======================================

// function *getLampIterator() {
//     yield 'red';
//     yield 'green';
//     return 'lastValue';
//     // implicit: return undefined;
//     }
//     let lampIterator = getLampIterator()
//     let [head,] = lampIterator;
//     // console.log( lampIterator.next() )
//     // console.log( lampIterator.next() )
//     // console.log( lampIterator.next() )
//     console.log( lampIterator.next() );
//     console.log( [...lampIterator] );
//     console.log( head, [...lampIterator] );
    

//==========================================
    // let message = 'ok';
    // let stringIterator = message[Symbol.iterator]();
    // console.log( stringIterator.next() );

    // for ( let ch of message ) {
    //     console.log( ch );
    //     }
//==========================================
        
// let countdownGenerator = function *() {
//     let i = 10;
//     while ( i > 0 ) yield --i;
//     }
//     let lampGenerator = function *() {
//     yield 'red';
//     yield 'green';
//     }
//     let countdownThenLampGenerator = function *() {
//         yield *countdownGenerator();
//         yield *lampGenerator();
//         }
//         console.log( [...countdownThenLampGenerator()] );
//=========================================

// let greetings = function *() {
//     let name = yield 'Hi!'
//     yield `Hello, ${ name }!`
//     }
//     let greetingIterator = greetings()
//     console.log( greetingIterator.next() )
//     console.log( greetingIterator.next( 'Lewis' ) )
//=========================================

// let sumSequence = function *( num ) {
//     let sum = 0;
//     for ( let i = 1; i <= num; ++i ) {
//         sum += i
//         yield i
//     }
//     return sum
// }

// let wrapSumSequence = function *( num ) {
//     let sum = yield *sumSequence( num )
//     yield `The sum is: ${ sum }.`
// }
// for ( let elem of wrapSumSequence( 3 ) ) {
//     console.log( elem )
// }
//=======================================
let display = () =>
{
    let message = 'ok';
    let messageIterator = message[Symbol.iterator]();
    messageIterator.next();
    for ( let item of messageIterator ) {
        console.log( 'the remaining element which is "', item, '" is being printed' );
    }
}
export default display
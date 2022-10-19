// let message = 'hello';
// for( let i in message ) {
//     console.log( message[i] );
// }
// //================================
// let message2 = 'hello';
// for( let ch of message2 ) {
//     console.log( ch );
// }
//===================================
// let text = '\u{1F601}\u{1F43C}';
// console.log( 'text: ', text );
// for( let i in text ) {
//     console.log(text[i]);
// }
// console.log('-----');
// for ( let c of text ) {
//     console.log( c );
// }
//====================================
// let flights = [
//     { source: 'Dublin', destination: 'Warsaw' },
//     { source: 'New York', destination: 'Phoenix' }
// ];
// for ( let { source, destination } of flights ) {
//     console.log( source, destination );
// }
// for ( let { source } of flights ) {
//     console.log( source );
// }
//================= put this snippet in the console of a website ===========//
// let divs = document.querySelectorAll( 'div' );
// for ( let div of divs ) {
//     let rand = Math.floor ( Math.random() * 3 );
//     div.style.color = [ '#990000', '#009900', '#000099'][ rand ];
// }
//=============== put this snippet in the console of a website ===========//
// let text = '';
// let nodes = document.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );
// for ( let node of nodes ) {
//     text += node.childNodes[0].textContent[0];  
// }
// console.log( text );

let display = () => {
    console.log("the codes are to be placed in a console of a website")
}
export default display
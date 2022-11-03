// ================= put this snippet in the console of a website ===========//
let divs = document.querySelectorAll( 'div' );
for ( let div of divs ) {
    let rand = Math.floor ( Math.random() * 3 );
    div.style.color = [ '#990000', '#009900', '#000099'][ rand ];
}
// =============== put this snippet in the console of a website ===========//
let text = '';
let nodes = document.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );
for ( let node of nodes ) {
    text += node.childNodes[0].textContent[0];  
}
console.log( text );

console.log("the codes are to be placed in a console of a website")

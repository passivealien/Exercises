// let target = function getArea( width, height ) {
//     return `${ width * height }$    {this.units}`;
//     }
//     let thisValue = { units: 'cm' };
//     let args = [ 5, 3 ];
    
//     console.log(Reflect.apply( target, thisValue, args ))
//======================================================
// let target = class Account {
//     constructor( name, email ) {
//     this.name = name;
//     this.email = email;
//     }
//     get contact() {
//         return `${this.name} <${this.email}>`;
//     }
// }
// let args = [
//     'Zsolt',
//     'info@zsoltnagy.eu'
// ];
// let newTarget = class PrivateAccount {
//     get contact() {
//         return 'Private';
//     }
// }
//     let myAccount = Reflect.construct(target, args, newTarget );
    
// //console.log(myAccount.contact)
// console.log(myAccount)

//let classOfMyAccount = Reflect.getPrototypeOf( myAccount );
//console.log( classOfMyAccount.prototype === myAccount.prototype );

// let newProto = {
//     get contact() {
//     return `${this.name} - 555-1269`;
//     }
// }
// Reflect.setPrototypeOf( myAccount, newProto )
// console.log( myAccount.contact );
// console.log(Reflect.has( myAccount, 'name' ))
// console.log(Reflect.has( myAccount, 'contact' ))
// console.log(Reflect.ownKeys( myAccount ))
// console.log(Reflect.get( myAccount, 'name' ))
// console.log(Reflect.get( myAccount, 'contact' ))
//  console.log(Reflect.get(myAccount,'contact',{ name: 'Bob' }))
//===========================================================

// let target2 = myAccount;
// let property = 'age';
// let newValue = 32;
// Reflect.set(
//     myAccount,
//     property,
//     newValue
// );
// console.log(myAccount.age)
//==============================================
// let target3 = {};
// let key = 'response';
// let attributes = {
//     value: 200,
//     writable: true
// }
// Reflect.defineProperty(
//     target,
//     key,
//     attributes
// )
// let response = {
//     status: 200
//     }
// console.log(Reflect.deleteProperty( response, 'status' ))
// console.log(response)
// let test = {
//     title: 'Petri Nets',
//     maxScore: 100
//     };
// console.log(Reflect.preventExtensions( test ))
// test.score = 55;
// console.log( test );

// console.log(Reflect.isExtensible( test ))
// console.log(Reflect.isExtensible( {} ))
//============================================================


// let target2 = class Movie {
//     constructor(title, movieLength){
//         this.title = title;
//         this.movieLength = movieLength;
//     }
//     toString() {
//         return console.log(`${this.title} (${this.movieLength} minutes)`)
//     }
// }

// let myMovie = Reflect.construct(target2, "2 hrs" );

// let newProto2 = {
//     get toString() {
//     return `${this.title} - ${this.movieLength}`;
//     }
// }

// Reflect.setPrototypeOf( myMovie, newProto2 )
//console.log( myMovie.toString );

let display = () => {
    let target = class Account {
    constructor( Title, movieLength ) {
        this.Title = Title;
        this.movieLength = movieLength;
    }
}
    let args = [
        'Bolt',
        '2 Hours'
    ];
        let myAccount = Reflect.construct(target, args );
    console.log(myAccount)
}
export default display
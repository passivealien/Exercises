// let horse = {
//     horseName: 'QuickBucks', toString: function() {
//         return this.horseName;
//     }
// }
// let rider = { riderName: 'Frank', toString: function() {
//         return this.riderName;
//     }
// }
// let horseRiderStringUtility = {
//     toString: function() {
//         return this.riderName + ' on ' + this.horseName;
//     }
// }
// let racer = Object.assign(
//     {},
//     horse,
//     rider,
//     horseRiderStringUtility
// );
// console.log( racer.toString() );
//==============================================//

// let shapeName = 'Rectangle', a = 5, b = 3;
// let shape = { shapeName, a, b, id: 0 };
// console.log( shape );

// let { x, y } = { x: 3, y: 4, z: 2 };
// console.log( y, typeof y );
//==========================================//
// let arr = [1,2,3,4,5];
// let experimentObject = { arr, [ arr ]: 1, [ arr.length ]: 2, [ {} ]: 3 }

// console.log(experimentObject.arr) 
// console.log(experimentObject[ 'arr' ]) 
// console.log(experimentObject[ arr ]) 
// console.log(experimentObject[ arr.length ])
// console.log(experimentObject[ '[object Object]' ]) 
// console.log(experimentObject[ experimentObject ]) 
//===========================================//
// let shapeName = 'Rectangle', a = 5, b = 3;
// let shape = {
//     shapeName,
//     a,
//     b,
//     Area:  (a*b) ,
//     logArea() { console.log( 'Area: ' + (a*b) ); },
//     id: 0
// };

// console.log(shape)
//=============================================
// let proto = {
//     whoami() { console.log('I am proto'); }
// };
// let obj = {
//     whoami() {
//         Object.getPrototypeOf( obj ).whoami.call( this )//or you can use super.whoami();
        
//         console.log('I am obj');
//     }
// };
    
// console.log( Object.getPrototypeOf( obj ) );
// Object.setPrototypeOf( obj, proto );
// obj.whoami();
//=============================================

    let baskets = [
        {
        firstName: 'Andrew',
        email: 'andrew@aol.com'
        // missing: basketValue, should be set to 0
        },
        {
        email: 'question@mark.com'
        // missing: firstName and basketValue
        },
        {
            firstName: 'David',
        email: 'david@spammail.com',
        basketValue: 55
        // nothing is missing, the above values should be left intact
        }
    ]

    const basket = baskets.map( item => Object.assign(
        { firstName: '-', basketValue: 0 },
        item
        ) );
        let display = () =>
        {
    console.log(basket)
}

export default display

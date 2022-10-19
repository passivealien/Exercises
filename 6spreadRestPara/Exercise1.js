/*
let spreadingStrings = 'Spreading Strings';
let charArray = [ ...spreadingStrings ];
console.log(charArray)
*/


/*
let notgood = 'not good'.split( '' );
let [,,,, ...good] = notgood;
console.log(good)
*/


/*
let notgood = 'not good'.split( '' );
let [ ,,,,,,,,,,,,,,,, ...empty ] = notgood;
console.log(empty)
*/


/*
let [,...A] = [1,2,3,4]
console.log(A)
*/


/*
let [...A,] = [1,2]
console.log(A) 
//Rest element must be last element
*/

let display = () =>
{
    let mainArray = [1,2,3,4,5];
    let [...copyArray] = mainArray
    console.log(mainArray)
    console.log(copyArray)
    console.log("mainArray === copyArray returns false since the === strictly returns the exact values")
    console.log("copyArray[2] === mainArray[2] returns true since the index from both arrays are the same")
}
export default display
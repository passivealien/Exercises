let mainArray = [1,2,3,4,5];
let [...copyArray] = mainArray
console.log(mainArray)
console.log(copyArray)
console.log("mainArray === copyArray returns false since the === strictly returns the exact values")
console.log("copyArray[2] === mainArray[2] returns true since the index from both arrays are the same")

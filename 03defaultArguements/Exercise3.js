
function argList( productName, price = 100 ) {
    console.log( arguments.length ); //there's only 1 arguements in argList - 'Krill Oil Capsules'
    console.log( productName === arguments[0] ); // it shows true because the first index on the argList is occupied, 'Krill Oil Capsules' is at index[0]
    console.log( price === arguments[1] );// it shows false because the second index on the argList has no arguements, although price is defined, in the parameters, the variable price itself is not fetching data from argList()
    }
    argList( 'Krill Oil Capsules' );


let display = () => {
    console.log("there's only 1 arguements in argList - 'Krill Oil Capsules'")
    console.log("it shows true because the first index on the argList is occupied, 'Krill Oil Capsules' is at index[0]")
    console.log("it shows false because the second index on the argList has no arguements, although price is defined, in the parameters, the variable price itself is not fetching data from argList()")
}

export default display

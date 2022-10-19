//Determine the value logged to the console on Google
//Chrome without running it. Write down the mechanism behind it
//using your own words
let display = () =>{
    let f = () => [..."12345"];
    let A = f().map( f );
    console.table( A );
}
export default display



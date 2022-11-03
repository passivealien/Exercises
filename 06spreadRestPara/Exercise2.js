let f = () => [..."12345"];
let A = f().map( f );
console.table( A );

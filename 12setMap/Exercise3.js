let union = ( set1, set2 ) =>
new Set( [...set1, ...set2] );

let intersection = ( set1, set2 ) => new Set( [...set1].filter( ( elem ) => set2.has( elem ) ) );

let difference = ( set1, set2 ) =>
    new Set( [...set1].filter( ( elem ) => !set2.has( elem ) )
);

let set1 = new Set( [1,2] );
let set2 = new Set( [2,3] );

let display = () => {
    console.log( union( set1, set2 ) )
    console.log( intersection( set1, set2 ) )
    console.log( difference( set1, set2 ) )
}

export default display;
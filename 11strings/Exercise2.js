let display = () => {
let upper = (textArray, ...substitutions) => {
    let template = '';
    for ( let i = 0; i < substitutions.length; ++i ) {
    let sub = substitutions[ i ];
    template += textArray[ i ];
    template += typeof sub === 'string' ?
    sub.toUpperCase() : sub;
    }
    template += textArray[ textArray.length - 1 ];
    return template;
    };
    let a = 1, b = 'ab', c = 'DeF';
console.log(upper`x ${a} x ${b} x ${c} x`)
}
export default display
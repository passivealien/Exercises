//let node = { left : { left: 3, right: 4 }, right: 5 };
//let { loft : {}, right : val } = node; //loft = undefined   
//console.log(node)
let display = () =>
{
    let node = { left : { left: 3, right: 4 }, right: 5 };
    let { loft, right : val } = node;
    console.log(node)
    console.log(loft)
    console.log(val)
}
export default display
// let display =()=>
// {    
    // let _width = new WeakMap();

    // let key1 = {
    //     id: 1
    // }

    // let car1 = {
    //     make: 'Honda',
    //     mmodel: 'Civic'
    // }

    // _width.set(key1, car1)

    // console.log(_width)
    // class Square {
    //     constructor( width ) {
    //         _width.set( this, width )
    //     }
    //     get area() {
    //         let width = _width.get( this );
    //         return width * width;
    //     }
    // }
    // console.log(_width)
// }
// export default display



// let wk = new WeakMap();
// let key1 = {}
// wk.get(key1,"test")
// console.log(wk)
let display = () => {
    {
        const x = {
        a: [1, 2]
        };
        var weakMap = new WeakMap();
        weakMap.set(x, 'something');
    }
    console.log( weakMap)
}

export default display
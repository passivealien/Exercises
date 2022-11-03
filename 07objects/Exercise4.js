let basketProto = {
    value: 0,
    addToBasket( itemValue ) {
        this.value += itemValue;
    },
    clearBasket() {
        this.value = 0;
    },
    getBasketValue() {
        return this.value;
    },
    pay() {
        console.log( this.getBasketValue() + ' has been paid' );
    }
};
let myBasket = {
    items: [],
    addToBasket( itemName, itemPrice ) {
        this.items.push( { itemName, itemPrice } )
        super.addToBasket( itemPrice )
    },
    clearBasket() {
        this.items = []
        super.clearBasket()
    },
    removeFromBasket( index ) {
        if ( typeof index !== 'number' ||
        index < 0 ||
        index >= this.items.length ) return;
        let removedElement = this.items.splice( index, 1 )[0];
        super.addToBasket( -removedElement.itemPrice );
        }
}
Object.setPrototypeOf( myBasket, basketProto )
myBasket.addToBasket( 'Cream', 5 );
myBasket.addToBasket( 'Cake', 8 );
myBasket.getBasketValue(); // 13
myBasket.items[{ itemName: 'Cream', itemPrice: 5},{ itemNAme: 'Cake', itemPrice: 8 }]
myBasket.getBasketValue(); // 0
console.log(myBasket.items)
myBasket.addToBasket( 'Cream', 5 );
myBasket.addToBasket( 'Cake', 8 );
myBasket.addToBasket( 'Cookie', 2 );
myBasket.removeFromBasket( 1 );
myBasket.getBasketValue(); // 7
console.log(myBasket.items)

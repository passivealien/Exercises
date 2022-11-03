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
basketProto.addToBasket(" no one")
basketProto.pay()
basketProto.clearBasket()
basketProto.addToBasket(" someone")
basketProto.pay()

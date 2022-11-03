let target = class Account {
    constructor( Title, movieLength ) {
        this.Title = Title;
        this.movieLength = movieLength;
    }
}
    let args = [
        'Bolt',
        '2 Hours'
    ];
        let myAccount = Reflect.construct(target, args );
    console.log(myAccount)

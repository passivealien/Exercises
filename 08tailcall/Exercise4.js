let AbstractUser = function() {
    if ( new.target === AbstractUser ) {
        throw new Error( 'Abstract class' );
    }
    this.accessMatrix = {};
};
    AbstractUser.prototype.hasAccess = function( page ) {
        return this.accessMatrix[ page ];
};
let SuperUser = function() {
    AbstractUser.call( this );
};
SuperUser.prototype = Object.create( AbstractUser.prototype );
SuperUser.prototype.constructor = SuperUser;
SuperUser.prototype.hasAccess = function( page ) {
    return true;
};
//let su = new SuperUser();
//let au = new AbstractUser();
console.log(" Abstract class cannot be instantiated")

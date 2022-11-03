class Building {
    constructor( address ) {
        this.address = address;
        console.log( 'Building constructor. Address: ', address );
    }
}
class ResidentialBuilding extends Building {
    constructor( address, capacity ) {
        super( address );
        this.capacity = capacity;
        console.log( 'Residential building. Capacity: ',capacity );
    }
}
new ResidentialBuilding( 'Java Street 3', 16 )

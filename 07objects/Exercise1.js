let baskets = [
    {
    firstName: 'Andrew',
    email: 'andrew@aol.com'
    // missing: basketValue, should be set to 0
    },
    {
    email: 'question@mark.com'
    // missing: firstName and basketValue
    },
    {
        firstName: 'David',
    email: 'david@spammail.com',
    basketValue: 55
    // nothing is missing, the above values should be left intact
    }
]

const basket = baskets.map( item => Object.assign(
    { firstName: '-', basketValue: 0 },
    item
    ) );
console.log(basket)

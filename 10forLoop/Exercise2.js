let display = () =>
{
    let prefix = '1F6';
    let digits4 = '01234567890ABCDEF';
    let digits5 = '01234';
    let emojis = '';
    for ( let digit4 of digits4 ) {
        for ( let digit5 of digits5 ) {
            let hexCode = '0x' + prefix + digit4 + digit5;
            emojis += String.fromCodePoint( hexCode );
        }
    }
    console.log( emojis );
}
export default display
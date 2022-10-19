let display = () => 
{
    let lineNumber = 1;
        function printComment( comment, line = lineNumber + 1) {
            console.log( line, comment );
        }
        printComment("comment")
}
export default display
//let lineNumber = 0;
//let getLineNumber = function() {
//    lineNumber += 1;
//    return lineNumber;
//}
//function printComment( comment, line = getLineNumber() ) {
//    console.log( line, comment );
//}
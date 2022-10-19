let display = () => 
{
    let text1 = "test 1", text2 = "test 2";
    [text1 , text2] = [text2, text1]
    console.log(text1, text2)
}
export default display
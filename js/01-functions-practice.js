//STEP 1
function halfNumber(num1) {
    result = num1 / 2;
    return console.log("Half of " + num1 + " is " + result);
}
halfNumber(125);
//STEP 2
function squareNumber(num2) {
    result = num2 ** 2;
    return console.log("the result of squaring the number " + num2 + " is " + result +".");
}
squareNumber(3);
//STEP 3
function percentOf(num1, num2) {
    result = num1 * 100 / num2;
    return console.log(num1 + " is " + result +"% of " + num2 +".");
}
percentOf(4.5, 240);
//STEP 4
function findModulus(num1, num2) {
    result = num1 % num2;
    return console.log(result + " is the modulus of " + num1 + " and " + num2 + ".");
}
findModulus(10, 4);

//STEP 5

function maxOfThree(){
    // let numCollect = prompt('Type the numbers to add');
    // numCollect += numCollect;
    let numCount;
    numCount += numCollect;
    numCount = parseFloat(numCount);
    let i;
    for(i = 0; i < arguments.length; i++) {
        // numCount += (arguments[i]);
        console.log(numCount);
        numCount = eval(numCount);
        console.log(numCount);
    }
    //alert(count);
    //  do {
    //      arguments = numCollect;
    //      count++;
    //      console.log(arguments[0]);
    //  } while (count < 3);

}
maxOfThree(numCollect = prompt('Type the numbers to add'));
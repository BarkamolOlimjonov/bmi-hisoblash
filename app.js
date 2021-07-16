let myWeight = 65
let myHeight = 1.7
let myBmi = myWeight / (myHeight * myHeight)

if( myBmi< 15 ) {
    console.log('You are underweight');
} else if ( myBmi >= 15 && myBmi < 25 ) {
    console.log('You are normal');
} else {
    console.log('Lose some weight, Bro !');
}
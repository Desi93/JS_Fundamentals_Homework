function smallestOfThreeNumbers(firstNumber, secondNumber, thirdNumber){
    if((firstNumber <= secondNumber) && (firstNumber <= thirdNumber)){
        console.log(firstNumber);
    } else if((secondNumber <= firstNumber) && (secondNumber <= thirdNumber)){
        console.log(secondNumber);
    } else if((thirdNumber <= firstNumber) && (thirdNumber <= secondNumber)){
        console.log(thirdNumber);
    }
}

smallestOfThreeNumbers(2, 5, 3);
function oddAndEvenSum(number){
    let oddSum = 0;
    let evenSum = 0;
    let numToString = number.toString();

    for(let i = 0; i < numToString.length; i++){
        let num = parseInt(numToString[i]);

        if(num % 2 == 0){
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
    
}

oddAndEvenSum(3495892137259234);
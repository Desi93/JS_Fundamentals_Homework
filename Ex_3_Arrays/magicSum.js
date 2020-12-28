function magicSum(array, sum){
    
    for(let index = 0; index < array.length; index++){
        let firstNumber = array[index];
        let sumOfPair = 0;
        
        

        for(let i = index + 1; i < array.length; i++){
            let secondNumber = array[i];
            let magicPair = [];
            magicPair.push(firstNumber);
            magicPair.push(secondNumber);
            sumOfPair = Number(firstNumber) + Number(secondNumber);

            if(sumOfPair == sum){
                console.log(magicPair.join(' '));
                magicPair = [];
            }
        }
    }


}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27);
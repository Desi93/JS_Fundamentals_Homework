function palindromeIntegers(array){

    for(let number of array){
        let reversed = reversedNumber(number);
        console.log(number == reversed);
        
    }
    
    function reversedNumber(number){
        let reversedValue = '';

        while(number > 0){
            let lastDigit = number % 10;
            reversedValue += lastDigit;
            number = parseInt((number / 10));
        }

        return Number(reversedValue);
    }
}

palindromeIntegers([123,323,421,121]);
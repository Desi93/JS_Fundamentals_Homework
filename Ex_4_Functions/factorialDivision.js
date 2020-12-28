function factorialDivision(firstNum, secondNum){

    function factorial(number){
        let sum = 1;

        for(let i = 1; i <= number; i++){
            if(number == 0){
                break;
            }
            sum *= i;
        }

        return sum;
    }

    let firstResult = factorial(firstNum);
    let secondResult = factorial(secondNum);
    let finalResult = firstResult / secondResult;

    console.log(finalResult.toFixed(2));
    

}

factorialDivision(5, 2);
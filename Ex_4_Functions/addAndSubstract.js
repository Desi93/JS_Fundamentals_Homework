function addAndSubstract(firstNum, secondNum, thirdNum){
    function sum(firstNum, secondNum){
        let sum = firstNum + secondNum;
        return sum;
    }

    function substract(thirdNum){
        let result = sum(firstNum, secondNum) - thirdNum;
        console.log(result);
    }

    sum(firstNum, secondNum);
    substract(thirdNum);    
    
}

addAndSubstract(23,
    6,
    10);
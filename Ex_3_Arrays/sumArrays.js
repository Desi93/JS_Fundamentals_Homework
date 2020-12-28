function sumArrayElements(array){
    let firstNumber = Number(array[0]);
    let secondNumber = Number(array[array.length - 1]);

    let sum = firstNumber + secondNumber;

    console.log(sum);
    
}

sumArrayElements(['20', '30', '40']);
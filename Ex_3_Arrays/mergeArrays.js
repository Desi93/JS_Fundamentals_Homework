function mergeArrays(firstArray, secondArray){
    let resultArray = [];
    let print = '';

    for (let index in firstArray){
        let result;

        if(index % 2 == 0){
            result = Number(firstArray[index]) + Number(secondArray[index]);
        } else {
            result = firstArray[index] + secondArray[index];          
        }

        resultArray[index] = result;
    }

    for(let i = 0; i < resultArray.length; i++){
        if(i == resultArray.length - 1){
            print += `${resultArray[i]}`;
        } else {
            print += `${resultArray[i]} - `;
        }
    }

    console.log(print);
    
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
function equalSums(array){
    let result = 'no';

    for(let index = 0; index < array.length; index++){
        
        let leftSum = 0;
        let rightSum = 0; 

        //calculating left sum
        for(let i = 0; i < index; i++){
            let leftNumber = array[i];
            leftSum += leftNumber;
        }

        //calculating right sum
        for(let i = index + 1; i < array.length; i++){
            let rightNumber = array[i];
            rightSum += rightNumber;
        }

        if(leftSum == rightSum){
            result = index;
        }
    }

    console.log(result);
    
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
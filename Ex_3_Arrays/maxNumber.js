function maxNumber(array){
    let result = '';

    for(let index = 0; index < array.length; index++){

        let element = array[index];
        let isBigEnough = true;

        for(let i = index + 1; i < array.length; i++){
            let nextElement = array[i];

            if(element <= nextElement){
                isBigEnough = false;
                break;
            }
        }

        if(isBigEnough){
            result += `${element} `;
        }
    }

    console.log(result);
    
}

maxNumber([1, 4, 3, 2]);
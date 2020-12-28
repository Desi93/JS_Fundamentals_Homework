function arrayRotation (array, rotations){
    let resultArray = [];
    let rotationCounter = rotations % array.length;

    for(let index in array){
        if(index >= rotationCounter){
            let element = array[index];
            resultArray.push(element);
        }
    }
    
    for(let index in array){
        if((index) < rotationCounter){
            let element = array[index];
            resultArray.push(element);
        } else {
            break;
        }
    }

    let printArray = '';

    for(let i in resultArray){
    
             printArray += resultArray[i] + ' ';
    
       
    }

    console.log(printArray);
}

arrayRotation([51, 47, 32, 61, 21], 2);
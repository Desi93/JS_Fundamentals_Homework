function maxSequence(array){

    let bestSequence = [];
    let printElements = '';

    for(let index = 0; index < array.length; index++){
        let element = array[index];
        let currentSequence = [element];
        

        for(let i = index + 1; i < array.length; i++){
            let nextElement = array[i];

            if(element == nextElement){
                currentSequence.push(nextElement);
                index = i;
            } else {
                break;
            } 
        }
        
        if(currentSequence.length > bestSequence.length){
            bestSequence = currentSequence;
        }
    }

    for(let index in bestSequence){
        let element = bestSequence[index];
        printElements += element + ' ';
        
    }

    console.log(printElements);
    
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
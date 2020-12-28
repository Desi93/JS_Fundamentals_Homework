function commonElements(firstArray, secondArray){
    for(let firstElement of firstArray){
        for(let secondElement of secondArray){
            
            if(firstElement === secondElement){
                console.log(firstElement);
                
            }
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
function addOrSubstract(array){
    let sumArray = 0;
    let newArray = [];
    let sumNewArray = 0;


    for (let i of array){
        sumArray += Number(i); 
    }

    for (let el = 0; el < array.length; el++){
        let element = Number(array[el]);

        if(element % 2 == 0){
            element += el;
            newArray[el] = element;
        } else {
            element -= el;
            newArray[el] = element;
        }


    } 
    
    for (let i of newArray){
        sumNewArray += Number(i); 
    }

    console.log(newArray);
    
    console.log(sumArray);
    console.log(sumNewArray);

}

addOrSubstract([5, 15, 23, 56, 35]);
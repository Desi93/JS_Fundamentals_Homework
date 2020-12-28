function distinctArray(input){
    let array = input.slice();
    let outputArr = [];

    for(let element of array){
        if(!outputArr.includes(element)){
            outputArr.push(element);
        }
    }

    console.log(outputArr.join(' '));
    
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
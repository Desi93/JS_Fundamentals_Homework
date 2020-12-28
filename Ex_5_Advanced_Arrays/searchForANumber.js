function searchForANumber(arr, input){
    let takeNumbers = input[0];
    let deleteNumbers = input[1];
    let searchNumber = input[2];

    let newArr = arr.slice(0, takeNumbers);    

    newArr.splice(0, deleteNumbers);

    let count = 0;

    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] == searchNumber){
            count++;
        }
    }

    console.log(`Number ${searchNumber} occurs ${count} times.`);
    
}

searchForANumber(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);
function bombNumbers(array, bombArr){
    let bomb = Number(bombArr.shift());
    let power = Number(bombArr.shift());
    let index = array.indexOf(bomb);    

   while(index > -1){
        array.splice(Math.max((index - power), 0), Math.min(power, index));
        index = array.indexOf(bomb);
        array.splice(index, power + 1);

        index = array.indexOf(bomb)
    }
    
    function calculateSum(arr){

        let sum = 0;

        for(let n of array){
            sum += Number(n);
        }
        
        return sum;
    }
    console.log(calculateSum(array));
    
}

bombNumbers(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);
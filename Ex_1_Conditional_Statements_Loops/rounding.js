function solve(num, precision){
    if(precision > 15){
        console.log(parseFloat(num.toFixed(15)));
    } else{
        console.log(parseFloat(num.toFixed(precision)));
    }
    
}

solve(3.1415926535897932384626433832795,2);
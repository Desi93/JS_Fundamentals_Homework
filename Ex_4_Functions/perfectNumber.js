function perfectNumber(n){
    function isPositive(n){
        if(n > 0){
            return n;
        }
    }

    function findDivisors(n){
        let divisors = [];

        for(let i = 1; i < n; i++){
            if(n % i == 0){
                divisors.push(i);
            }
        }
        
        return divisors;
    }

    let sumOfDivisors = 0;
    let divisors = findDivisors(n);

    for(let element of divisors){
        sumOfDivisors += element;
    }

    let sumIsOk = false;

    if(sumOfDivisors == n){
        sumIsOk = true;
    }
    
    if(isPositive && sumIsOk){
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
        
    }
}

perfectNumber(28);
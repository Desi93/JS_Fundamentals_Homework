function solve(startingYield){
    let totalSpice = 0;
    let daysCount = 0;

    for(let spice = startingYield; spice >= 100; spice -= 10){
        
        totalSpice += spice;
        if(totalSpice >= 100){
            totalSpice -= 26;
        } 

        
        daysCount++;
    }

    totalSpice -= 26;
    
    if(totalSpice <= 0){
        totalSpice = 0;
    }
    console.log(daysCount);
    console.log(totalSpice);
    
    
}

solve(51);

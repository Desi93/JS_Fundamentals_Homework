function pyramid(base, increment){
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;

    let rows = 0;
    let r = 0;

    for(let row = base; row >= 1; row -= 2){
        rows++;
    }
    
    for(let row = base; row >= 1; row -= 2){
        let currentRow = row * row * increment;
        r++;

        if(r == rows){
            totalGold = row * row * increment;
        } else if(r % 5 == 0){
            totalStone += (row - 2) * (row - 2) * increment;
            totalLapisLazuli += currentRow - ((row - 2) * (row - 2) * increment);
                
        } else { 
            totalStone += (row - 2) * (row - 2) * increment;
            totalMarble += currentRow - ((row - 2) * (row - 2) * increment);
        }  
    }
    
    
    rows *= increment;
   
    console.log(`Stone required: ${Math.round(totalStone)}`);
    console.log(`Marble required: ${Math.round(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.round(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.round(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(rows)}`);
    
}

pyramid(12, 1);
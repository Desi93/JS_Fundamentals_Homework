function bitcoin(input){
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;

    let moneyMadeForDay = 0;
    let totalMoney = 0;
    let daysCount = 0;
    let boughtBitcoins = 0;
    let dayOfFirstBitcoin = 0;

    for(let i = input.length; i > 0; i -= 1){
        let currentGold = Number(input.shift());
        daysCount++;

        if(daysCount % 3 == 0){
            currentGold = currentGold * 0.7;
        }

        moneyMadeForDay = currentGold * goldPrice;
        totalMoney += moneyMadeForDay; 

        if(totalMoney >= bitcoinPrice){
            while(totalMoney >= bitcoinPrice){
                totalMoney -= bitcoinPrice;
                boughtBitcoins++;
                
                if(boughtBitcoins == 1){
                    dayOfFirstBitcoin = daysCount;
                }
            }           
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    
    if(boughtBitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
        
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
    
}

bitcoin([3124.15,
    504.212,
    2511.124]);
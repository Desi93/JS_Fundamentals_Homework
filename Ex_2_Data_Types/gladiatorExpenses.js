function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalExpenses = 0;
    let expensesForHelmet = 0;
    let expensesForSword = 0; 
    let expensesForShield = 0;
    let expensesForArmor = 0;
    let brokenShieldCounter = 0;
    
    for(let currentLostFight = 1; currentLostFight <= lostFights; currentLostFight++){
        let brokenHelmet = false;
        let brokenSword = false;

        if(currentLostFight % 2 == 0){
            expensesForHelmet += helmetPrice;
            brokenHelmet = true;
        } 
        if(currentLostFight % 3 == 0){
            expensesForSword += swordPrice;
            brokenSword = true;
        }
         if(brokenHelmet && brokenSword){
            expensesForShield += shieldPrice;
            brokenHelmet = false;
            brokenSword = false;
            brokenShieldCounter++;
        } 
        
        if(brokenShieldCounter == 2){
            brokenShieldCounter = 0;
            expensesForArmor += armorPrice;
        }

    }

    totalExpenses = expensesForHelmet + expensesForSword + expensesForShield + expensesForArmor;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
    
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5);
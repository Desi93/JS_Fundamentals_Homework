function dungeonestDark(arr){
    
    
    let startingHealth = 100;
    let currentHealth = startingHealth
    let coins = 0;
    let room = 0;
    let isQuastionOver = true;
    let dungeon = arr[0].split('|')

    for(let el of dungeon){
        room++;
        let firstElement = el.split(' ')[0]
        let secondElement = el.split(' ')[1]
      
        if(firstElement === 'potion'){

            if((currentHealth + Number(secondElement)) > 100){
                console.log(`You healed for ${startingHealth - currentHealth} hp.`)
            }else{
                console.log(`You healed for ${secondElement} hp.`)
            }
            
            currentHealth += Number(secondElement)
            if(currentHealth > 100){
                currentHealth = 100
            }
            
            console.log(`Current health: ${currentHealth} hp.`)
        } else if(firstElement === 'chest'){
            coins += Number(secondElement)
            console.log(`You found ${secondElement} coins.`)
        } else{
            currentHealth -= Number(secondElement)
            if(currentHealth > 0){
                console.log(`You slayed ${firstElement}.`)
            } else{
                console.log(`You died! Killed by ${firstElement}.`)
                console.log(`Best room: ${room}`)
                isQuastionOver = false;
                break;
            }
        }
        
    }
        if(isQuastionOver){
            console.log("You've made it!")
            console.log(`Coins: ${coins}`)
            console.log(`Health: ${currentHealth}`)
        }

}
dungeonestDark([ 'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000' ]);
function test(text) {

    let input = text[0].split('|').join(' ').split(' ');
    let health = 100;
    let coins = 0;
    let bestRoom = 0;

    for (let i = 0; i < input.length; i += 2) {
        bestRoom++;

        if (input[i] !== 'potion' && input[i] !== 'chest') {
            health -= Number(input[i + 1]);

            if (health <= 0) {
                console.log(`You died! Killed by ${input[i]}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            } else {
                console.log(`You slayed ${input[i]}.`);
            }

        } else if (input[i] === 'potion') {
            health += Number(input[i + 1]);

            if (health > 100) {
                healedFor = Number(input[i + 1]) - (health - 100);
                console.log(`You healed for ${healedFor} hp.`)
                health = 100;
                console.log(`Current health: ${health} hp.`)
            } else {
                console.log(`You healed for ${input[i + 1]} hp.`)
                console.log(`Current health: ${health} hp.`)
            }

        } else if (input[i] === 'chest') {
            coins += Number(input[i + 1]);
            console.log(`You found ${input[i + 1]} coins.`);
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

test([ 'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000' ]);
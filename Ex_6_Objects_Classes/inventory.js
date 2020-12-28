function inventory(input){
    let heroes = [];

    input.forEach(elements => {
        let element = elements.split(' / ');
        let name = element[0];
        let level = Number(element[1]);
        let items = element[2]
        .split(', ')
        .sort((a, b) => a.localeCompare(b));

        heroes.push({ name, level, items });
    });

    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

inventory(
    [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);
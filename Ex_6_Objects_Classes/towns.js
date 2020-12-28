function towns(input){
    let towns = {};
    while(input.length > 0){
        let town = input.shift();

        let townInfo = town.split(' | ');
        let townName = townInfo[0];
        let townLatitude = Number(townInfo[1]).toFixed(2);
        let townLongitude = Number(townInfo[2]).toFixed(2);

        towns = {
            town: townName,
            latitude: townLatitude,
            longitude: townLongitude
        };

        console.log(towns);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
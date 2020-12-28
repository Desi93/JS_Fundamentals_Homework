function travelTime(input){
    let destinations = new Map();
   
    for (const line of input) {
        let lineArr = line.split(' > ');
        let country = lineArr.shift();
        let city = lineArr.shift();
        let cost = Number(lineArr.shift());

        if(destinations.country != country){
            destinations.set(country, { [city]: cost});
        } else {
            let newCountry = destinations.get(country, {[city]: cost});
            destinations.set(newCountry, {[city]: cost});
        }
        
    }
    
    console.log(``);

}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);
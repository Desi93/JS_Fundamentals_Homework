function train(input){

    let copy = input.slice();
    let wagons = copy[0].split(' ').map(Number);
    let maxCapacity = Number(copy[1]);

    let commands = copy.slice(2);

    for(let command of commands){
        let commandInfo = command.split(' ');
        if(commandInfo.length == 2){
            wagons.push(commandInfo[1]);
        } else {
            let passengers = Number(commandInfo[0]);
            for(let wagon in wagons){
                let currentPassengers = wagons[wagon];
                if((passengers + currentPassengers) <= maxCapacity){
                    wagons[wagon] += passengers;
                    break;
                } 
            }
            
        }
    }
    
    console.log(wagons.join(' '));
    
}
    

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);
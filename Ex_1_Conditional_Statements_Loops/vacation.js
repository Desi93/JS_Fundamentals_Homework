function solve(groupOfPeople, typeOfGroup, dayOfWeek){
    let totalPrice = 0;
    if(typeOfGroup === 'Students'){
        switch(dayOfWeek){
            case 'Friday':
                totalPrice = groupOfPeople * 8.45;
                break;
            
            case 'Saturday':
                totalPrice = groupOfPeople * 9.80;
                break;

            case 'Sunday':
                totalPrice = groupOfPeople * 10.46;
                break;
        } 
        
        if(groupOfPeople >= 30){
            totalPrice = totalPrice * 0.85;
        }
    } else if(typeOfGroup === 'Business'){
       if(groupOfPeople >= 100){
            groupOfPeople = groupOfPeople - 10;
        } 
        
        switch(dayOfWeek){
            case 'Friday':
                totalPrice = groupOfPeople * 10.90;
                break;
            
            case 'Saturday':
                totalPrice = groupOfPeople * 15.60;
                break;

            case 'Sunday':
                totalPrice = groupOfPeople * 16;
                break;
        }

        
    } else if(typeOfGroup === 'Regular'){
        switch(dayOfWeek){
            case 'Friday':
                totalPrice = groupOfPeople * 15;
                break;
            
            case 'Saturday':
                totalPrice = groupOfPeople * 20;
                break;

            case 'Sunday':
                totalPrice = groupOfPeople * 22.50;
                break;
        }
        
        if(groupOfPeople >= 10 && groupOfPeople <= 20){
            totalPrice = totalPrice * 0.95;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}


solve(30, 'Students', 'Sunday');
function login(input){
    let username = input.shift();
    let password = '';

    for(let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }

    let userInput = input.shift();
    let attempts = 1;
    while(userInput != password){
        if(attempts >= 4){
            console.log(`User ${username} blocked!`);
            break;
        }
        
        console.log(`Incorrect password. Try again.`);
        userInput = input.shift();
        attempts++;
    }
    
    if(userInput == password){
        console.log(`User ${username} logged in.`);
    }
    
}

login(['sunny','rainy','cloudy','sunny','not sunny']);
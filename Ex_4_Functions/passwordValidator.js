function passwordValidator(password){
    let isDigit = (c) => c >= 48 && c <= 57;

    function checkLength(password){
        return password.length >= 6 && password.length <= 10;
    }

    function checkAlphabetical(password){
        for(let i = 0; i < password.length; i++){

            let isLowerLetter = (c) => c >= 97 && c <= 122;
            let isUpperLetter = (c) => c >= 65 && c <= 90;

            let isOk = true;

            for(let char of password){
                let n = char.charCodeAt(0);

                if(!isDigit(n) && !isLowerLetter(n) && !isUpperLetter(n)){
                    isOk = false;
                    break;
                }
            } 
            
            return isOk;
        }
    }

    function countDigits(password){
        let isDigit = (c) => c >= 48 && c <= 57;
        let counter = 0;
        let isOk = false;

        for(let char of password){
            let n = char.charCodeAt(0);

            if(isDigit(n)){
                counter++;
            }

            if(counter == 2){
                isOk = true;
                break;
            }
        }
        
        return isOk;
    }

    let v1 = checkLength(password);
    let v2 = checkAlphabetical(password);
    let v3 = countDigits(password);

    if(!v1){
        console.log("Password must be between 6 and 10 characters");
    }
    if(!v2){
        console.log("Password must consist only of letters and digits");
    }
    if(!v3){
        console.log("Password must have at least 2 digits");
    }

    if(v1 && v2 && v3){
        console.log("Password is valid");
        
    }
    
}

passwordValidator('MyPass123');
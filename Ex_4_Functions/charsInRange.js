function charsInRange(firstChar, secondChar){
    let firstCharIndex = firstChar.charCodeAt();
    let secondCharIndex = secondChar.charCodeAt();
    let stringToPrint = '';

    if(firstCharIndex > secondCharIndex){
        for(let i = secondCharIndex + 1; i < firstCharIndex; i++){
            let currentChar = String.fromCharCode(i);

            stringToPrint += currentChar + ' ';
        }
    } else {
        for(let i = firstCharIndex + 1; i < secondCharIndex; i++){
            let currentChar = String.fromCharCode(i);

            stringToPrint += currentChar + ' ';
        }
    }
    
    console.log(stringToPrint);
}

charsInRange('a','d');
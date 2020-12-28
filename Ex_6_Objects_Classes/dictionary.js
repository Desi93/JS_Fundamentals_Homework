function makeADictionary(input){
    let dictionary = [];

    input.forEach(line => {
        let elements = line.split(':');
        let word = elements[0].replace('{"', '').replace('"', '');
        let description = elements[1].replace('"', '').replace(`"}`, '');
        let objExists = dictionary.find((o, i) => {
            if(o.word == word){
                dictionary[i] = {word, description};
                return true;
            }
        });
        if(!objExists){
            dictionary.push({word, description});
        }
        
    });

    dictionary.sort((a, b) => a.word.localeCompare(b.word));
    dictionary.forEach(line => {
       console.log(`Term: ${line.word} => Definition: ${line.description}`); 
    });
    
}

makeADictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
'{"Microphone":"blabla"}'
]);
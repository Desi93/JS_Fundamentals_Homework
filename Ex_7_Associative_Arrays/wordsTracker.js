function wordsTracker(input){
    let words = getWantedWords(input);

    for (let word of input.slice(1)){
        if(Object.keys(words).includes(word)){
            words[word]++;
        }
    }

    for (let key of Object.keys(words).sort((a, b) => words[b] - words[a])) {
        console.log(`${key} - ${words[key]}`);
    }


    function getWantedWords(arr){
        let obj = {};
        arr[0].split(' ').forEach(word => {
            obj[word] = 0;
        });

        return obj;
    }
    
}

wordsTracker(
    [
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]
);
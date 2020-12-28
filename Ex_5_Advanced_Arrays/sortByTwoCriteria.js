function sortByTwoCriteria(input){
    input.sort(customSort);

    console.log(input.join('\n'));
    
    function customSort(a, b){
        if(a.length > b.length){
            return 1;
        } else if(a.length < b.length){
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
}

sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
sortByTwoCriteria(["alpha", "beta", "gamma"]);
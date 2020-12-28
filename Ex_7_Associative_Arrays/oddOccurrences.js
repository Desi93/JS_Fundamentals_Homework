function oddOccurrences(input){
    let elements = input.split(' ').map((el) => el.toLowerCase());

    let obj = generateObject(new Set(elements));
    
    elements.forEach(el => {
        obj[el] += 1;
    });

    let oddKeys = Object.keys(obj)
        .filter((el) => obj[el] % 2 !== 0);

    console.log(oddKeys.join(' '));

    function generateObject(set){
        let obj = {};

        set.forEach(el => {
            obj[el] = 0;
        });

        return obj;
    }
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
function store(orderedProducts, storedProducts){
    let storage = {
        
    };

    orderedProducts.forEach((el, i) => {
        if(i % 2 == 0){
            let product = el;
            let quantity = Number(orderedProducts[i+1]);

            storage[product] = quantity; 
        }
    });



    for(let i = 0; i < storedProducts.length; i+=2){
            let product = storedProducts[i];
            let quantity = Number(storedProducts[i+1]);
            if(storage[product] === undefined){
                storage[product] = 0;
            }
            storage[product] += quantity; 
    }
    
    for(let product in storage){
        console.log(`${product} -> ${storage[product]}`);
    }
    
}

store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
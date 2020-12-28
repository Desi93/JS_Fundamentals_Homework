function solve(n){
   

    for(let row = 1; row <= n; row++){ 
       let triangle = '';  
       for(let element = 1; element <= row; element++){
            triangle += row + ' ';
            
        }
        
        console.log(`${triangle}`);
        
    }
    
}

solve(5, 10);
function matrix(n){
    function printRows(n){
        let printRow = '';

        for(let i = 0; i < n; i++){
            printRow += `${n} `;
        }

        return printRow;
    }

    for(let i = 0; i < n; i++){
        console.log(printRows(n));
    }
}

matrix(3);
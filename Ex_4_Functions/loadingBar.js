function loadingBar(n){
    function printBar(n){
        let bar = '[';
        let bars = n / 10;
        let dots = 10 - bars;

        for(let i = 1; i <= bars; i++){
            bar += '%';
        }

        for(let i = 0; i < dots; i++){
            bar += '.';
        }

        bar += ']';

        return bar;
    }

    if(n < 100){
        console.log(`${n}% ${printBar(n)}`);
        console.log(`Still loading...`);
        
    } else {
        console.log(`100% Complete!`);
        console.log(printBar(n));
    }
}

loadingBar(100);
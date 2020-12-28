function arrayManipulator(arr, commands){

    function add(arr, elements){
        let index = elements.shift();
        arr.splice(index, 0, ...elements.slice());      

        return arr;
    }

    function addElements(arr, elements){
        let index = elements.shift();

        arr.splice(index, 0, ...elements.slice());

        return arr;
    }

    function contains(arr, element){
        element = Number(element[0]);
        for(let index = 0; index < arr.length; index){
            let number = arr[index];

            if(number == element){
                return index;
            } else {
                return -1;
            }
        }
    }

    function removeElement(arr, index){
        arr.splice(index, 1);
        
        return arr;
    }

    function shift(arr, positions){
        let toShift = arr.splice(0, positions[0]);
        for(let i = 0; i < toShift.length; i++){
            arr.push(toShift[i]);
        }

        

        return arr;
    }

    function sumPairs(arr){
        let newArr = [];
        let length = arr.length;

        for(let i = 0; i < length; i+=2){
            let sum = 0; 
            let firstNum = Number(arr[i]);
            let secondNum = Number(arr[i+1]);
            if(i == arr.length - 1){
                newArr.push(arr[arr.length - 1]);
            } else{
                sum = firstNum + secondNum;
                newArr.push(sum);
            }
            
        }

        arr = newArr;

        return arr;
    }

    let command = commands.shift();

    while(command != 'print'){
        let currentCommand = command.split(' ');
        let commandInfo = currentCommand.shift();
        let elements = currentCommand.slice().map(Number);
        
        switch(commandInfo){
            case 'add':
                add(arr, elements);
                break;
            
            case 'addMany':
                addElements(arr, elements);
                break;

            case 'contains':
                console.log(contains(arr, elements));
                break;

            case 'remove':
                removeElement(arr, elements);
                break;

            case 'shift':
                shift(arr, elements);
                break;

            case 'sumPairs':
                arr = sumPairs(arr);
                break;
        }

        command = commands.shift();
    }

    let print = `[ ${arr.join(', ')} ]`;

    console.log(print);

}

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['sumPairs', 'print']
);
function employees(input){
    let employee = {};

    for(let names of input){
        employee = {
            name: names,
            number: names.length
        };

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);
function movies(input){
    let movies = [];

    input.forEach(line => {
        let elements = line.split(' ');
        let nameIndex = elements.indexOf('addMovie');
        let directorIndex = elements.indexOf('directedBy');
        let dateIndex = elements.indexOf('onDate');

        if(nameIndex > -1){
            movies.push({name: elements.slice(nameIndex + 1).join(' ')});
        }

        if(directorIndex > -1){
            let name = elements.slice(0, directorIndex).join(' ');
            let director = elements.slice(directorIndex+1).join(' ');

            movies.forEach(movie => {
                if(movie.name == name){
                    movie.director = director;
                }
            });
        }

        if(dateIndex > -1){
            let name = elements.slice(0, dateIndex).join(' ');
            let date = elements.slice(dateIndex+1).join(' ');

            movies.forEach(movie => {
                if(movie.name == name){
                    movie.date = date;
                }
            });
        }
    });

    movies.forEach(movie => {
        if(movie.name != undefined 
            && movie.director != undefined 
            && movie.date != undefined){
                console.log(JSON.stringify(movie));
        }
    })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
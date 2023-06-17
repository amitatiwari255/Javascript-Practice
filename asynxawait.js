const movies = [
    { title: `A New Hope`, hero : `baskin`},
    { title: `The Empire Strikes Back`, hero : `jack`}
]

function getMovies(){
setTimeout(() => {
    movies.forEach((movie, index) => {
        console.log(movie.title)
    })
}, 1000);
}

function createMovies(movie){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        movies.push(movie);

        const error = false;

        if(!error){
            resolve();
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 2000);
})
}

async function init(){
await createMovies({ title: `Return of the Jedi`, hero : `john`});
getMovies(); 
}

init();
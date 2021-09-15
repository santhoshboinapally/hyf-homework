//Create an array of bad movies
//Creat an array of bad movies since year 2000
const movieUrl =
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";
async function getMovies() {
    try {
        const moviesResponse = await fetch(movieUrl);
        const movieS = await moviesResponse.json();
        //bad rated movies Array;
        const badRatedMovies = movieS.filter((movie) => movie.rating < 4);
        const badMoviesArray = badRatedMovies.map(
            (movieTitles) => movieTitles.title
        );
        console.log("Names of Bad rated Movies: ", JSON.stringify(badMoviesArray));
        // bad rated movies since 2000 Array
        const badRatedMovies2000 = badRatedMovies.filter(
            (movie) => movie.year >= 2000
        );
        const badMovies2000Array = badRatedMovies2000.map(
            (movieTitles) => movieTitles.title
        );
        console.log(
            "List of bad movies since 2000 : ",
            JSON.stringify(badMovies2000Array)
        );

        console.log("Number of bad movies are :", badMoviesArray.length);
        console.log(
            "Number of bad movies since year 2000 are : ",
            badMovies2000Array.length
        );

        console.log("Total number of  movies in api : ", movieS.length);
    } catch (err) {
        throw "Fetchin the Movies went wrong";
    }
}
getMovies();
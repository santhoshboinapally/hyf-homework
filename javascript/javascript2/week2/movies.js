// creating an array with short title by using filter
const shortTitle = movies.filter((movie) => movie.title.length <= 10);
//console.log("The movies with shorttitle are : ", shortTitle);

//Creating an array of movie titles with long movie titles
const longTitle = movies.filter((movie) => movie.title.length > 10);
//console.log("The movies with longtitle are : ", longTitle);

//Counting the number of movies made between 1980-1989 (including both the years)
const yearBetween = movies.filter(
    (movie) => movie.year >= 1980 && movie.year <= 1989
);
console.log(
    "Number of movies made in between 1980-1989 are ",
    yearBetween.length
);
//Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const goodRatedMovies = movies
    .filter((movie) => movie.rating >= 7)
    .map((movie) => Object.assign(movie, { tag: "Good" }));
console.log(goodRatedMovies);
const averageRatedMovies = movies
    .filter((movie) => movie.rating < 7 && movie.rating >= 4)
    .map((movie) => Object.assign(movie, { tag: "Average" }));
console.log(averageRatedMovies);
const badRatedMovies = movies
    .filter((movie) => movie.rating < 4)
    .map((movie) => Object.assign(movie, { tag: "Bad" }));
console.log(badRatedMovies);
console.log(movies);
//Using chaining, contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.
const ratingMovies = movies
    .filter((movie) => movie.rating > 6)
    .map((movies) => movies.title);
console.log("The movies rated higher than 6 are : ", ratingMovies);

//Count number of movies containing keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained
//Surfer,1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
const moviesKeywords = movies.filter(
    (movie) =>
    movie.title.toLocaleLowerCase().includes("surfer".toLocaleLowerCase()) ||
    movie.title.toLocaleLowerCase().includes("alien".toLocaleLowerCase()) ||
    movie.title.toLocaleLowerCase().includes("benjamin".toLocaleLowerCase())
);
console.log(
    "The number of the movies which contain the keywords [Surfer, Alien and Benjamin] are :",
    moviesKeywords.length
);
//Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
//Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
const duplicatedWord = movies.filter((currentMovie) => {
    const currentTitle = currentMovie.title.toLowerCase().split(" ");
    const sameWords = currentTitle.filter(
        (word, index) => currentTitle.indexOf(word) !== index
    );
    if (sameWords.length > 0) {
        return currentMovie;
    }
});
console.log(
    " The number of the duplicated words are : ",
    duplicatedWord.length
);
//Calculate the average rating of all the movies using reduce. Optional
const moviesRateOnly = movies
    .filter((movie) => movie.rating)
    .map((movie) => movie.rating);
const averageRate = moviesRateOnly.reduce((x, y) => {
    const totalRate = x + y / moviesRateOnly.length;
    return totalRate;
}, 0);
console.log(`The average of the rating of all the movies is ${averageRate}`);
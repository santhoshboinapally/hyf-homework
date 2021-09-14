//Fetching and waiting
const url =
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

function waitingTime() {
    console.log("Please wait for 3 seconds.");
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve("timeout after 3 seconds");
        }, 3000);
    });
}
//1. using promise and .then
waitingTime().then(() => {
    fetch(url)
        .then((resp) => resp.json())
        .then((movies) => console.log("movie list from promise and .then",movies))
        .catch((error) => console.log("Unable to load the data from Api"));
});

//2. using async/await

async function getData() {
    try {
        await waitingTime();
        const result = await fetch(url);
        const movies = await result.json();
        console.log("movie list from async/await ",movies);
    } catch (error) {
        console.log("Unable to load the data from Api");
    }
}
getData();

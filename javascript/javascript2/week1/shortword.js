const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const shortWord = getShortestWord(danishWords);

function getShortestWord() {
    let newWord = danishWords[0];
    for (let i = 1; i < danishWords.length; i++) {
        if (danishWords[i].length <= newWord.length) {
            newWord = danishWords[i];
        }
    }
    return newWord;
}
document.getElementById("ShortestWord").innerHTML =
    "Shortest word in array is : " + shortWord;
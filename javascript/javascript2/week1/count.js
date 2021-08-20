// Find and count the Danish letters
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
let danishLetters = danishLettersCounter(danishString2);

function danishLettersCounter(danString) {
    const stringArray = danString.split("");
    let total = 0;
    let åCount = 0;
    let æCount = 0;
    let øCount = 0;
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "å") {
            åCount++;
            total++;
        } else if (stringArray[i] === "ø") {
            øCount++;
            total++;
        } else if (stringArray[i] === "æ") {
            æCount++;
            total++;
        }
    } {
        return {
            total: total,
            å: åCount,
            ø: øCount,
            æ: æCount,
        };
    }
}
document.getElementById("danishLetters").innerHTML =
    "Number of Danish letters in " + danishLettersCounter(danishString2);

console.log(danishLettersCounter(danishString2));
console.log(danishLettersCounter(danishString));
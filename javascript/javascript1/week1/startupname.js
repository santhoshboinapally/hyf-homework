let firstWords = ["Samsung", "Apple", "Sony", "Moto", "OnePlus", "Microsoft", "RedHat", "Ford", "Mitsubishi", "Tesla"];
let lastWords = ["Galaxy", "IPhone", "Experia", "Razor", "Nord", "Windows", "Linux", "Fiesta", "SpaceStar", "Model S"];
const randomNumber = Math.floor(Math.random() * 10);
let startUpName = firstWords[randomNumber] + " " + lastWords[randomNumber];
console.log("The startup : " + startUpName + " contains " + startUpName.length + " characters ");
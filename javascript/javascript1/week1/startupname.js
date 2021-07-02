const firstWords = ["Samsung", "Apple", "Sony", "Moto", "OnePlus", "Microsoft", "RedHat", "Ford", "Mitsubishi", "Tesla"];
const lastWords = ["Galaxy", "IPhone", "Experia", "Razor", "Nord", "Windows", "Linux", "Fiesta", "SpaceStar", "Model S"];
const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * lastWords.length);
const startUpName = firstWords[randomNumber1] + " " + lastWords[randomNumber2];
console.log(`The startup ${startUpName} contains ${startUpName.length} characters `);

let candyPrice = 0;
let boughtCandyPrices = [];

function addCandy(candyType, weight) {
    if (candyType === "Sweet") {
        candyPrice = weight * 0.5;
        boughtCandyPrices.push(candyPrice);
    } else if (candyType == "Chocolate") {
        candyPrice = weight * 0.7;
        boughtCandyPrices.push(candyPrice);
    } else if (candyType == "Toffee") {
        candyPrice = weight * 1.1;
        boughtCandyPrices.push(candyPrice);
    } else if (candyType == "Chewing-Gum") {
        candyPrice = weight * 0.03;
        boughtCandyPrices.push(candyPrice);
    }
}

addCandy("Sweet", 25);
addCandy("Chocolate", 55);
addCandy("Toffee", 90);
addCandy("Chewing-Gum", 30);

console.log(boughtCandyPrices);

let amountToSpend = Math.random() * 100;
console.log(amountToSpend);
let total = 0;

function canBuyMoreCandy() {
    let n = 0;
    while (n < boughtCandyPrices.length) {
        n++;
        total = total + boughtCandyPrices[n];
    }
    if (total > amountToSpend) {
        return false;
    } else {
        return true;
    }
}

const buyMore = canBuyMoreCandy();
if (buyMore) {
    console.log("You can buy more, so please do!");
} else {
    console.log("Enough candy for you!");
}
addCandy("Toffee", 20);
addCandy("Chewing-Gum", 50);
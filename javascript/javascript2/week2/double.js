const numbers = [1, 2, 3, 4];
const oddNumbers = numbers
    .filter((newNumbers) => {
        return newNumbers % 2 !== 0;
    })
    .map((newNumbers) => newNumbers * 2);
console.log("The doubled numbers are :", oddNumbers);
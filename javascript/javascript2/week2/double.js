const numbers = [1, 2, 3, 4,5,6,7,8,9,10];
const oddNumbers = numbers
    .filter((newNumbers) => {
        return newNumbers % 2 !== 0;
    })
    .map((newNumbers) => newNumbers * 2);
console.log("The doubled numbers are :", oddNumbers);

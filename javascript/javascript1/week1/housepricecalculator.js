const gardenSizeInM2 = [100, 70];
const width = [8, 5];
const depth = [10, 11];
const height = [10, 8];
// Peters house price calculation 
let actualHousePrice = 2500000;
const volumeInMeters1 = width[0] * depth[0] * height[0];
let housePrice = volumeInMeters1 * 2.5 * 1000 + gardenSizeInM2[0] * 300;
if (actualHousePrice > housePrice) {
    console.log("Peter is paying too much");
} else {
    console.log("Peter is paying reasonable");
}
// Julia house price calculation
actualHousePrice = 1000000;
const volumeInMeters2 = width[1] * depth[1] * height[1];
housePrice = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM2 * 300;
if (actualHousePrice > housePrice) {
    console.log("Julia is paying too much")
} else {
    console.log("Julia is paying reasonable");
}

let volumeInMeters;
let housePrice;
// Peters house price calculation 
let gardenSizeInM2 = 100;
let width = 8,
    depth = 10,
    height = 10;
let actualHousePrice = 2500000;
volumeInMeters = width * depth * height;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (actualHousePrice > housePrice) {
    console.log("Peter is paying too much");
} else {
    console.log("Peter is paying reasonable");
}
// Julia house price calculation
gardenSizeInM2 = 70;
width = 5;
depth = 11;
height = 8;
actualHousePrice = 1000000;
volumeInMeters = width * depth * height;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (actualHousePrice > housePrice) {
    console.log("Julia is paying too much")
} else {
    console.log("Julia is paying reasonable");
}
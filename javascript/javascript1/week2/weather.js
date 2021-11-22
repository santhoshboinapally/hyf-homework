function tempDressing(temparature) {
    if (temparature < 6) {
        console.log("Weather is cold outside you must wear Winter Jocket");
    } else if (temparature >= 6 && temparature <= 16) {
        console.log("weather is bit cold you can wear lighter jacket");
    } else if (temparature > 16 && temparature <= 20) {
        console.log("weather is not so cold you can wear Hoodie");
    } else { console.log("weather is hot you can wear shorts and t-shirt"); }
}
/*const clothesToWear = tempDressing(0);
console.log(clothesToWear);*/
tempDressing(0);
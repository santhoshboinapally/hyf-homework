const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};
const travelTime =
    travelInformation.destinationDistance / travelInformation.speed;
const travelHours = parseInt(Number(travelTime));
const travelMinutes = Math.round((travelTime - travelHours) * 60);
console.log(travelHours + " hours and " + travelMinutes + " mintues "); // 8 hours and 38 minutes
const weekDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function getEventWeekday(number) {
    const day = new Date();
    const today = day.getDay();
    const eventDay = (today + number) % weekDay.length;
    return weekDay[eventDay];
}
console.log(getEventWeekday(7));
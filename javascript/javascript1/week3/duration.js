const seriesDurations = [{
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
    {
        title: "Marvel Super Hero's",
        days: 4,
        hours: 12,
        minutes: 30,
    },
];

function logSeriesText() {
    const age = 80;
    const ageInHours = age * 365 * 24;
    let total = 0;
    for (let i = 0; i < seriesDurations.length; i++) {
        const seriesTime =
            (seriesDurations[i].days *
                (seriesDurations[i].hours + seriesDurations[i].minutes)) /
            60;
        const totalSpent = ((seriesTime * 100) / ageInHours) * 100;
        const time = totalSpent.toFixed(2);
        console.log(
            seriesDurations[i].title + " took " + time + " % of Human Life "
        );
        total += totalSpent;
    }

    const totalTime = total.toFixed(2);
    console.log("The All Series took " + totalTime + " % of Human Life. ");
}
console.log(logSeriesText());
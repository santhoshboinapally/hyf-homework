//called after 3 seconds.
function setTimeoutPromise(resolveAfter) {
    return new Promise(() => {
        const seconds = resolveAfter / 1000;
        setTimeout(() => {
            console.log(`Called after ${seconds} seconds`);
        }, resolveAfter);
    });
}
setTimeoutPromise(3000);

function getCurrentLocation() {
    return new Promise((resolve, rejects) => {
        function getLocation(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve(`logitude ${longitude} and latitude ${latitude}`);
        }

        function error() {
            rejects("could't load your location");
        }
        if (!navigator.geolocation) {
            rejects("Geolocation is not supported by your browser!");
        } else {
            navigator.geolocation.getCurrentPosition(getLocation, error);
        }
    });
}
getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log("your location is : ", position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });
let firstName = document.getElementById("getname");
firstName.addEventListener("click", function getSpiritName() {
    let spiritAnimals = [
        "-Wolf",
        "-King Kong",
        "-Bear",
        "-Jaguar",
        "-Dolphin",
        "-Falcon",
        "-Gorilla",
        "-Tiger",
        "-Bull",
        "-Panther",
    ];
    let randomAnimal = spiritAnimals.length[Math.floor(Math.random() * 10)];
    let name1 = document.getElementById("name").value;
    if (name1 == "") {
        document.getElementById("animal").innerHTML = "Please enter name";
    } else {
        let name = document.getElementById("name").value + " " + randomAnimal;
        document.getElementById("animal").innerHTML = name;
    }
});

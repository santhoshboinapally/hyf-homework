// counting for L
let totalL = 0;
const keyL = document.querySelector("#countL");
const pressL = (event) => {
    if (event.keyCode == 76) {
        totalL++;
        keyL.innerHTML = totalL;
    }
};

function countL() {
    document.addEventListener("keyup", pressL);
}
// counting for S

let totalS = 0;
const keyS = document.querySelector("#countS");
const pressS = (event) => {
    if (event.keyCode == 83) {
        totalS++;
        keyS.innerHTML = totalS;
    }
};

function countS() {
    document.addEventListener("keyup", pressS);
}

//time of the game in seconds

const startButton = document
    .getElementById("my-button")
    .addEventListener("click", startGame);

function startGame() {
    const timeSet = document.getElementById("time").value;
    countL();
    countS();
    setTimeout(() => {
        game.innerHTML = "Game Over";
        if (totalS > totalL) {
            keyS.innerHTML = `WINNER 🥇 ${totalS}`;
        } else if (totalL > totalS) {
            keyL.innerHTML = `WINNER 🥇 ${totalL}`;
        } else {
            alert("Its a Tie. Please Try Again");
        }
        document.removeEventListener("keyup", pressL);
        document.removeEventListener("keyup", pressS);
    }, timeSet * 1000);
}
// restart the game..
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", (restartTheGame) => {
    document.location.href = "";
});

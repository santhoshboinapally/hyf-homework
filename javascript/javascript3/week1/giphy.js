const key = "AK0pKNZuDQ9yePeMtLxi4X3Rdf4lTHzO";
const mybutton = document
    .getElementById("my-button")
    .addEventListener("click", getGif);
const gifEmotion = document.getElementById("giphy-search");
const gifNumber = document.getElementById("limit");
const message = document.getElementById("msg");

function getGif() {
    let input = gifEmotion.value;
    let number = gifNumber.value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input}&limit=${number}&offset=0&rating=g&lang=en`;

    fetch(url)
        .then((response) => response.json())
        .then((info) => {
            info.data.forEach((element) => {
                if (number === "") {
                    message.innerHTML = "please enter number";
                } else {
                    // creating DOM elements.
                    let fig = document.createElement("figure");
                    let img = document.createElement("img");
                    img.src = element.images.downsized.url;
                    img.alt = element.title;
                    fig.appendChild(img);
                    //Here am comenting out figurecaption.Because if i apply it the caption is displaying in the rigth side of the image.
                    //let figCaption = document.createElement("caption");
                    //figCaption.textContent = element.title;
                    //fig.appendChild(figCaption);
                    let area = document.querySelector(".area");
                    area.insertAdjacentElement("afterbegin", fig);
                    document.querySelector("#giphy-search").value = "";
                    document.querySelector("#limit").value = "";
                }
            });
        });
}
//Am adding reset button.
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", (restartTheGame) => {
    document.location.href = "";
});
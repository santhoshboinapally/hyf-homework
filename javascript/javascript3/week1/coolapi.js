// This api is for GitHub Emojies

fetch("https://api.github.com/emojis")
    .then((response) => response.json())
    .then((data) => {
        const para = document.getElementById("ptag");
        para.innerHTML = "Denmark Flag";
        console.log(data.denmark);

        const imageurl = document.getElementById("image");
        imageurl.src = data.denmark;
    });
//Getting into promises.
let gitName1 = fetch(
    "https://api.github.com/search/repositories?q=user:suvarna-ratna"
);
let gitName2 = fetch(
    "https://api.github.com/search/repositories?q=user:saloumeh-67"
);
let gitName3 = fetch(
    "https://api.github.com/search/repositories?q=user:shabnam-ght"
);
let gitName4 = fetch(
    "https://api.github.com/search/repositories?q=user:JiuTak"
);
Promise.all([gitName1, gitName2, gitName3, gitName4])
    .then((responses) => responses.forEach((response) => render(response.json())))
    .catch((error) => console.log("error"));

function render(promis) {
    promis.then((data) => {
        console.log(data);
        let li = document.createElement("li");
        let ul = document.getElementById("ul");
        let h2 = document.createElement("h2");
        h2.innerHTML = `${data.items[0].owner.login} 's Repositories `;
        li.textContent = `FullName:${data.items[0].full_name} ,Owner:${data.items[0].owner.login}, RepositoryUrl:${data.items[0].owner.repos_url} , Url : ${data.items[0].owner.html_url}`;
        ul.appendChild(h2);
        ul.appendChild(li);
    });
}
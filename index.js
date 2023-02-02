const highscoreList = document.querySelector("#highscore-list");

// for (const li of highscoreList.children) {
//     console.log(li.innerText);
// }

// const highscore = [];

const highscoreJson = `
[
    {
    "name":"Magnus",
    "score": 14
    },
    {
    "name":"Vilda",
    "score": 0
    },
    {
    "name":"Frasse",
    "score": 5
    }
]
`;

populateHighscore();

function populateHighscore() {
const scoreEntries = JSON.parse(highscoreJson);
scoreEntries.sort((c, p) => c.score - p.score).reverse();

for (const entry of scoreEntries) {
    const li = document.createElement('li');
    li.classList.add("list-group-item", "bg-dark", "text-warning");
    li.innerText = `${entry.name} ${entry.score}`;
    highscoreList.appendChild(li);
}
}
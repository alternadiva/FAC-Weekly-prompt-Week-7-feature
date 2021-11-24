// collect data from HTML
const table = document.getElementById("table");
const card = document.getElementsByClassName("cards");
const cards = table.children;

const result = document.getElementById("result");

let fragment = document.createDocumentFragment(); //This method creates the document fragment, then append the elements of the document to the document fragment and make the changes according to the need. It is a safe method and thus prevents destroying of the DOM structure.

function shuffleCards() {
    while (cards.length) {
        fragment.appendChild(cards[Math.floor(Math.random() * cards.length)]);
    }
    table.appendChild(fragment);
    return cards;
}

window.addEventListener("load", shuffleCards)

console.log(cards)
// collect data from HTML
const table = document.getElementById("table");
const cards = document.querySelectorAll(".cards");
const cardOrder = table.children;

const result = document.getElementById("result");

// shuffle cards on page load - add function and add event listener

let fragment = document.createDocumentFragment(); //This method creates the document fragment, then append the elements of the document to the document fragment and make the changes according to the need. It is a safe method and thus prevents destroying of the DOM structure.

function shuffleCards() {
    while (cardOrder.length) {
        fragment.appendChild(cardOrder[Math.floor(Math.random() * cardOrder.length)]);
    }
    table.appendChild(fragment);
    return cardOrder;
}

window.addEventListener("load", shuffleCards)

//flip cards on click - giving class attribute to the clicked cards and setting the css effect

function flipCards() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCards))

//find matching cards
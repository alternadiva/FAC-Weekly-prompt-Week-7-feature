// collect data from HTML
const table = document.getElementById("table");
const cards = document.querySelectorAll(".cards");
const cardOrder = table.children;

const descriptions = document.querySelectorAll(".description");
let description;
const closeButton = document.querySelectorAll(".close-button")

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

let isItFlipped = false;

let flippedCardOne;
let flippedCardTwo;

let lockTable;

function flipCards() {
    if (lockTable === true) {
        return;
    }

    if (this === flippedCardOne) {
        return;
    }

    this.classList.add('flip');

    if (isItFlipped === false) {
        isItFlipped = true;
        flippedCardOne = this;
        return;
    }
    else {
        isItFlipped = false;
        flippedCardTwo = this; 
    }

    isItAMatch()
}

//find matching cards - keep the pairs' front-side and turn back the unmatched cards

function isItAMatch() {
    firstData = flippedCardOne.dataset.id;
    secondData = flippedCardTwo.dataset.id;

    let match = firstData === secondData;

    if (match === true) {
        popUpDescription();
        disableCards();
    }
    else {
        unflipCards();
    }
}

function disableCards() {
    flippedCardOne.removeEventListener('click', flipCards);
    flippedCardTwo.removeEventListener('click', flipCards);
    resetTable();
}

function unflipCards() {
    lockTable = true;
    setTimeout(function () {
        flippedCardOne.classList.remove('flip');
        flippedCardTwo.classList.remove('flip');
        resetTable();
    }
    , 1200);
}

//lock table to avoid two sets of cards being turned at the same time

//disable same card click - reset values of cards

function resetTable() {
    flippedCardOne = null;
    flippedCardTwo = null;

    isItFlipped = false;
    lockTable = false;
}

cards.forEach(card => card.addEventListener('click', flipCards))

//popup div on card match + close div

function popUpDescription() {
    for (let i = 0; i < descriptions.length; i++) {
        if (descriptions[i].dataset.id === firstData) {
            setTimeout(function () {
                descriptions[i].removeAttribute('hidden', '');
            }, 1000);
            description = descriptions[i];
        }
    }
}

function closeDescription() {
    description.setAttribute('hidden','');
}

closeButton.forEach(x => x.addEventListener('click', closeDescription));


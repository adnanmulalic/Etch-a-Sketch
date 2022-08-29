const bigDiv = document.querySelector('#big-div');
const selectedSquares = document.querySelectorAll('.squares');
const changer = document.querySelector('#changer');
const button = document.querySelector('#button');
let squareSide = 4;

changer.addEventListener("change", ()=> {
    squareSide = parseInt(changer.value);
    selectedSquares.forEach(element => {
        element.innerText = changer.value;
    });
});

button.addEventListener("click", ()=> {
    while (bigDiv.firstChild) {
        bigDiv.removeChild(bigDiv.firstChild);
    }
    for (let i = 0; i < changer.value; i++) {
        const smallDiv = document.createElement('div');
        smallDiv.classList.add('small-div');
        squareSide = 720 / parseInt(changer.value)
        smallDiv.style.minWidth = `${squareSide}px`;
        smallDiv.style.height = `${squareSide}px`;
        bigDiv.appendChild(smallDiv);
    }
})

function turnBlack() {
    this.classList.add('small-div-clicked');
}

const smallDivs = document.querySelectorAll(".small-div");

smallDivs.forEach(element => {
    element.addEventListener("mouseover", turnBlack);
});

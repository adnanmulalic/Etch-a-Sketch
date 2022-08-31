const bigDiv = document.querySelector('#big-div');
const selectedSquares = document.querySelectorAll('.squares');
const changer = document.querySelector('#changer');
const button = document.querySelector('#button');
const resetBtn = document.querySelector('#resetBtn');
let squareSide = 10;

function turnBlack() {
    this.classList.add('small-div-clicked');
}

//runs on page load -->
for (let y = 0; y < changer.value; y++) {
    for (let i = 0; i < changer.value; i++) {
        const smallDiv = document.createElement('div');
        smallDiv.classList.add('small-div');
        squareSide = 680 / parseInt(changer.value)
        smallDiv.style.minWidth = `${squareSide}px`;
        smallDiv.style.height = `${squareSide}px`;
        bigDiv.appendChild(smallDiv);
    }
}
let smallDivs = document.querySelectorAll(".small-div");
smallDivs.forEach(element => {
    element.addEventListener("mouseover", turnBlack);
});
//runs on page load <--

// visually changes number of squares chosen
changer.addEventListener("change", ()=> {
    squareSide = parseInt(changer.value);
    selectedSquares.forEach(element => {
        element.innerText = changer.value;
    });
});

//listeners that remove, recreate squares and changes their color
resetBtn.addEventListener("click", ()=> {
    smallDivs.forEach(element => {
        element.classList.remove('small-div-clicked');
    });
});
button.addEventListener("click", ()=> {
    while (bigDiv.firstChild) {
        bigDiv.removeChild(bigDiv.firstChild);
    }
    for (let y = 0; y < changer.value; y++) {
        for (let i = 0; i < changer.value; i++) {
            const smallDiv = document.createElement('div');
            smallDiv.classList.add('small-div');
            squareSide = 680 / parseInt(changer.value);
            smallDiv.style.minWidth = `${squareSide}px`;
            smallDiv.style.height = `${squareSide}px`;
            bigDiv.appendChild(smallDiv);
        }
    }
    smallDivs = document.querySelectorAll(".small-div");
    smallDivs.forEach(element => {
        element.addEventListener("mouseover", turnBlack);
    });
});


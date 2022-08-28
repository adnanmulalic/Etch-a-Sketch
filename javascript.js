const bigDiv = document.querySelector('#big-div');
for (let i = 0; i < 16; i++) {
    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small-div');
    bigDiv.appendChild(smallDiv);
}

function turnBlack() {
    this.classList.add('small-div-clicked');
}

const smallDivs = document.querySelectorAll(".small-div");

smallDivs.forEach(element => {
    element.addEventListener("mouseover", turnBlack);
});

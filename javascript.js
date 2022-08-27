const bigDiv = document.querySelector('#big-div');
for (let i = 0; i < 16; i++) {
    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small-div');
    bigDiv.appendChild(smallDiv);
}

const smallDivs = document.querySelectorAll(".small-div");

smallDivs.forEach(element => {
    let mouseDown = 0;
    element.addEventListener("mousedown", () => {
        mouseDown = 1;
        element.classList.add('small-div-clicked');
    })

    if (element.className === "small-div small-div-clicked") {
        element.addEventListener("mouseover", () => {
            element.classList.add('small-div-clicked');
            })   
    }
});

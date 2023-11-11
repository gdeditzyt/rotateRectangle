let reactangle = document.querySelector(".reactangle");
// TO change the no of reactangles
let divCount = document.querySelector("#div-count");
divCount.addEventListener("input", changeDivCount);
let childDiv;

function changeDivCount() {
    childDiv = document.createElement("div");
    for (let i = 0; i < divCount.value; i++){
        reactangle.appendChild(childDiv);
        reactangle = childDiv;
        reactangle.style.transform = `rotate(${i}deg)`;
    }
}





// To change the angle between the reactangles
let slider = document.querySelector("#angle-count");
slider.addEventListener("input", printValue);

function printValue() {
    reactangle = document.querySelector(".reactangle");
    let everyDiv = reactangle.querySelectorAll("div");
    console.log(everyDiv);

    everyDiv.forEach((div)=> {

        for(let i = 0; i <= slider.value; i ++) {
            div.style.transform = `rotate(${i}deg)`;
        }
    })
    if(childDiv) {
        reactangle = childDiv;
    }
}
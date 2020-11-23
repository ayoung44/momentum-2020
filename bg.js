// background
const body = document.querySelector("body");
const IMG_NUMBER = 5;


// Math.floor(Math.random() * 5);
// 1 ~ 5 (floor)
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

// function handleImgLoad() {
//     console.log("finished loading");
// }
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;


    // index.css > bgImage
    image.classList.add("bgImage");
    body.appendChild(image);

    // API 
    // image.addEventListener("loadend", handleImgLoad);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();